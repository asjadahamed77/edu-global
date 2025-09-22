import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon } from "lucide-react";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome Back!</CardTitle>
        <CardDescription>
          Login with your GitHub or Email Account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button className="w-full" variant="outline">
          <GithubIcon className="size-4" /> 
          Sign in with GitHub
        </Button>
        <div className="relative flex items-center text-center text-sm">
          <div className="flex-grow border-t border-border"></div>
          <span className="relative z-10 bg-card px-2 text-muted-foreground">
            or continue with
          </span>
          <div className="flex-grow border-t border-border"></div>
        </div>

    <div className="grid gap-3">
    <div className="grid gap-2 ">
        <Label htmlFor="email">
            Email
        </Label>
        <Input type="email" placeholder="ajji@gmail.com" />
    </div> 
    </div>

    <Button>
        Continue with Email
    </Button>

      </CardContent>
    </Card>
  );
}
