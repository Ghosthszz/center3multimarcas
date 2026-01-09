import { getFile, saveFile } from "./githubApi.js";
import { FILES } from "./env.js";

export async function log(action, user) {
    const logs = await getFile(FILES.logs);
    logs.push({
        action,
        user: user.email,
        date: new Date().toISOString()
    });
    await saveFile(FILES.logs, logs);
}
