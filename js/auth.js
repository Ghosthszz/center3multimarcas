// js/auth.js
import { ENV } from "./env.js";
import { getFile, updateFile } from "./githubApi.js";
import { encrypt, decrypt } from "./crypto.js";

function storage() {
  return window[ENV.SESSION.STORAGE];
}

export function getLoggedUser() {
  const data = storage().getItem(ENV.SESSION.USER_KEY);
  return data ? JSON.parse(data) : null;
}

export function logout() {
  storage().removeItem(ENV.SESSION.USER_KEY);
  location.href = "login.html";
}

export async function login(email, senha) {
  const { content } = await getFile(ENV.GITHUB.FILES.USERS);
  const user = content.usuarios.find(u => u.email === email);

  if (!user) throw new Error("Usuário não encontrado");

  if (decrypt(user.senha) !== senha)
    throw new Error("Senha incorreta");

  const sessionUser = {
    id: user.id,
    nome: user.nome,
    email: user.email,
    role: user.role
  };

  storage().setItem(
    ENV.SESSION.USER_KEY,
    JSON.stringify(sessionUser)
  );

  return sessionUser;
}

export function requireAuth(role = null) {
  const user = getLoggedUser();
  if (!user) location.href = "login.html";
  if (role && user.role !== role) location.href = "index.html";
}
