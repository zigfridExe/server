import express from 'express';
import nodemailer from 'nodemailer';
import { prisma } from './prisma';

const app = express();

app.use(express.json()); //Midleware o tal do middleware

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2f0e519cbb42a7",
        pass: "34136faa34638f"
    }
});


app.post('/feedbacks', async (req, res) => {
    const { type, coment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            coment,
            screenshot,
        }
    })

    await transport.sendMail({
        from: 'Equipe Feedget <oi@fidget.com>',
        to: 'Everton Lyons Romansini<zigfrid.exe@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do feedback: ${type}</p>`,
            `<p>Comentario: ${coment}</p>`,
            `</div>`,
        ].join('')
    });

    return res.status(201).json({ data: feedback });
})

app.listen(3333, () => {
    console.log('HTTP server runing!')
})