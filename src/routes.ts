import express from 'express'; //Midleware o tal do middleware
import nodemailer from 'nodemailer'; //responsavel pelo envio dos e-mails
import { prisma } from './prisma'; //responsavel pelo banco de dados

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2f0e519cbb42a7",
        pass: "34136faa34638f"
    }
});

routes.post('/feedbacks', async (req, res) => {
    const { type, coment, screenshot } = req.body;

    //Parei aqui *****

    /*         await transport.sendMail({
                from: 'Equipe Feedget <oi@fidget.com>',
                to: 'Everton Lyons Romansini<zigfrid.exe@gmail.com>',
                subject: 'Novo feedback',
                html: [
                    `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                    `<p>Tipo do feedback: ${type}</p>`,
                    `<p>Comentario: ${coment}</p>`,
                    `</div>`,
                ].join('')
            }); */

    return res.status(201).json({ data: feedback });
})