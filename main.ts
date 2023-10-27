import express from "npm:express@4.18.2";
import { Request, Response } from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import ProfesorModel  from "./profesor.ts";


const MONGO_URL = "mongodb+srv://danielmarcossagradocorazon:4420@cluster0.ekwhrtt.mongodb.net/";
await mongoose.connect(MONGO_URL);
const app = express();

app.use(express.json());

app
  .get("/",async(req: Request, res: Response)=>{
    res.status(404).send("Hola mundo");
  })

  .get("/hola",async(req: Request, res: Response)=>{
    res.status(404).send("que tal estamos");
  })

  .post("/addProfesor",async(req: Request, res: Response)=>{
    try {
      const { name, age, asignatura } = req.body;
      if (!name || !age || !asignatura) {
        res.status(400).send("Name, asignatura and age are required");
        return;
      }
  
  
      const newPerson = new ProfesorModel({ name, age, asignatura });
      await newPerson.save();
  
      res.status(200).send({
        name: newPerson.name,
        age: newPerson.age,
        asignatura: newPerson.asignatura,
        id: newPerson._id.toString(),
      });
    } catch (error) {
      res.status(500).send(error.message);
      return;
    }




  })

  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });