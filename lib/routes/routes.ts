import {Request, Response} from "express";
import { UserController } from "../controllers/userController";
export class Routes {
    public userController = new UserController();
    public routes(app): void {
        app.route('/')
            .get(this.userController.getUser)
    }
}
