import Link from "next/link";
import { Button } from "./ui/button";
import { BookOpen } from "lucide-react";


export default function Header() {
    return(
        <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">UP</h1>
                <p className="text-sm text-blue-200">Universidade Positivo</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#cursos" className="hover:text-blue-200 transition-colors">
                Cursos
              </Link>
              <Link href="#sobre" className="hover:text-blue-200 transition-colors">
                Sobre
              </Link>
              <Link href="#contato" className="hover:text-blue-200 transition-colors">
                Contato
              </Link>
            </nav>
            <div className="flex space-x-2">
              <Link href="/login">
                <Button variant="outline" className="text-blue-900 border-white hover:bg-white">
                  Login
                </Button>
              </Link>
              <Link href="/cadastro">
                <Button className="bg-orange-500 hover:bg-orange-600">Cadastre-se</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    )
}