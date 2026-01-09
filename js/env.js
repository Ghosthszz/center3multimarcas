// js/env.js
export const ENV = {
  GITHUB: {
    OWNER: "SEU_USUARIO",
    REPO: "SEU_REPOSITORIO",
    BRANCH: "main",
    TOKEN: "ghp_SEU_TOKEN_AQUI",

    FILES: {
      USERS: "data/dados.json",
      CARS: "data/car.json",
      IMAGES: "imagens"
    }
  },

  CRYPTO: {
    SECRET_KEY: "CHAVE_SUPER_SECRETA_256_BITS",
    IV: "1234567890123456"
  },

  SESSION: {
    STORAGE: "localStorage", // ou sessionStorage
    USER_KEY: "car_site_user"
  },

  WHATSAPP: {
    PHONE: "5511999999999"
  }
};
