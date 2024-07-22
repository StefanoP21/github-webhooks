import { Request, Response } from 'express';

export class GitHubController {
    constructor() {}

    webhooksHandler(req: Request, res: Response) {
        const githubEvent = req.headers['x-github-event'];
        const payload = req.body;

        console.log({ githubEvent });

        res.status(202).send('Webhook received');
    }
}
