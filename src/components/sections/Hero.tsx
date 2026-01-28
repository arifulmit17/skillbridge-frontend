import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"

export function Hero() {
  return (
    <div className="w-screen h-screen">
      <Carousel className="relative w-full h-full">
        <CarouselContent className="h-full">
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="h-full">
                <CardContent className="flex h-full items-center justify-center">
                  <span className="text-6xl font-semibold">
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation — now inside the carousel */}
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  )
}

