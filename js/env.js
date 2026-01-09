// js/env.js
export const ENV = {
  GITHUB: {
    OWNER: "ghosthszz",
    REPO: "center3multimarcas",
    BRANCH: "main",
    TOKEN: "",

    FILES: {
      USERS: "data/dados.json",
      CARS: "data/car.json",
      IMAGES: "imagens"
    }
  },

  CRYPTO: {
    SECRET_KEY: "8f3c9a1e6b2d4f7c0a91e5b8d6c4f2a79e0b1d5c3a6f84e92b7d0c1a5e4f63",
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
