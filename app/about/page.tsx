'use client'

import Image from "next/image"
import AboutHead from "./_components/head"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const AboutPage = () => {
  return (
    <>
      <AboutHead />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            {/* Company Overview */}
            <section className="mb-20 text-center">
              <h1 className="text-4xl font-extrabold mb-6">About LinguaAI</h1>
              <p className="text-xl text-muted-foreground">
                Dedicated to breaking down language barriers through advanced AI-powered translation services. Our mission is to make communication seamless and accessible for everyone, everywhere.
              </p>
            </section>

            {/* Mission Statement */}
            <Card className="mb-20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-center">
                  To empower individuals and businesses by providing reliable and efficient translation solutions, fostering global connectivity and understanding.
                </p>
              </CardContent>
            </Card>

            {/* Team Members */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">Meet the Developer</h2>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                {[
                  { name: "Minsu", role: "Founder & Software Engineer", image: "/minsu.png" }
                ].map((member, index) => (
                  <Card key={index} className="flex flex-col items-center text-center p-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </Card>
                ))}
              </div>
            </section>

            {/* Company History */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg text-center">
                    Founded in 2024, LinguaAI was born out of the vision to create a world without language barriers. 
                  </p>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default AboutPage