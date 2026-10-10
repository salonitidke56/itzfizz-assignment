'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // १. पेज लोड झाल्यावर होणारे प्रिमियम ॲनिमेशन
    gsap.from(".headline", { 
      opacity: 0, 
      y: 40, 
      duration: 1.2, 
      ease: "power4.out" 
    });
    
    gsap.from(".stat-box", { 
      opacity: 0, 
      scale: 0.8, 
      duration: 0.8, 
      stagger: 0.3, 
      delay: 0.6,
      ease: "back.out(1.7)"
    });

    // २. स्क्रोलवर आधारित मुख्य कार ॲनिमेशन
    gsap.to(carRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",     
        end: "bottom top",    
        scrub: 1,             
      },
      rotate: 360,            
      scale: 1.5,             
      y: 150                  
    });
  }, []);

  return (
    <main ref={containerRef} className="relative min-h-[200vh] bg-gradient-to-b from-slate-950 to-slate-900 text-white font-sans overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col justify-center items-center px-4 relative z-10">
        
        <h1 className="headline text-4xl md:text-7xl font-extrabold tracking-[0.25em] text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4 select-none">
          WELCOMEITZFIZZ
        </h1>
        
        <p className="text-gray-400 tracking-widest text-xs md:text-sm uppercase mb-10 headline">
          Scroll Driven Interaction Experience
        </p>
        
        {/* IMPACT METRICS */}
        <div className="flex gap-6 md:gap-10 mb-12">
          <div className="stat-box bg-slate-900/60 border border-slate-800 backdrop-blur-md px-6 py-4 rounded-xl text-center shadow-xl min-w-[120px]">
            <p className="text-3xl font-black text-orange-500">95%</p>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Success</p>
          </div>
          <div className="stat-box bg-slate-900/60 border border-slate-800 backdrop-blur-md px-6 py-4 rounded-xl text-center shadow-xl min-w-[120px]">
            <p className="text-3xl font-black text-orange-500">10M+</p>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Reached</p>
          </div>
        </div>

        {/* MOVING CAR */}
        <div className="w-72 h-72 md:w-[450px] md:h-[450px] relative flex items-center justify-center">
          <div ref={carRef} className="w-full h-full relative">
            <Image 
              src="/car.png" 
              alt="Moving Car" 
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* SECOND SECTION FOR SCROLL SPACE */}
      <section className="h-screen bg-slate-900 flex flex-col items-center justify-center relative border-t border-slate-800/50">
        <div className="w-12 h-12 rounded-full border-2 border-dashed border-orange-500/30 animate-spin absolute mb-20"></div>
        <h2 className="text-xl md:text-2xl font-medium text-slate-500 tracking-wide text-center px-4">
          ॲनिमेशन पाहण्यासाठी हळूहळू वर-खाली स्क्रोल करा
        </h2>
        <p className="text-slate-600 text-sm mt-2">Itzfizz Frontend Web Internship Assignment</p>
      </section>

    </main>
  );
}
