import { MailAdapter } from "../adapters/mail-adapter";
import { feedbacksRepository } from "../repositories/feedback-repository";

interface SubmitFeedbackUseCaseRequest {
    type: string;
    coment: string;
    screenshot?: string;
}

export class SubmitFeedbackUseCase {
    constructor(
        private feedbacksRepository: feedbacksRepository,
        private mailAdapter: MailAdapter,
    ) { }

    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type, coment, screenshot } = request;

        if (!type) {
            throw new Error('Type is required')
        }

        if (!coment) {
            throw new Error('coment is required')
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error('Invalid screenshot format.')
        }

        await this.feedbacksRepository.create({
            type,
            coment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: 'Novo feedback',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentario: ${coment}</p>`,
                `</div>`,
            ].join('\n')
        })
    }
}