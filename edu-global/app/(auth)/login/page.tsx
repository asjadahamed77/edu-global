"use client"
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
import { authClient } from "@/lib/auth-client";
import { GithubIcon, Loader } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

export default function LoginPage() {

    const [githubPending, startGithubTransition] = useTransition()


    async function signInWithGithub(){
      startGithubTransition(
        async ()=> {
            await authClient.signIn.social({
                provider: "github",
                callbackURL: "/",
                fetchOptions: {
                    onSuccess: ()=> {
                        toast.success('Signed in with Github, you will be redirected..')
                    },
                    onError: (error)=> {
                        toast.error(error.error.message)
                    }
                }
            })
        }
      )
    }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome Back!</CardTitle>
        <CardDescription>
          Login with your GitHub or Email Account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button disabled={githubPending} onClick={signInWithGithub} className="w-full" variant="outline">
         {
            githubPending ? (
                <>
                <Loader className="size-4 animate-spin" />
                <span>Loading...</span>
                </>
            ) : (
               <>
                <GithubIcon className="size-4" /> 
                Sign in with GitHub
               </>
            )
         }
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
