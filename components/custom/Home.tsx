import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, Clock, MapPin, Truck } from 'lucide-react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[70vh] flex items-center justify-center">
                    <Image
                        src="/images/recovery.webp"
                        alt="Recovery truck on the road"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">24/7 Vehicle Recovery Services</h1>
                        <p className="text-xl mb-8">Fast, reliable, and professional assistance when you need it most</p>
                        <Button size="lg" asChild>
                            <Link href="#contact">Get Help Now</Link>
                        </Button>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16 bg-muted">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Roadside Assistance", icon: Truck, description: "Quick help for breakdowns and minor repairs" },
                                { title: "Vehicle Recovery", icon: Truck, description: "Towing services for all types of vehicles" },
                                { title: "Accident Recovery", icon: Truck, description: "Specialized recovery for accident-involved vehicles" },
                            ].map((service, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <service.icon className="h-10 w-10 mb-2 text-primary" />
                                        <CardTitle>{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>{service.description}</CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-16">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "24/7 Availability", icon: Clock, description: "We're here for you around the clock" },
                                { title: "Fast Response Time", icon: Truck, description: "Quick arrival to your location" },
                                { title: "Experienced Team", icon: Truck, description: "Skilled professionals at your service" },
                                { title: "Nationwide Coverage", icon: MapPin, description: "Serving you across the country" },
                            ].map((feature, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <feature.icon className="h-12 w-12 mb-4 text-primary" />
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16 bg-muted">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <Card className="w-full md:w-1/2">
                                <CardHeader>
                                    <CardTitle>Emergency Contact</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center mb-4">
                                        <PhoneCall className="h-5 w-5 mr-2 text-primary" />
                                        <span className="text-lg font-semibold">0800 123 4567</span>
                                    </div>
                                    <p className="text-muted-foreground">Our team is available 24/7 to assist you with any emergency.</p>
                                </CardContent>
                            </Card>
                            <div className="w-full md:w-1/2">
                                <h3 className="text-xl font-semibold mb-4">Request a Callback</h3>
                                <form className="space-y-4">
                                    <Input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full p-2 border border-input rounded-md"
                                        required
                                    />
                                    <Input
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        className="w-full p-2 border border-input rounded-md"
                                        required
                                    />
                                    <Textarea
                                        placeholder="How can we help?"
                                        className="w-full p-2 border border-input rounded-md"
                                        rows={4}
                                        required
                                    ></Textarea>
                                    <Button type="submit" className="w-full">Request Callback</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}