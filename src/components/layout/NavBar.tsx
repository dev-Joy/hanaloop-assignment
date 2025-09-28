'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Dashboard' },
  { href: '/post', label: 'Post' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className='flex h-full w-64 flex-col bg-gray-800 text-white'>
      <div className='p-4 text-2xl font-bold'>HanaLoop</div>
      <ul className='mt-4 flex-grow'>
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`block p-4 hover:bg-gray-700 ${
                pathname === href ? 'bg-green-600 font-bold' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
