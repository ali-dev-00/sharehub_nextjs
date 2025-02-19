"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"

export default function SignIn() {
  const formRef = useRef(null)

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0.9,
      y: 20,
      duration: 0.5,
      ease: "power3.out",
    })
  }, [])

  return (
    <div className=" flex items-center justify-center   ">
      <Card className="w-full max-w-sm" ref={formRef}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign in to ShareHub</CardTitle>
          <CardDescription>Enter your email and password to access your account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full">Sign In</Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <Button variant="outline" className="w-full" type="button">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

