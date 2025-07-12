// src/components/layout/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MANKERZ.STUDIO
        </Link>

        {/* Menú para desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/servicios" className="hover:text-orange-400 transition">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-orange-400 transition">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contacto" className="hover:text-orange-400 transition">
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón móvil (hamburguesa) - Lo implementaremos después */}
        <button className="md:hidden text-2xl">
          ☰
        </button>
      </div>
    </nav>
  );
}