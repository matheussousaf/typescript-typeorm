import { Request, Response } from "express";
const pj = require("../../package.json");

export class HealthController {
  static healthCheck = (req: Request, res: Response) => {
    const { version } = pj;

    res.send({ message: "OK", version });
  };
}
