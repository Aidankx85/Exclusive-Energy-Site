"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  "/heroweb1.jpeg",
  "/heroweb2.jpeg",
  "/heroweb3.jpeg",
  "/heroweb4.jpeg",
  "/heroweb5.jpeg",
];

export default function WarehouseAutomationPage() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      img: "/atlas-ar29.jpeg",
      title: "Atlas – AR29",
      desc: "29.5′ lift height, 3300 lb load capacity, 2.68 MPH — for autonomous pallet storage & retrieval."
    },
    {
      img: "/atlas-ac1500.jpeg",
      title: "Atlas – AC1500",
      desc: "14.7′ lift height, 3300 lb load capacity, 2.68 MPH — for driverless truck loading/unloading."
    },
    {
      img: "/maia-1500.jpeg",
      title: "Maia 1500",
      desc: "4.7″ lifting height, 3300 lb load capacity, 2.23 MPH — for autonomous pallet movement."
    },
    {
      img: "/hercules.jpeg",
      title: "Hercules",
      desc: "4″ lift height, 1102/4409 lb load capacity, 3.4 MPH — for autonomous shelf movement."
    },
    {
      img: "/zeus-11.jpeg",
      title: "Zeus 11",
      desc: "15′ picking height, 50 lb load capacity, 2.23 MPH — for autonomous bin picking & storage."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 px-14 pt-6 pb-3 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={128} height={128} className="mt-2 cursor-pointer" />
          </Link>
          <span className="text-4xl font-bold -mt-1">Exclusive Energy & Electric</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xl font-semibold">
          {["Home", "About Us", "Services", "Portfolio", "Contact"].map((text, index) => {
            const hrefs = ["/", "/about", "/services", "/portfolio", "/contact"];
            return (
              <Link href={hrefs[index]} key={index}>
                <span className="hover:text-blue-400 relative group cursor-pointer">
                  {text}
                  <span className="absolute -top-2 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </Link>
            );
          })}
          <div className="flex items-center gap-5 ml-10">
            <a href="https://www.facebook.com/exclusiveenergyinc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={40} height={40} className="filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
            <a href="https://www.instagram.com/exclusive_energy_electric/reels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={40} height={40} className="filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
            <a href="https://www.linkedin.com/company/exclusive-energy-inc-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-10 transition-all duration-1000 ease-in-out relative pt-48 pb-40"
        style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 max-w-5xl bg-white/90 backdrop-blur-md p-10 rounded-xl text-black">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Warehouse Automation</h1>
          <p className="text-lg mb-6 text-center font-bold text-red-600">Coming Soon</p>
          <p className="text-lg mb-6">
            Our warehouse automation systems are designed to streamline your operations with the latest smart control technology, autonomous forklifts, and fully integrated logistics solutions.
            We specialize in turnkey deployments that improve efficiency, reduce labor costs, and increase safety throughout your facility.
          </p>
          <div className="w-full rounded-lg overflow-hidden shadow-lg mb-10">
            <video autoPlay muted loop playsInline className="w-full h-auto object-cover">
              <source src="/atlas-forklift.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item, index) => (
              <div key={index} className="flex flex-col h-full rounded-lg shadow-lg overflow-hidden bg-white">
                <Image src={item.img} alt={item.title} width={500} height={300} className="w-full h-64 object-cover" />
                <div className="bg-white text-black p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
