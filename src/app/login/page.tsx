"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { BookOpen, ArrowLeft, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        senha: "",
        lembrarMe: false,
    })
    const [mostrarSenha, setMostrarSenha] = useState(false)

    const handleInputChange = (field: string, value: string | boolean) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Dados do login:", formData)
        // Aqui você implementaria a lógica de autenticação
        alert("Login realizado com sucesso!")
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-blue-900 text-white">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-4">
                            <ArrowLeft className="w-5 h-5" />
                            <div className="flex items-center space-x-2">
                                <BookOpen className="w-8 h-8" />
                                <span className="text-xl font-bold">UP</span>
                            </div>
                        </Link>
                        <Link href="/cadastro">
                            <Button variant="outline" className="text-blue-900 border-white hover:bg-white">
                                Criar conta
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-md mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl text-blue-900">Entrar</CardTitle>
                            <CardDescription className="text-lg">Acesse sua conta da UP</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        placeholder="seu@email.com"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="senha">Senha</Label>
                                    <div className="relative">
                                        <Input
                                            id="senha"
                                            type={mostrarSenha ? "text" : "password"}
                                            required
                                            value={formData.senha}
                                            onChange={(e) => handleInputChange("senha", e.target.value)}
                                            placeholder="Sua senha"
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                            onClick={() => setMostrarSenha(!mostrarSenha)}
                                        >
                                            {mostrarSenha ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="lembrarMe"
                                            checked={formData.lembrarMe}
                                            onCheckedChange={(checked) => handleInputChange("lembrarMe", checked as boolean)}
                                        />
                                        <Label htmlFor="lembrarMe" className="text-sm">
                                            Lembrar de mim
                                        </Label>
                                    </div>
                                    <Link href="/recuperar-senha" className="text-sm text-blue-600 hover:underline">
                                        Esqueci minha senha
                                    </Link>
                                </div>

                                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-lg py-3">
                                    Entrar
                                </Button>

                                <div className="text-center">
                                    <p className="text-sm text-gray-600">
                                        Não tem uma conta?{" "}
                                        <Link href="/cadastro" className="text-blue-600 hover:underline font-medium">
                                            Cadastre-se aqui
                                        </Link>
                                    </p>
                                </div>
                            </form>

                            <div className="mt-6 pt-6 border-t">
                                <div className="text-center">
                                    <p className="text-sm text-gray-600 mb-4">Ou acesse com:</p>
                                    <div className="space-y-2">
                                        <Button variant="outline" className="w-full">
                                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                />
                                                <path
                                                    fill="currentColor"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                />
                                            </svg>
                                            Continuar com Google
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                            Continuar com Facebook
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
