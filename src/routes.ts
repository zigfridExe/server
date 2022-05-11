import express from 'express'; //Midleware o tal do middleware
import nodemailer from 'nodemailer'; //responsavel pelo envio dos e-mails
import { prisma } from './prisma'; //responsavel pelo banco de dados
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const { type, coment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository
    )

    await submitFeedbackUseCase.execute({
        type,
        coment,
        screenshot,
    })

    return res.status(201).send();
})