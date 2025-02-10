"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function PrivacyPolicy() {
  const privacyRef = useRef(null)

  useEffect(() => {
    gsap.from(privacyRef.current, {
      opacity: 0.8,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <div ref={privacyRef} className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6">
        <p>
          At ShareHub, we are committed to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our
          services.
        </p>
        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <p>We collect various types of information to provide and improve our services:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal information (e.g., name, email address) when you create an account</li>
          <li>Usage data and analytics to improve our services</li>
          <li>Information about the files you upload and share</li>
          <li>Device and browser information for security and optimization purposes</li>
        </ul>

        <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
        <p>We use the collected information for various purposes, including:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Providing and maintaining our services</li>
          <li>Improving and personalizing user experience</li>
          <li>Communicating with you about your account and our services</li>
          <li>Ensuring the security and integrity of our platform</li>
        </ul>

        <h2 className="text-2xl font-semibold">Data Security</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access, disclosure,
          alteration, and destruction. However, no method of transmission over the Internet or electronic storage is
          100% secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <p>
          You have the right to access, correct, or delete your personal information. You can also object to or restrict
          certain processing of your data. To exercise these rights, please contact us using the information provided at
          the end of this policy.
        </p>

        <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@sharehub.com.</p>
      </div>
    </div>
  )
}

