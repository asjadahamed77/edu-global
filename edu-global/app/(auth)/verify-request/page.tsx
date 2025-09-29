"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useState } from "react";


export default function VerifyRequest() {
    const [otp, setOtp] = useState("")
  return <Card className="w-full mx-auto">
    <CardHeader className="text-center"> 
        <CardTitle className="text-xl">
            Please check your email
        </CardTitle>
        <CardDescription>
            We have sent a verification email code to your email address. Please open the email and paste the code below.
        </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
            <InputOTP value={otp} onChange={(value)=> setOtp(value)} maxLength={6} className="gap-4">
            <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
            </InputOTPGroup>
            </InputOTP>
            <p className="text-xs text-muted-foreground">Enter the 6-digit code sent your email.</p>
        </div>
        <Button className="w-full">
            Verify Account
        </Button>
    </CardContent>
  </Card>;
}
