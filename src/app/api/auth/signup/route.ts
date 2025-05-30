/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { db } from "@/server/db"
import { signIn } from "@/server/auth"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const {
      email,
      senha,
      nomeCompleto,
      telefone,
      cpf,
      dataNascimento,
      endereco,
      cidade,
      estado,
      cep,
      cursoInteresse,
      modalidade,
      periodoEstudo,
      jaEstudou,
      receberInformacoes,
      aceitarTermos,
    } = body

    const existing = await db.user.findUnique({ where: { email } })
    if (existing) {
      return NextResponse.json({ error: "Email já cadastrado" }, { status: 400 })
    }

    const hashedPassword = await hash(senha, 10)

    const user = await db.user.create({
      data: {
        email,
        name: nomeCompleto,
      },
    })

    await db.userUp.create({
      data: {
        userId: user.id,
        nomeCompleto,
        telefone,
        cpf,
        dataNascimento: new Date(dataNascimento),
        endereco,
        cidade,
        estado,
        cep,
        cursoInteresse,
        modalidade,
        periodoEstudo,
        jaEstudou,
        receberInformacoes,
        aceitarTermos,
      },
    })

    await signIn("credentials", {
      email,
      password: senha,
      redirect: false,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[SIGNUP_ERROR]", error)
    return NextResponse.json({ error: "Erro ao cadastrar" }, { status: 500 })
  }
}
