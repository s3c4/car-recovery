import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-background border-t">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-sm text-muted-foreground">
                            We are a company dedicated to providing innovative solutions for our customers.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <address className="text-sm text-muted-foreground not-italic">
                            <p>Email: info@example.com</p>
                            <p>Phone: 123 456 7890</p>
                        </address>
                    </div>
                </div>
                <div className="mt-10 pt-6 border-t border-border">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Your Company Name. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 sm:mt-0">
                            <Button variant="ghost" size="icon" aria-label="Facebook">
                                <Facebook className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" aria-label="Twitter">
                                <Twitter className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" aria-label="Instagram">
                                <Instagram className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}