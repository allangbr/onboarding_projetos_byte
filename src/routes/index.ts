import { Router, Request, Response } from "express";
import { memberRoutes } from "./member.routes";

const routes = Router();

//Definindo rotas de membros
routes.use("/member", memberRoutes);

export {routes};