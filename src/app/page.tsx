"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Mail, MapPin, Phone} from "lucide-react"
import Footer from "@/components/footer"
import Header from "@/components/header"
import img1 from "@/app/images/1.jpeg"
import img2 from "@/app/images/2.jpeg"
import img3 from "@/app/images/3.jpeg"
import img4 from "@/app/images/4.jpeg"

const courses = [
  {
    id: 1,
    name: "Engenharia de Software",
    duration: "4 anos",
    modality: "Presencial",
    description:
      "Forme-se em uma das áreas mais promissoras da tecnologia. Aprenda desenvolvimento de sistemas, metodologias ágeis e gestão de projetos.",
    highlights: ["Metodologias Ágeis", "Desenvolvimento Full Stack", "Gestão de Projetos", "DevOps"],
    image: img1,
  },
  {
    id: 2,
    name: "Administração",
    duration: "4 anos",
    modality: "Presencial/EAD",
    description:
      "Desenvolva competências em gestão empresarial, liderança e estratégia. Prepare-se para liderar organizações do futuro.",
    highlights: ["Gestão Estratégica", "Liderança", "Marketing Digital", "Empreendedorismo"],
    image: img3,
  },
  {
    id: 3,
    name: "Medicina",
    duration: "6 anos",
    modality: "Presencial",
    description: "Curso de excelência com infraestrutura completa. Formação humanizada e técnica de alta qualidade.",
    highlights: ["Hospital Escola", "Laboratórios Modernos", "Residência Médica", "Pesquisa Científica"],
    image: img2,
  },
  {
    id: 4,
    name: "Design Gráfico",
    duration: "3 anos",
    modality: "Presencial",
    description:
      "Desenvolva sua criatividade e domine as ferramentas digitais. Crie identidades visuais e experiências únicas.",
    highlights: ["Adobe Creative Suite", "Branding", "UX/UI Design", "Motion Graphics"],
    image: img4,
  },
]

export default function HomePage() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6">Transforme seu futuro com a UP</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Há mais de 30 anos formando profissionais de excelência. Descubra os melhores cursos e construa uma carreira de sucesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#cursos">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-3">
                Conheça nossos cursos
              </Button>
            </Link>
            <Link href="/cadastro">
              <Button
                size="lg"
                variant="outline"
                className="text-blue-900 border-white hover:bg-white hover:text-black text-lg px-8 py-3"
              >
                Inscreva-se já
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="cursos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Cursos em Destaque</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos nossos principais cursos, desenvolvidos com excelência acadêmica e foco no mercado de trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative w-full h-48">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  <Badge className="absolute top-4 right-4 bg-orange-500">{course.modality}</Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-blue-900">{course.name}</CardTitle>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Destaques do curso:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.highlights.map((highlight, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-900 hover:bg-blue-800">Saiba mais</Button>
                    <Button variant="outline" className="flex-1">Inscreva-se</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Estamos aqui para esclarecer suas dúvidas e ajudar você a dar o próximo passo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Endereço</h3>
              <p className="text-gray-600">
                Rua Prof. Pedro Viriato Parigot de Souza, 5300
                <br />
                Curitiba - PR
              </p>
            </Card>

            <Card className="text-center p-6">
              <Phone className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Telefone</h3>
              <p className="text-gray-600">
                (41) 3317-3000
                <br />
                0800 644 4040
              </p>
            </Card>

            <Card className="text-center p-6">
              <Mail className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-600">
                contato@up.edu.br
                <br />
                vestibular@up.edu.br
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
