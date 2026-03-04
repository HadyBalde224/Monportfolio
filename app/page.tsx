// app/page.jsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center   from-white to-gray-50 px-6">
      <div className="max-w-xl text-center">

        {/* Photo de profil */}
        <div className="flex justify-center mb-6">
          <Image
            src="/photo.jpg"
            alt="Ma photo"
            width={180}
            height={180}
            className="rounded-full object-cover shadow-md"
            priority
          />
        </div>

        {/* Titre */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Développeur Junior
        </h1>

        {/* Sous-titre */}
        <p className="text-gray-600 text-lg mb-6">
          Conception et développement de sites web modernes
        </p>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-8">
          Développeur passionné par le web, la cybersécurité et l’intelligence
          artificielle, je conçois des solutions performantes, fiables et
          adaptées aux besoins réels.
        </p>

        {/* Valeur ajoutée */}
        <div className="bg-blue-200 rounded-2xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-2">
            💻 Du concept à la mise en ligne
          </h3>
          <p className="text-gray-600">
            Je transforme vos idées en sites web concrèts, intuitives et
            évolutives.
          </p>
        </div>

        {/* Bouton de contact */}
        <Link
          href="/conctact"
          className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Me contacter
        </Link>

      </div>
    </main>
  );
}
