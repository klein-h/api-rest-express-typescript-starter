import { Application } from 'express'
import { UserController } from '../controllers/userController'

export class Routes {
  public userController = new UserController()
  public routes (app: Application): void {
    app.route('/')
        .get(this.userController.getUser)
  }
}
