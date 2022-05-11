import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2f0e519cbb42a7",
        pass: "34136faa34638f"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail({
            from: 'Equipe Feedget <oi@fidget.com>',
            to: 'Everton Lyons Romansini<zigfrid.exe@gmail.com>',
            subject,
            html: body,
        });
    };
}