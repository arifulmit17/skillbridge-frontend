"use client"

import { useState } from "react"
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
import { authClient } from "@/lib/auth-client"
import { async } from '../../../../proxy';

export  function SignupForm(props: React.ComponentProps<typeof Card>) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "tutor",
    image: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const  handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault()

    

    const payload = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role,
      image: formData.image || undefined,
    }

    console.log("Signup payload:", payload)
    try {
      const { data, error } = await authClient.signUp.email(payload)
      if(data){
        window.location.href="/"
      }
      if (error) {
        console.error("Signup error:", error)
        return
      }
      
    }catch (error) {
      console.error("Signup error:", error)
    }
    
    // send payload to your auth / signup API
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full Name</FieldLabel>
              <Input
                id="name"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="abc@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
            </Field>

            

            <Field>
              <FieldLabel htmlFor="role">Role</FieldLabel>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value="student">Student</option>
                <option value="tutor">Tutor</option>
                
              </select>
            </Field>

            <Field>
              <FieldLabel htmlFor="image">Profile Image URL</FieldLabel>
              <Input
                id="image"
                name="image"
                placeholder="https://example.com/image.png"
                value={formData.image}
                onChange={handleChange}
              />
              <FieldDescription>
                Optional profile photo.
              </FieldDescription>
            </Field>

            <Field>
              <Button type="submit" className="w-full">
                Create Account
              </Button>


              <FieldDescription className="text-center">
                Already have an account? <a href="/login">Sign in</a>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
