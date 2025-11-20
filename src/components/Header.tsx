import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-lg"
          : "bg-background/50 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="font-title text-lg md:text-xl text-primary">
          EPOS
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className={`font-nav text-lg hover:text-primary transition-all duration-300 hover:scale-110 ${path === "/" ? "underline underline-offset-4" : ""}`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`font-nav text-lg hover:text-primary transition-all duration-300 hover:scale-110 ${path === "/about" ? "underline underline-offset-4" : ""}`}
          >
            About Us
          </a>
          <a
            href="/demo"
            className={`font-nav text-lg hover:text-primary transition-all duration-300 hover:scale-110 ${path === "/demo" ? "underline underline-offset-4" : ""}`}
          >
            Demo
          </a>
          <a
            href="/shop"
            className={`font-nav text-lg hover:text-primary transition-all duration-300 hover:scale-110 ${path === "/shop" ? "underline underline-offset-4" : ""}`}
          >
            Shop
          </a>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            className="pixel-border pixel-hover font-nav"
            onClick={() => {
              if (path === "/") {
                document.getElementById('download')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              } else {
                navigate("/");
                // Wait for navigation to complete, then scroll to download section
                setTimeout(() => {
                  document.getElementById('download')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }, 100);
              }
            }}
          >
            Download
          </Button>
          <a href="/signup">
            <Button className="pixel-border pixel-hover font-nav bg-primary text-primary-foreground">
              Sign Up
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <a
              href="#home"
              className="font-nav text-lg hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="font-nav text-lg hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/shop"
              className="font-nav text-lg hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop
            </a>
            <Button
              variant="outline"
              className="pixel-border pixel-hover font-nav"
            >
              Download
            </Button>
            <Button className="pixel-border pixel-hover font-nav bg-primary text-primary-foreground">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
