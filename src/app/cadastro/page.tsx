"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import Header from "@/components/header"

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    cpf: "",
    dataNascimento: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    cursoInteresse: "",
    modalidade: "",
    periodoEstudo: "",
    jaEstudou: false,
    receberInformacoes: true,
    aceitarTermos: false,
  })

  const router = useRouter()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem.")
      return
    }

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await res.json()

      if (!res.ok) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        alert(data.error ?? "Erro ao cadastrar.")
        return
      }

      const loginRes = await signIn("credentials", {
        email: formData.email,
        password: formData.senha,
        redirect: false,
      })

      if (loginRes?.ok) {
        router.push("/")
      } else {
        router.push("/login")
      }
    } catch (error) {
      console.error(error)
      alert("Erro ao conectar com o servidor.")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-blue-900">Cadastre-se na UP</CardTitle>
              <CardDescription className="text-lg">
                Preencha seus dados para começar sua jornada acadêmica conosco
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Dados Pessoais</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                      <Input id="nomeCompleto" type="text" required value={formData.nomeCompleto} onChange={(e) => handleInputChange("nomeCompleto", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" type="email" required value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="senha">Senha *</Label>
                      <Input id="senha" type="password" required value={formData.senha} onChange={(e) => handleInputChange("senha", e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="confirmarSenha">Confirmar Senha *</Label>
                      <Input id="confirmarSenha" type="password" required value={formData.confirmarSenha} onChange={(e) => handleInputChange("confirmarSenha", e.target.value)} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InputField id="telefone" label="Telefone *" value={formData.telefone} onChange={(v) => handleInputChange("telefone", v)} />
                    <InputField id="cpf" label="CPF *" value={formData.cpf} onChange={(v) => handleInputChange("cpf", v)} />
                    <Input id="dataNascimento" type="date" required value={formData.dataNascimento} onChange={(e) => handleInputChange("dataNascimento", e.target.value)} />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Endereço</h3>
                  <InputField id="endereco" label="Endereço Completo *" value={formData.endereco} onChange={(v) => handleInputChange("endereco", v)} />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InputField id="cidade" label="Cidade *" value={formData.cidade} onChange={(v) => handleInputChange("cidade", v)} />
                    <div>
                      <Label htmlFor="estado">Estado *</Label>
                      <Select value={formData.estado} onValueChange={(value) => handleInputChange("estado", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          {["PR", "SP", "RJ", "MG", "RS", "SC"].map((uf) => (
                            <SelectItem key={uf} value={uf}>{uf}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <InputField id="cep" label="CEP *" value={formData.cep} onChange={(v) => handleInputChange("cep", v)} />
                  </div>
                </div>

                <div className="space-y-4">
                  <CheckboxWithLabel id="receberInformacoes" label="Desejo receber informações sobre cursos e eventos por e-mail" checked={formData.receberInformacoes} onChange={(v) => handleInputChange("receberInformacoes", v)} />
                  <CheckboxWithLabel
                    id="aceitarTermos"
                    required
                    checked={formData.aceitarTermos}
                    onChange={(v) => handleInputChange("aceitarTermos", v)}
                    label={
                      <>
                        Aceito os{" "}
                        <Link href="#" className="text-blue-600 hover:underline">termos de uso</Link>{" "}
                        e{" "}
                        <Link href="#" className="text-blue-600 hover:underline">política de privacidade</Link>{" "}
                        *
                      </>
                    }
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-lg py-3">
                  Finalizar Cadastro
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function InputField({ id, label, value, onChange }: { id: string, label: string, value: string, onChange: (v: string) => void }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type="text" required value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}

function CheckboxWithLabel({ id, label, checked, onChange, required = false }: { id: string, label: React.ReactNode, checked: boolean, onChange: (v: boolean) => void, required?: boolean }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} checked={checked} onCheckedChange={(checked) => onChange(checked as boolean)} required={required} />
      <Label htmlFor={id} className="text-sm">{label}</Label>
    </div>
  )
}
