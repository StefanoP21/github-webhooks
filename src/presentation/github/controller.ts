import { Request, Response } from "express";

export class GitHubController {
    constructor() {}

    webhooksHandler(req: Request, res: Response) {
        res.json('GitHub');
    }
}