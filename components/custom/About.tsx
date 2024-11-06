import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Truck, Users, Award } from 'lucide-react'
import vintageImg from '../../public/images/vintige.webp';
import graphImg from '../../public/images/graph.webp';
import p1 from '../../public/images/p1.webp';
import Link from 'next/link';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center">
                    <Image
                        src={vintageImg}
                        alt="Team of recovery vehicle operators"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">About Our Company</h1>
                        <p className="text-xl mb-8">Providing reliable recovery services since 1995</p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-16">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                                <p className="text-muted-foreground mb-4">
                                    Founded in 1995, our recovery car service has been a beacon of reliability for stranded motorists across the country. What started as a small family business with a single tow truck has grown into a nationwide network of skilled professionals and state-of-the-art recovery vehicles.
                                </p>
                                <p className="text-muted-foreground mb-4">
                                    Our journey has been driven by a simple yet powerful mission: to provide swift, safe, and compassionate assistance to drivers in their moment of need. Over the years, we have helped countless individuals and families get back on the road, turning potentially stressful situations into stories of relief and gratitude.
                                </p>
                                <Button size="lg">Learn More About Our History</Button>
                            </div>
                            <div className="relative h-[400px]">
                                <Image
                                    src={graphImg}
                                    alt="Vintage photo of our first recovery truck"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="py-16 bg-muted">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Reliability", icon: Shield, description: "We're there when you need us, 24/7" },
                                { title: "Professionalism", icon: Users, description: "Our team is trained to handle any situation" },
                                { title: "Safety", icon: Truck, description: "Your safety is our top priority" },
                                { title: "Customer-First", icon: Award, description: "We go above and beyond for our customers" },
                            ].map((value, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <value.icon className="h-10 w-10 mb-2 text-primary" />
                                        <CardTitle>{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{value.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="py-16">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: "John Doe", role: "Founder & CEO", image: "/placeholder.svg?height=400&width=300" },
                                { name: "Jane Smith", role: "Operations Manager", image: "/placeholder.svg?height=400&width=300" },
                                { name: "Mike Johnson", role: "Lead Technician", image: "/placeholder.svg?height=400&width=300" },
                            ].map((member, index) => (
                                <Card key={index}>
                                    <CardContent className="p-4">
                                        <div className="relative h-[200px] mb-4">
                                            <Image
                                                src={p1}
                                                alt={`${member.name}, ${member.role}`}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-lg"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                        <p className="text-muted-foreground">{member.role}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="py-16 bg-primary text-primary-foreground">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Service?</h2>
                        <p className="text-xl mb-8">Join the thousands of satisfied customers who trust us for their vehicle recovery needs.</p>
                        <Link className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-11 rounded-md px-8' href='/contact'>Contact Us Now</Link>
                    </div>
                </section>
            </main>
        </div>
    )
}