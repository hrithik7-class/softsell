import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-background-footer dark:bg-background-footerDark py-8  mt-5 ">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Copyright Section */}
                    <div>
                        <h3 className="text-md font-bold mb-4 text-text-light dark:text-text-dark">
                            SoftSell
                        </h3>
                        <p className="text-sm text-white dark:text-gray-300 ">
                            &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
                        </p>
                    </div>

                    {/* Key Points Section */}
                    <div>
                        <h3 className="text-md font-bold mb-4 text-text-light dark:text-text-dark">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm text-white dark:text-gray-300">
                            <li>
                                <a href="#" className="hover:underline">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Terms of Service
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Follow Us Section */}
                    <div>
                        <h3 className="text-md font-bold mb-4 text-text-light dark:text-text-dark">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
                            >
                                <FaFacebook size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white dark:text-gray-300 hover:text-primary-light dark:hover:text-primary-dark"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer


