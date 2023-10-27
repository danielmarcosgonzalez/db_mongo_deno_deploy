import mongoose from "npm:mongoose@7.6.3";
import { Profesor } from "./types.ts";

const Schema = mongoose.Schema;

const profesorSchema = new Schema(
  {
    name: { type: String, required: true },
    asignatura: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
  },
  { timestamps: true }
);

export type ProfesorModelType = mongoose.Document & Omit<Profesor, "id">;

export default mongoose.model<ProfesorModelType>("Profesor", profesorSchema);