import React, { useState, useEffect } from 'react';
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.jpg";
import { Link } from 'react-scroll';

import AboutSection from './About';
import Lucide from './LucideReact';
import ProjectExpo from './LucideReact';
import FadeInTestimonial from './Comments';
import Footer from './Footer';
import Home from './Main'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', to: 'home', component: <Home /> },
    { name: 'About', to: 'about', component: <AboutSection /> },
    { name: 'Our Services', to: 'services', component: <Lucide /> },
    { name: 'Our Projects', to: 'projects', component: <ProjectExpo/> },
    {name : 'Reviews', to: 'reviews', component: <FadeInTestimonial/>},
    { name: 'Contact Us', to: 'contact', component: <Footer /> },
  ]

  return (
    <header className={`bg-yellow-500 shadow-lg ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img 
              src={logo}
              alt="Sai Smart Build" 
              className="h-16 w-auto sm:h-16"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-black">Sai Smart Build</span>
              <span className="text-sm text-green-600">CONSTRUCTION & INTERIOR</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-black hover:text-white transition-colors cursor-pointer font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Free Call Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Button 
              variant="outline" 
              className="bg-black text-yellow-500 hover:bg-yellow-600 hover:text-black border-black"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span>Free call</span>
            </Button>
            <span className="text-sm font-medium text-black">0 800 123 45 678</span>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-black text-black hover:bg-black hover:text-yellow-500">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-yellow-500">
              <nav className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="text-lg font-medium text-black hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start bg-black text-yellow-500 hover:bg-yellow-600 hover:text-black border-black"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    <span>0 800 123 45 678</span>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
