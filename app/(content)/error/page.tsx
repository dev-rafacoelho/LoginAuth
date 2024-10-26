"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, ArrowLeft } from "lucide-react"

export default function Component() {
  const [isResettingPassword, setIsResettingPassword] = useState(false)

  const handleTryAgain = () => {
    // Aqui você redirecionaria o usuário de volta para a página de login
    console.log("Redirecionando para a página de login...")
  }

  const handleResetPassword = () => {
    setIsResettingPassword(true)
    // Aqui você iniciaria o processo de redefinição de senha
    console.log("Iniciando processo de redefinição de senha...")
    // Simular um processo de envio de e-mail
    setTimeout(() => {
      setIsResettingPassword(false)
      console.log("E-mail de redefinição de senha enviado!")
    }, 2000)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="flex items-center text-red-600">
            <AlertCircle className="w-6 h-6 mr-2" />
            Erro de Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Desculpe, o e-mail ou a senha que você inseriu está incorreto. Por favor, verifique suas credenciais e tente novamente.
          </p>
          <div className="space-y-4">
            <Button onClick={handleTryAgain} variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Login
            </Button>
            <Button
              onClick={handleResetPassword}
              disabled={isResettingPassword}
              className="w-full"
            >
              {isResettingPassword ? "Enviando e-mail..." : "Esqueci minha senha"}
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500 text-center w-full">
            Se você continuar tendo problemas, por favor entre em contato com o suporte.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}