import { Member, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export interface typeMember {
  name: string,
  cpf: string,
  number: string,
  role: string,
  description: string,
  imgUrl: string
}

export class CreateMember {
  async execute({name, cpf, number, role, description, imgUrl}:typeMember):Promise<Member>{
    const newMember = await prisma.member.create({
      data: {
        name: name,
        cpf: cpf,
        number: number,
        role: role,
        description: description,
        imgUrl: imgUrl
      }
    })

    return newMember;
  }
}