"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const linkClass = (path: string) =>
    pathname === path
      ? "text-blue-500 font-bold"
      : "text-gray-700 hover:text-blue-500";

  return (
    <nav className="p-4 shadow mb-4">
      <div className="container mx-auto flex space-x-4">
        <Link href="/">
          <span className={linkClass("/")}>Home</span>
        </Link>
        <Link href="/about">
          <span className={linkClass("/about")}>About</span>
        </Link>
      </div>
    </nav>
  );
}
