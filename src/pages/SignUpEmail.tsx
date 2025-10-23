import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import bgClouds from "@/assets/sky-mountains-bg.png";

const SignUpEmail = () => {
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
      <div className="w-full max-w-lg pixel-border bg-card/70 backdrop-blur-md p-8 space-y-6 shadow-xl">
        <h1 className="font-title text-2xl text-primary text-center">Sign up with Email</h1>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="Your first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Your last name" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Choose a username" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm password</Label>
              <Input id="confirm" type="password" placeholder="Re-enter password" />
            </div>
          </div>

          <Button type="submit" className="w-full pixel-border pixel-hover bg-primary text-primary-foreground font-nav">
            Create Account
          </Button>
        </form>

        <p className="font-body text-center text-sm text-foreground/80">
          Already have an account? <a href="/signin" className="text-primary underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpEmail;


