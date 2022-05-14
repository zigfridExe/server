import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            coment: 'example coment',
            screenshot: 'data:image/png;base642321545',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    })

    it('should not be able to submit feedback without type', async () => {

        await expect(submitFeedback.execute({
            type: '',
            coment: 'example coment',
            screenshot: 'data:image/png;base642321545',
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback without coment', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            coment: '',
            screenshot: 'data:image/png;base642321545',
        })).rejects.toThrow();
    })

    it('should not be able to submit feedback with an invalid screeenshot', async () => {

        await expect(submitFeedback.execute({
            type: 'BUG',
            coment: 'Está tudo bugado',
            screenshot: 'teste.jpg',
        })).rejects.toThrow();
    })
});