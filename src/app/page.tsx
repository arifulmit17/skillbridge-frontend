import { Hero } from "@/components/sections/Hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="border border-black">
          <Hero></Hero>
      </section>
     
    </div>
  );
}
