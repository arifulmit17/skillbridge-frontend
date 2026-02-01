"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { env } from "@/env"

const NEXT_PUBLIC_API_URL=env.NEXT_PUBLIC_API_URL


type Category = {
  id: string
  name: string
}

type Tutor = {
  id: string
  name: string
}

export function SessionCreatePage({
  tutorId,
  studentId,
  categories,
}: {
  tutorId: string
  studentId: string
  categories: Category[]
}) {
  const [formData, setFormData] = useState({
    categoryId: "",
    startTime: "",
    endTime: "",
    status: "PENDING",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const  handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      tutorId,
      studentId,
      categoryId: formData.categoryId,
      startTime: new Date(formData.startTime).toISOString(),
      endTime: new Date(formData.endTime).toISOString(),
      status: formData.status,
    }

    console.log("Booking payload:", payload)
     try{
            const res=await fetch(`${NEXT_PUBLIC_API_URL}/teachingsessions`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(payload)
            })
            const data=await res.json()
            console.log(data);
        }
        catch(err){
            console.log(err);
            return {data:null,error:{message:"Failed to create session"}}
        }
  }

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>Create Session</CardTitle>
        <CardDescription>
          Book a tutoring session with your selected tutor.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            {/* Category */}
            <Field>
              <FieldLabel htmlFor="categoryId">Category</FieldLabel>
              <select
                id="categoryId"
                name="categoryId"
                required
                value={formData.categoryId}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </Field>

            {/* Start Time */}
            <Field>
              <FieldLabel htmlFor="startTime">Start Time</FieldLabel>
              <Input
                id="startTime"
                name="startTime"
                type="datetime-local"
                required
                value={formData.startTime}
                onChange={handleChange}
              />
              <FieldDescription>
                Session start time
              </FieldDescription>
            </Field>

            {/* End Time */}
            <Field>
              <FieldLabel htmlFor="endTime">End Time</FieldLabel>
              <Input
                id="endTime"
                name="endTime"
                type="datetime-local"
                required
                value={formData.endTime}
                onChange={handleChange}
              />
              <FieldDescription>
                Session end time
              </FieldDescription>
            </Field>

            {/* Status */}
            <Field>
              <FieldLabel htmlFor="status">Session Status</FieldLabel>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 text-sm"
              >
                <option value="PENDING">Pending</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </Field>

            {/* Submit */}
            <Field>
              <Button type="submit" className="w-full mt-6">
                Create Session
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
