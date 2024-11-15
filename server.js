import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./src/config/dbConfig.js";

import { Form } from "./models/FormSchema.js";
import { Client } from "./models/ClientsSchema.js";
import { Project } from "./models/ProjectSchema.js";
import { News } from "./models/NewsSchema.js";

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

app.get("/", async (req, res) => {
  res.send("API is running");
});

app.get("/formDetail", async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch form details" });
  }
});

app.get("/mailDetail", async (req, res) => {
  try {
    const forms = await News.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch email details" });
  }
});

app.get("/projectDetail", async (req, res) => {
  try {
    const forms = await Project.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch project details" });
  }
});

app.get("/clientDetail", async (req, res) => {
  try {
    const forms = await Client.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch client details" });
  }
});

app.post("/form", async (req, res) => {
  try {
    const { Name, Email, Contact, City } = req.body;
    const form = new Form({ Name, Email, Contact, City });
    const savedForm = await form.save();

    res.status(201).json(savedForm);
  } catch (error) {
    res.status(500).json({ error: "Failed to save form data" });
  }
});

app.post("/email", async (req, res) => {
  console.log(req.body);

  try {
    const { Email } = req.body;
    const news = new News({ Email });
    const savedNews = await news.save();
    res.status(201).json(savedNews);
  } catch (error) {
    res.status(500).json({ error: "Failed to connect to server" });
  }
});

app.post("/project", async (req, res) => {
  try {
    try {
      //try to save img to codinary and fetec url

      const { image, Name, Description } = req.body;
      // const url = image
      const project = new Project({ image, Name, Description });
      const savedproject = await project.save();
      res.status(201).json(savedproject);
      console.log(savedproject);
    } catch (error) {
      res.status(500).json({ error: "Failed to save img data" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to save project data" });
  }
});

app.post("/client", async (req, res) => {
  try {
    try {
      //try to save img to codinary and fetec url
      const { image, Name, Description, Designation } = req.body;
      console.log(image);

      const client = new Client({ image, Name, Description, Designation });
      const savedclient = await client.save();
      res.status(201).json(savedclient);
    } catch (error) {
      res.status(500).json({ error: "Failed to save img data" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to save client data" });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  connectDB();
});
