import { getSession } from "./auth.js";

export function updateNavbar() {
    const user = getSession();
    if (!user) return;

    document.querySelector("#loginBtn").innerHTML =
        `👤 OLÁ, ${user.nome.toUpperCase()}`;
}
