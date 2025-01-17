import { envs } from '../../config';

export class DiscordService {
    private readonly discordWebhookUrl: string = envs.DISCORD_WEBHOOK_URL;

    constructor() {}

    async notify(message: string) {
        const body = {
            content: message,
            embeds: [
                {
                    image: {
                        url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmh1NjF2N2FqaGY2ejl5NXB3bzZibTVudHF4dWhlNjdnbDZmbWJvcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26u4nJPf0JtQPdStq/giphy.gif',
                    },
                },
            ],
        };

        const response = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            console.log('Failed to send message to Discord');
            return false;
        }

        return true;
    }
}
