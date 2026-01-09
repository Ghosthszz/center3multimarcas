import { getFile, saveFile } from "./githubApi.js";
import { FILES } from "./env.js";

export async function loadCars() {
    return await getFile(FILES.cars);
}

export async function saveCars(cars) {
    await saveFile(FILES.cars, cars);
}

export function filterCars(cars, query) {
    return cars.filter(c =>
        Object.values(c).join(" ").toLowerCase().includes(query.toLowerCase())
    );
}
