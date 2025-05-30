import { BookOpen } from "lucide-react";
import Link from "next/link";


export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-8 h-8" />
                <span className="text-xl font-bold">UP</span>
              </div>
              <p className="text-blue-200">
                Universidade Positivo - Transformando vidas através da educação há mais de 30 anos.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Cursos</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Graduação
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pós-graduação
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    MBA
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    EAD
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Institucional</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Sobre a UP
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Missão e Valores
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Trabalhe Conosco
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Imprensa
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-blue-200">
                <li>
                  <Link href="#" className="hover:text-white">
                    Central do Aluno
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Biblioteca
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Financeiro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Ouvidoria
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Universidade Positivo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    )
}