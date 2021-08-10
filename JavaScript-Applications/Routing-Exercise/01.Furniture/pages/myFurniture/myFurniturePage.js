import authService from "../../services/authService.js";
import furnitureService from "../../services/furnitureService.js";
import { myFurnitureTemplate } from "./myFurnitureTemplate.js";

async function getView(context) {
    let id = authService.getUserId();
    let myFurniture = await furnitureService.getMyFurniture(id);
    let templateResult = myFurnitureTemplate(myFurniture);
    context.renderView(templateResult);
}

export default {
    getView
}