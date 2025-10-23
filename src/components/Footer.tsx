import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Brand */}
          <div>
            <h3 className="font-title text-2xl">EPOS</h3>
            <p className="font-body text-sm mt-2">kurultai_support@gmail.com</p>
          </div>

          {/* Social Media */}
          <div className="md:ml-auto md:text-right">
            <h4 className="font-nav text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4 justify-start md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center pixel-border-light bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="font-body text-sm text-primary-foreground/80">
            EPOS © {currentYear} Kurultai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
