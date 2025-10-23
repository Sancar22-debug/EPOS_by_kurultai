import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Apple, Chrome, Github } from "lucide-react";
import bgClouds from "@/assets/sky-mountains-bg.png";

const SignIn = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background px-4 py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgClouds})` }}
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
        <h1 className="font-title text-2xl text-primary text-center">Sign in</h1>

        <form className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Your password" />
          </div>

          <Button type="submit" className="w-full pixel-border pixel-hover bg-primary text-primary-foreground font-nav">
            Sign In
          </Button>
        </form>

        <div className="space-y-3">
          <div className="text-center text-xs text-foreground/70 font-body">Or continue with</div>
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
          New here? <a href="/signup" className="text-primary underline">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;


