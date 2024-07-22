import { Request, Response } from 'express';
import { GitHubService } from '../services/github.service';

export class GitHubController {
    constructor(private readonly githubService = new GitHubService()) {}

    webhooksHandler = (req: Request, res: Response) => {
        const githubEvent = req.header('x-github-event') ?? 'unknown';
        const payload = req.body;
        let message: string;

        switch (githubEvent) {
            case 'star':
                message = this.githubService.onStar(payload);

                break;

            default:
                message = `Unknown event: ${githubEvent}`;
        }

        console.log(message);

        res.status(202).send('Webhook received');
    };
}
