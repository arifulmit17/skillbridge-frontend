"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { z } from "zod"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
})


  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
  setError(null)

  const result = loginSchema.safeParse({ email, password })

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      toast.error(issue.message)
    })
    return
  }

  setLoading(true)

  try {
    const { data, error } = await authClient.signIn.email(result.data)

    if (error) {
      setError(error.message)
      toast.error("Login not successful, please try again.")
      return
    }

    if (data) {
      toast.success("Login successful")
      window.location.href = "/"
    }
  } catch {
    toast.error("Something went wrong. Please try again.")
  } finally {
    setLoading(false)
  }
}


  const session=authClient.getSession()
  // console.log(session);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>

              {error && (
                <FieldDescription className="text-red-500 text-center">
                  {error}
                </FieldDescription>
              )}

              <Field className="space-y-2">
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Logging in..." : "Login"}
                </Button>

              

                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="/signup">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
