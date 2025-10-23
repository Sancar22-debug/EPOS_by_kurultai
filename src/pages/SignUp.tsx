import { Button } from "@/components/ui/button";
import { Apple, Chrome, Github, Mail, ArrowLeft } from "lucide-react";
import bg3 from "@/assets/sky-mountains-bg.png";

const SignUp = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background px-4 py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${bg3})` }}
    >
      <div className="absolute top-8 left-8">
        <Button asChild variant="outline" size="lg" className="pixel-border font-nav">
          <a href="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="w-6 h-6" />
            Back to Home
          </a>
        </Button>
      </div>
      <div className="w-full max-w-md pixel-border bg-card/70 backdrop-blur-md p-8 space-y-6 shadow-xl">
        <h1 className="font-title text-2xl text-primary text-center">Create your account</h1>

        <div className="space-y-3">
          <a href="/signup/email">
            <Button className="w-full pixel-border pixel-hover bg-primary text-primary-foreground font-nav flex items-center gap-2 justify-center">
            <Mail className="w-5 h-5" />
            Continue with Email
            </Button>
          </a>
          <Button variant="outline" className="w-full pixel-border pixel-hover font-nav flex items-center gap-2 justify-center">
            <Chrome className="w-5 h-5" />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full pixel-border pixel-hover font-nav flex items-center gap-2 justify-center">
            <Apple className="w-5 h-5" />
            Continue with Apple
          </Button>
          <Button variant="outline" className="w-full pixel-border pixel-hover font-nav flex items-center gap-2 justify-center">
            <Github className="w-5 h-5" />
            Continue with GitHub
          </Button>
        </div>

        <p className="font-body text-center text-sm text-foreground/80">
          Already have an account? <a href="/signin" className="text-primary underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;


