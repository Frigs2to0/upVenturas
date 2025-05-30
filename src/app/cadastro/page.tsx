"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
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

      alert("Cadastro realizado com sucesso!")
      setTimeout(() => {
        router.push("/login")
      }, 0)
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
                {/* Dados Pessoais */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Dados Pessoais</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                      <Input
                        id="nomeCompleto"
                        type="text"
                        required
                        value={formData.nomeCompleto}
                        onChange={(e) => handleInputChange("nomeCompleto", e.target.value)}
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="senha">Senha *</Label>
                      <Input
                        id="senha"
                        type="password"
                        required
                        value={formData.senha}
                        onChange={(e) => handleInputChange("senha", e.target.value)}
                        placeholder="Mínimo 8 caracteres"
                      />
                    </div>

                    <div>
                      <Label htmlFor="confirmarSenha">Confirmar Senha *</Label>
                      <Input
                        id="confirmarSenha"
                        type="password"
                        required
                        value={formData.confirmarSenha}
                        onChange={(e) => handleInputChange("confirmarSenha", e.target.value)}
                        placeholder="Confirme sua senha"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        type="tel"
                        required
                        value={formData.telefone}
                        onChange={(e) => handleInputChange("telefone", e.target.value)}
                        placeholder="(41) 99999-9999"
                      />
                    </div>

                    <div>
                      <Label htmlFor="cpf">CPF *</Label>
                      <Input
                        id="cpf"
                        type="text"
                        required
                        value={formData.cpf}
                        onChange={(e) => handleInputChange("cpf", e.target.value)}
                        placeholder="000.000.000-00"
                      />
                    </div>

                    <div>
                      <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
                      <Input
                        id="dataNascimento"
                        type="date"
                        required
                        value={formData.dataNascimento}
                        onChange={(e) => handleInputChange("dataNascimento", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Endereço */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Endereço</h3>

                  <div>
                    <Label htmlFor="endereco">Endereço Completo *</Label>
                    <Input
                      id="endereco"
                      type="text"
                      required
                      value={formData.endereco}
                      onChange={(e) => handleInputChange("endereco", e.target.value)}
                      placeholder="Rua, número, complemento"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="cidade">Cidade *</Label>
                      <Input
                        id="cidade"
                        type="text"
                        required
                        value={formData.cidade}
                        onChange={(e) => handleInputChange("cidade", e.target.value)}
                        placeholder="Sua cidade"
                      />
                    </div>

                    <div>
                      <Label htmlFor="estado">Estado *</Label>
                      <Select value={formData.estado} onValueChange={(value) => handleInputChange("estado", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PR">Paraná</SelectItem>
                          <SelectItem value="SP">São Paulo</SelectItem>
                          <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                          <SelectItem value="MG">Minas Gerais</SelectItem>
                          <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                          <SelectItem value="SC">Santa Catarina</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="cep">CEP *</Label>
                      <Input
                        id="cep"
                        type="text"
                        required
                        value={formData.cep}
                        onChange={(e) => handleInputChange("cep", e.target.value)}
                        placeholder="00000-000"
                      />
                    </div>
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="receberInformacoes"
                      checked={formData.receberInformacoes}
                      onCheckedChange={(checked) => handleInputChange("receberInformacoes", checked as boolean)}
                    />
                    <Label htmlFor="receberInformacoes" className="text-sm">
                      Desejo receber informações sobre cursos e eventos por e-mail
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="aceitarTermos"
                      checked={formData.aceitarTermos}
                      onCheckedChange={(checked) => handleInputChange("aceitarTermos", checked as boolean)}
                      required
                    />
                    <Label htmlFor="aceitarTermos" className="text-sm">
                      Aceito os{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        termos de uso
                      </Link>{" "}
                      e{" "}
                      <Link href="#" className="text-blue-600 hover:underline">
                        política de privacidade
                      </Link>{" "}
                      *
                    </Label>
                  </div>
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
