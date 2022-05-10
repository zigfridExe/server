import { feedbacksRepository } from "../repositories/feedback-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    coment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: feedbacksRepository
    ) { }

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, coment, screenshot } = request;

        await this.feedbacksRepository.create({
            type,
            coment,
            screenshot,
        })
    }
}