import express, { Application } from "express";
import cors from "cors";
import cartRoutes from "./src/routes/cart";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/cart", cartRoutes);

export default app;
