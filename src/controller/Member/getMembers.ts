import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import { GetMembers } from "../../usecases/Member/getMembers";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient;

export class GetMembersController{
  async handle(req: Request, res: Response){
    try{

      const create = new GetMembers();

      //Buscando Membros
      const member = await create.execute();

      //Retornando a lista de Membros
      return res.send({
        member,
      },);

    } catch(err) {
      return res.status(StatusCodes.NOT_FOUND).send({error: "Falha na busca dos Membro"});
    }
  }
}