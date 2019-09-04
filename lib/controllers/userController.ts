import { Request, Response } from 'express'

export class UserController {
  public getUser (req: Request, res: Response): void {
    res.status(200).send({
      message: 'GET REQUEST OK'
    })
  }
}
