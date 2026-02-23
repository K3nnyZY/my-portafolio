const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/in/kennyzhuye/", label: "in" },
  { href: "https://github.com/K3nnyZY", icon: "/github.svg", alt: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t bg-black py-6 text-center">
        <p className="text-sm text-white">
          © 2026 Kenny Zhu. All rights reserved.
        </p>
    </footer>
  );
}
