import { Container } from "@/components/ui/container";

const footerLinks = [
  {
    title: "Produk",
    links: ["Fitur", "Harga", "Cara Kerja", "FAQ"],
  },
  {
    title: "Perusahaan",
    links: ["Tentang", "Blog", "Karir", "Kontak"],
  },
  {
    title: "Dukungan",
    links: ["Dokumentasi", "API", "Status", "Bantuan"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <Container>
        <div className="py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-baseline gap-1.5 mb-4">
              <span className="text-lg font-semibold tracking-tight">Chronos</span>
              <span className="text-sm text-muted-foreground">by Katalis</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Platform IoT untuk mengotomatiskan bisnis rental PlayStation. Self-checkout, pembayaran digital, dan kontrol otomatis.
            </p>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/50 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Katalis. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
