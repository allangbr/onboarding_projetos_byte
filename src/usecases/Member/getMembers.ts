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

export class GetMembers {
  async execute():Promise<Member[]>{
    const newMember = await prisma.member.findMany();

    return newMember;
  }
}