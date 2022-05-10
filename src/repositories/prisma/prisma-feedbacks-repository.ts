import { prisma } from "../../prisma";
import { feedbackCreateData, feedbacksRepository } from "../feedback-repository";

export class PrismaFeedbacksRepository implements feedbacksRepository {
    async create({ type, coment, screenshot }: feedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                coment,
                screenshot,
            }
        })
    };
}