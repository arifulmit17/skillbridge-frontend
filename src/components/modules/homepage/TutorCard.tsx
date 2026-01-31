import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

type Tutor = {
  id: string
  subject: string
  price: string
  isFeatured: boolean
  status: string
  reviews: { rating: string }[]
  category: { name: string }
}

export function TutorCard({ tutor }: { tutor: Tutor }) {
  

  return (
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-5 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">{tutor.subject}</h3>
            <p className="text-sm text-muted-foreground">
              {tutor.category.name}
            </p>
          </div>

          {tutor.isFeatured && (
            <Badge variant="secondary">Featured</Badge>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          
          <span className="text-muted-foreground">
            ({tutor.reviews.length} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="text-xl font-bold">
          ${tutor.price}
          <span className="text-sm font-normal text-muted-foreground">
            {" "} / hour
          </span>
        </div>

        {/* Status */}
        {tutor.status !== "ACTIVE" && (
          <Badge variant="destructive">Unavailable</Badge>
        )}
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  )
}
