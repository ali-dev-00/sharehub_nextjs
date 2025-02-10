"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    gsap.from(aboutRef.current, {
      opacity: 0.8,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <div ref={aboutRef} className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About ShareHub</h1>
      <div className="space-y-6">
        <p>
          ShareHub is a cutting-edge file storage and sharing platform designed to make your digital life easier and
          more secure. Founded in 2023, our mission is to provide a seamless and safe environment for individuals and
          businesses to store, access, and share their important files.
        </p>
        <p>
          At ShareHub, we understand the importance of your data. That's why we've built our platform with
          state-of-the-art security measures, ensuring that your files are protected at all times. Our team of
          experienced developers and security experts work tirelessly to stay ahead of potential threats and keep your
          data safe.
        </p>
        <p>
          We believe in the power of simplicity and user-friendly design. Our intuitive interface makes it easy for
          anyone to use ShareHub, regardless of their technical expertise. Whether you're a student, professional, or
          business owner, ShareHub has the tools you need to manage your digital assets effectively.
        </p>
        <p>
          As we continue to grow and evolve, we remain committed to our core values of security, simplicity, and
          reliability. We're constantly innovating and improving our services to meet the ever-changing needs of our
          users.
        </p>
        <p>
          Thank you for choosing ShareHub as your trusted file storage and sharing solution. We look forward to helping
          you keep your digital life organized and secure.
        </p>
      </div>
    </div>
  )
}

