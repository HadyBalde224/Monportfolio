'use client'
import { useState } from 'react'

export default function Contact() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Formulaire envoyé :')
    console.log('Nom:', nom)
    console.log('Email:', email)
    console.log('Message:', message)

    alert("Message envoyé ! (pour l'instant juste dans la console)")

    setNom('')
    setEmail('')
    setMessage('')
  }

  return (
    <main className="min-h-screen bg-white px-6 py-12 flex justify-center items-center">
      <div className="w-full max-w-lg">

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Me contacter
        </h1>

        <p className="text-gray-600 mb-8">
          Une idée, un projet ou une question ? N’hésitez pas à m’écrire.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Décrivez votre projet ou votre besoin..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
            Envoyer le message
          </button>
        </form>

      </div>
    </main>
  )
}
