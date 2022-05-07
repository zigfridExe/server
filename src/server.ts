import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json()); //Midleware o tal do middleware

app.post('/feedbacks', async (req, res) => {
    const { type, coment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            coment,
            screenshot,
        }
    })

    return res.status(201).json({ data: feedback });
})

app.listen(3333, () => {
    console.log('HTTP server runing!')
})