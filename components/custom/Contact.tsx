import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4 mb-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                        Name
                    </label>
                    <Input id="name" type="text" className="w-full p-2 border border-input rounded-md" placeholder="Your Name" />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <Input id="email" type="email" className="w-full p-2 border border-input rounded-md" placeholder="Your Email" />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium">
                        Message
                    </label>
                    <Textarea id="message" className="w-full p-2 border border-input rounded-md" placeholder="Your Message" />
                </div>

                <Button type="submit" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 h-11 rounded-md px-8">
                    Submit
                </Button>
            </form>
        </div>
    );
}