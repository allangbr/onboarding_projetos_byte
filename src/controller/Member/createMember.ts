import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import { CreateMember } from "../../usecases/Member/createMember";
import { StatusCodes } from "http-status-codes";

export const prisma = new PrismaClient;

export class CreateMemberController{
  async handle(req: Request, res: Response){
    const {name, cpf, number, role, description, imgUrl} = req.body;

    try{
      //Buscando no Banco de Dados se já existe um membro com o CPF inserido
      if(await prisma.member.findUnique({
        where: {
          cpf: cpf
        }
      })){
        return res.status(StatusCodes.UNAUTHORIZED).send({error: "Membro Já Existente"})
      }

      const create = new CreateMember();

      //Criando Membro
      const member = await create.execute({name, cpf, number, role, description, imgUrl});

      //Retornando Membro Cadastrado
      return res.send({
        member,
      },);

    } catch(err) {
      return res.status(StatusCodes.NOT_FOUND).send({error: "Falha no Registro do Membro"});
    }
  }
}