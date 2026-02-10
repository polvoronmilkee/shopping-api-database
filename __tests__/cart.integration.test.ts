import request from "supertest";
import app from "../app";
import { clearDatabase } from "./utils/db";
import { describe, beforeEach, afterAll, it, expect } from "@jest/globals";


describe("  Shopping Cart API (Supabase)", () => {
  beforeEach(async () => {});

  afterAll(async () => {});

  it("should save to the database", async () => {
    const newItem = { name: "Buhok ni Ahron", price: 67 };
    const res = await request(app).post("/api/cart").send(newItem);

    expect(res.statusCode).toEqual(201);
    expect(res.body.id).toBeDefined();

    const dbCheck = await request(app).get("/api/cart");

    expect(dbCheck.body.length).toEqual(1);
    expect(dbCheck.body[0].name).toEqual("Buhok ni Ahron");
  });
});
