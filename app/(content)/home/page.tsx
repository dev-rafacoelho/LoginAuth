"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MenuIcon, XIcon } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="text-xl font-bold text-gray-800">
                Logo
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="sr-only">Abrir menu</span>
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Início
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Sobre
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Serviços
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contato
              </a>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Button variant="outline" className="ml-8">
                Entrar
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Início
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Sobre
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Serviços
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Contato
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Button variant="outline" className="block w-full text-center">
                Entrar
              </Button>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Bem-vindo à Nossa Plataforma
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-500">
              Descubra como podemos ajudar você a alcançar seus objetivos com nossas soluções inovadoras.
            </p>
            <div className="mt-10">
              <Button size="lg">Comece Agora</Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Nossos Serviços</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Serviço 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Descrição detalhada do primeiro serviço que oferecemos aos nossos clientes.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Serviço 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Explicação sobre o segundo serviço principal disponível em nossa plataforma.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Serviço 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Detalhes sobre o terceiro serviço que torna nossa oferta única no mercado.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Sobre</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Carreiras
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Recursos</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Documentação
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Guias
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Termos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Social</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-300 hover:text-white">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2023 Sua Empresa, Inc. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}