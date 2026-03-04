import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex gap-8 text-sm md:text-base font-medium">
          <Link href="/" className="hover:text-yellow-300 transition">
            Accueil
          </Link>

          <Link href="/a-propos" className="hover:text-yellow-300 transition">
            À propos
          </Link>

          <Link href="/conctact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </div>

      </nav>
    </header>
  );
}