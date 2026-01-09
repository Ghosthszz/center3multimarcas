import { getSession } from "./auth.js";
import { saveFile, getFile } from "./githubApi.js";
import { FILES } from "./env.js";

export async function toggleFavorite(carId) {
    const user = getSession();
    if (!user) return;

    user.favorites = user.favorites || [];
    user.favorites.includes(carId)
        ? user.favorites = user.favorites.filter(id => id !== carId)
        : user.favorites.push(carId);

    const users = await getFile(FILES.users);
    const index = users.findIndex(u => u.id === user.id);
    users[index] = user;

    await saveFile(FILES.users, users);
    localStorage.setItem("session", JSON.stringify(user));
}
