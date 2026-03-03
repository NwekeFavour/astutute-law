import Image from "next/image";
import Link from "next/link";
import Logo7 from "@/public/assets/images/logo7.webp"
import { MailIcon, MapPin, Phone } from "lucide-react";

export default function Footer() { 
    return (
        <div>
            <footer className="bg-white text-gray-900 pt-16">
                <div className="max-w-7xl mx-auto px-10 md:px-20">
                    {/* Top section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12">
                    
                    {/* Brand & Social */}
                    <div>
                        <Image
                        src={Logo7}
                        alt="Law-Firm-Logo"
                        className="h-10 mb-4"
                        />
                        <p className="text-sm leading-relaxed mb-6 text-gray-400">
                        Include any additional information that may be relevant or helpful
                        for visitors, such as FAQs, pricing options.
                        </p>

                        <div className="flex gap-4">
                            {/* Facebook */}
                            <Link
                                href="#"
                                className="group w-9 h-9 flex items-center justify-center rounded-full 
                                        bg-teal-100/60 hover:bg-teal-600 transition"
                            >
                                <svg
                                className="w-3 text-teal-700 transition group-hover:text-white"
                                aria-hidden="true"
                                viewBox="0 0 320 512"
                                >
                                <path
                                    fill="currentColor"
                                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                />
                                </svg>
                            </Link>

                            {/* Twitter / X */}
                            <Link
                                href="#"
                                className="group w-9 h-9 flex items-center justify-center rounded-full 
                                        bg-teal-100/60 hover:bg-teal-600 transition"
                            >
                                <svg
                                className="w-4 text-teal-700 transition group-hover:text-white"
                                viewBox="0 0 512 512"
                                >
                                <path
                                    fill="currentColor"
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48z"
                                />
                                </svg>
                            </Link>

                            {/* LinkedIn */}
                            <Link
                                href="#"
                                className="group w-9 h-9 flex items-center justify-center rounded-full 
                                        bg-teal-100/60 hover:bg-teal-600 transition"
                            >
                                <svg
                                className="w-4 text-teal-700 transition group-hover:text-white"
                                viewBox="0 0 448 512"
                                >
                                <path
                                    fill="currentColor"
                                    d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                />
                                </svg>
                            </Link>

                            {/* Instagram */}
                            <Link
                                href="#"
                                className="group w-9 h-9 flex items-center justify-center rounded-full 
                                        bg-teal-100/60 hover:bg-teal-600 transition"
                            >
                                <svg className="w-4 text-teal-700 transition group-hover:text-white" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                            </Link>
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-black font-semibold text-lg mb-4 pro1">
                        Links
                        </h3>
                        <ul className="space-y-3 text-sm">
                        <li>
                            <Link href="/" className="hover:text-teal-400 transition">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-teal-400 transition">About Us</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-teal-400 transition">Practice Areas</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-teal-400 transition">Contact Us</Link>
                        </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-black font-semibold text-lg mb-4 pro1">
                        Get In Touch
                        </h3>
                        <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3">
                            <MailIcon className="fa-solid fa-envelope mt-1 w-5 h-5 text-neutral-700" />
                            <Link href="mailto:taiwoade-lawal@astutelawoffice.com" className="hover:text-teal-400 transition">
                            taiwoade-lawal@astutelawoffice.com
                            </Link>
                        </li>

                        <li className="flex items-start gap-3">
                            <MapPin className="fa-solid fa-map-marker-alt mt-1 w-5 h-5 text-neutral-700" />
                            <span>
                             301-231 Oak Park Blvd, <br />
                             Oakville, ON L6H 7S8 <br />
                            </span>
                        </li>

                        <li className="flex items-center gap-3">
                            <Phone className="fa-solid fa-phone mt-1 w-5 h-5 text-neutral-700" />
                            <Link href="tel:9025806770" className="hover:text-teal-400 transition">
                            902 580 6770
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="border-t border-gray-200 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Astute Law Office Lawyer. All rights reserved.</p>
                    <Link href="#" className="hover:text-teal-400 transition mt-2 md:mt-0">
                        Privacy Policy
                    </Link>
                    </div>
                </div>
            </footer>

        </div>
    )
}