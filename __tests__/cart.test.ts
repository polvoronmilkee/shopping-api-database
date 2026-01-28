import request from "supertest";
import app from "../app";

import supabase from "../src/supabaseClient";

jest.mock("../src/supabaseClient", () => ({
  __esModule: true,
  default: {
    from: jest.fn(),
  },
}));

describe("Shopping Cart API (Supabase)", () => {
  it("should fetch all items", async () => {
    const mockData = [{ id: 1, name: "Laptop", price: 999 }];

    (supabase.from as jest.Mock).mockReturnValue({
      select: jest.fn().mockResolvedValue({ data: mockData, error: null }),
    });

    const res = await request(app).get("/api/cart");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockData);
  });
});

// test for post

it("should add a new item", async () => {
  const newItem = { name: "Buhok ni Ahron", price: 67 };
  const mockResponse = [{ id: 2, ...newItem }];

  // supabase.from().insert().select()
  (supabase.from as jest.Mock).mockReturnValue({
    insert: jest.fn().mockReturnThis(),
    select: jest.fn().mockResolvedValue({ data: mockResponse, error: null }),
  });

  const res = await request(app).post("/api/cart").send(newItem);

  expect(res.statusCode).toEqual(201);
  expect(res.body).toEqual(mockResponse[0]);
});

// error handling

it("should handle Supabase errors gracefully", async () => {
  (supabase.from as jest.Mock).mockReturnValue({
    select: jest.fn().mockResolvedValue({
      data: null,
      error: { message: "Database connection failed" },
    }),
  });

  const res = await request(app).get("/api/cart");

  expect(res.statusCode).toEqual(500);
  expect(res.body.error).toEqual("Database connection failed");
});

// handle negative input values

// TDD - test, driven, dev't
// 1. Make the test case
// 2. Run the test
// 3. Code
// 4. Run the test
// 5. Refactor
