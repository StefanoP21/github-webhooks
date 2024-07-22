import { GitHubIssuePayload, GitHubStarPayload } from '../../interfaces';

export class GitHubService {
    constructor() {}

    onStar(payload: GitHubStarPayload): string {
        const { action, sender, repository } = payload;

        return `User ${sender.login} has ${action} a star on ${repository.full_name}`;
    }

    onIssue(payload: GitHubIssuePayload): string {
        const { action, sender, issue, repository } = payload;

        return `User ${sender.login} has ${action} issue #${issue.number} on ${repository.full_name}`;
    }
}
