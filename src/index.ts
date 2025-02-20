import express from "express";
import { PrismaClient } from '@prisma/client'
const app = express();
const prismaclient = new PrismaClient();

app.get("/", async (req, res) => {
    const data = await prismaclient.user.findMany()
        res.json({ data ,message: "get end point" })
})
app.post("/", async (req, res) => {
    // const name = req.body.name;
    const { username, name } = req.body;
    await prismaclient.user.create({
        data: {
            username: username,
            name: name
        }
    })
    res.json({ message: "user created" })
})

app.listen(3000)