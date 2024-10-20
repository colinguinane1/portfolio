import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-4">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2023 Colin Guinane. All rights reserved.</p>
        <Link className="font-extrabold" href="mailto:colin@c-g.dev">
          colin@c-g.dev
        </Link>
      </div>
    </footer>
  );
}
