// js/githubApi.js
import { ENV } from "./env.js";

const BASE_URL = `https://api.github.com/repos/${ENV.GITHUB.OWNER}/${ENV.GITHUB.REPO}/contents`;

function getHeaders() {
  return {
    "Authorization": `Bearer ${ENV.GITHUB.TOKEN}`,
    "Accept": "application/vnd.github+json"
  };
}

export async function getFile(path) {
  const res = await fetch(`${BASE_URL}/${path}`, {
    headers: getHeaders()
  });

  if (!res.ok) throw new Error("Erro ao buscar arquivo");

  const data = await res.json();
  return {
    content: JSON.parse(atob(data.content)),
    sha: data.sha
  };
}

export async function updateFile(path, content, sha, message = "update") {
  const body = {
    message,
    content: btoa(JSON.stringify(content, null, 2)),
    sha,
    branch: ENV.GITHUB.BRANCH
  };

  const res = await fetch(`${BASE_URL}/${path}`, {
    method: "PUT",
    headers: {
      ...getHeaders(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) throw new Error("Erro ao atualizar arquivo");

  return await res.json();
}

export async function uploadImage(path, base64, message = "upload image") {
  const body = {
    message,
    content: base64,
    branch: ENV.GITHUB.BRANCH
  };

  const res = await fetch(`${BASE_URL}/${path}`, {
    method: "PUT",
    headers: {
      ...getHeaders(),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) throw new Error("Erro ao subir imagem");

  return await res.json();
}
