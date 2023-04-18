import { Router, Request, Response, request } from "express";
import { CreateMemberController } from "../controller/Member/createMember";

const memberRoutes = Router();

//Instânciando o Controller do método CreateMember
const createMemberController = new CreateMemberController();

//Definindo rota do método create
memberRoutes.post("/create", createMemberController.handle);

export {memberRoutes};