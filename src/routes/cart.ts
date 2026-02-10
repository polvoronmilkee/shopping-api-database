import { Router, Request, Response } from "express";
import  supabase  from "../supabaseClient";

const router = Router();

// GET /api/cart - Fetch from Supabase
router.get("/", async (req: Request, res: Response) => {
  const { data, error } = await supabase.from("cart_items").select("*");

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(200).json(data);
});

router.post("/", async (req: Request, res: Response) => {
  const { name, price } = req.body;

  if (!name || !price) {
    res.status(400).json({ error: "Name and price are required" });
    return;
  }

  const { data, error } = await supabase
    .from("cart_items")
    .insert({ name, price })
    .select();

  if (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  res.status(201).json(data[0]);
});

export default router;
