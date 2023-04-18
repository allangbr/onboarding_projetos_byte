import { Router, Request, Response, request } from "express";
import { CreateMemberController } from "../controller/Member/createMember";
import { GetMembersController } from "../controller/Member/getMembers";

const memberRoutes = Router();

//Instânciando o Controller do método CreateMember
const createMemberController = new CreateMemberController();

//Instânciando o Controller do método GetMembers
const getMembersController = new GetMembersController();

//Definindo rota do método create
memberRoutes.post("/create", createMemberController.handle);

memberRoutes.get("/members", getMembersController.handle)

export {memberRoutes};