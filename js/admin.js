import { loadCars, saveCars } from "./cars.js";
import { uploadImage } from "./githubApi.js";
import { IMAGE_PATH } from "./env.js";

export async function addCar(car, cover, images) {
    const cars = await loadCars();
    cars.push(car);
    await saveCars(cars);

    await uploadImage(`${IMAGE_PATH}carro_${car.placa}_capa.jpg`, cover);
    for (let i = 0; i < images.length; i++) {
        await uploadImage(`${IMAGE_PATH}carro_${car.placa}_${i}.jpg`, images[i]);
    }
}
