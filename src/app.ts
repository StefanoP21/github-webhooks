import express from 'express';
import { envs } from './config';
import { GitHubController } from './presentation/github/controller';

(() => {
    main();
})();

function main() {
    const app = express();
    const controller = new GitHubController();

    app.use(express.json());

    app.post('/api/github', controller.webhooksHandler);

    app.listen(envs.PORT, () => {
        console.log(`Server running at: http://localhost:${envs.PORT}`);
    });
}
