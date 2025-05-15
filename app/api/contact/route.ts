import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Enviar datos a Formspree
    const formspreeResponse = await fetch("https://formspree.io/f/mzzrvgoq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    })

    if (!formspreeResponse.ok) {
      throw new Error("Error al enviar el formulario a Formspree")
    }

    return NextResponse.json({ message: "Mensaje enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error)
    return NextResponse.json({ message: "Error al enviar el mensaje" }, { status: 500 })
  }
}
