"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const pricingPlans = [
  {
    name: "Basic",
    price: "$9.99",
    description: "Perfect for individual users",
    features: ["10GB Storage", "File Sharing", "Mobile Access"],
  },
  {
    name: "Pro",
    price: "$19.99",
    description: "Ideal for small teams",
    features: ["100GB Storage", "Advanced Sharing", "Priority Support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: ["Unlimited Storage", "Admin Controls", "Dedicated Support"],
  },
]

export default function Pricing() {
  const pricingRef = useRef(null)

  useEffect(() => {
    gsap.from(pricingRef.current, {
      opacity: 0.8,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <div ref={pricingRef}>
      <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

