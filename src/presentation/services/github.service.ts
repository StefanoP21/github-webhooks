import { GitHubStarPayload } from '../../interfaces';

export class GitHubService {
    constructor() {}

    onStar(payload: GitHubStarPayload): string {
        const { action, sender, repository } = payload;

        return `User ${sender.login} has ${action} a star on ${repository.full_name}`;
    }
}