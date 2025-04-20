import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configuración del transporte de correo
// En producción, deberías usar variables de entorno para estas credenciales
const transporter = nodemailer.createTransport({
  host: "smtp.example.com", // Cambia esto por tu servidor SMTP
  port: 587,
  secure: false, // true para 465, false para otros puertos
  auth: {
    user: "tu-email@example.com", // Tu dirección de correo
    pass: "tu-contraseña", // Tu contraseña
  },
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validación básica
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Configuración del correo
    const mailOptions = {
      from: `"Formulario de Contacto" <${email}>`,
      to: "tu-email@example.com", // Tu dirección de correo donde recibirás los mensajes
      subject: `Nuevo mensaje de contacto: ${subject}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Asunto: ${subject}
        
        Mensaje:
        ${message}
      `,
      html: `
        <h3>Nuevo mensaje desde el formulario de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Enviar el correo
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Mensaje enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al procesar el formulario de contacto:", error)
    return NextResponse.json({ message: "Error al enviar el mensaje" }, { status: 500 })
  }
}
