import { useState, useRef, useEffect } from 'react';
import { ProjectScreen } from './ProjectScreen';
import portfolioProjectImage from '../assets/portfolio-project.png';
import card2Image from '../assets/card2-img.png';
import card3Image from '../assets/card3-img.png';
import card4Image from '../assets/card4-img.png';
import { useIsMobile } from './ui/use-mobile';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  link?: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Portfolio',
      description: 'Página pessoal, demonstrando minhas habilidades e os projetos realizados.',
      image: portfolioProjectImage,
      tags: ['React', 'Node.js', 'Tailwind', 'Vite'],
      category: 'Web Application',
      link: 'https://diegovital.com.br', // Placeholder link for the project
    },
    {
      id: 2,
      title: 'Vision',
      description: 'Plataforma online para Empresas e Profissionais Autônomos.',
      image: card2Image,
      tags: ['TypeScript', 'React', 'PostgreSQL', 'Next'],
      category: 'Web Application',
      link: '#',
    },
    {
      id: 3,
      title: 'Bolão Copa do Mundo FIFA',
      description: 'Bolão online para a Copa do Mundo FIFA de 2026.',
      image: card4Image,
      tags: ['TypeScript', 'React', 'PostgreSQL', 'Next'],
      category: 'Web Application',
      link: '#',
    },
    {
      id: 4, // Next available ID
      title: 'Novos Projetos em Breve',
      description: 'Estamos trabalhando em novos projetos inovadores. Fique ligado!',
      image: card3Image,
      tags: ['Em Desenvolvimento', 'Inovação', 'Tecnologia'],
      category: 'Coming Soon',
      link: '#',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [cardTranslateX, setCardTranslateX] = useState(77); // Default, will be calculated

  const isMobile = useIsMobile();

  const calculateTranslateX = () => {
    if (carouselRef.current) {
      const containerWidth = carouselRef.current.offsetWidth;
      // If mobile, card takes full width, no gap
      const cardWidth = isMobile ? containerWidth : containerWidth * 0.75;
      const gapWidth = isMobile ? 0 : 24; // Tailwind gap-6 is 1.5rem = 24px

      const calculatedTranslateX = ((cardWidth + gapWidth) / containerWidth) * 100;
      setCardTranslateX(calculatedTranslateX);
    }
  };

  useEffect(() => {
    calculateTranslateX(); // Calculate on mount
    window.addEventListener('resize', calculateTranslateX); // Recalculate on resize
    return () => window.removeEventListener('resize', calculateTranslateX);
  }, [projects.length, isMobile]); // Recalculate if projects or mobile state change

  // Auto-play logic
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 10000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [projects.length]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (intervalRef.current) clearInterval(intervalRef.current); // Pause on interaction
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentIndex);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (startX - x) / 300; // Ajuste a sensibilidade
    const newIndex = Math.max(0, Math.min(projects.length - 1, Math.round(scrollLeft + walk)));
    setCurrentIndex(newIndex);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    startAutoPlay(); // Resume on interaction end
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    startAutoPlay(); // Resume on interaction end
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
    startAutoPlay(); // Reset timer on indicator click
  };

  return (
    <section id="projects" className="py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Projetos <span className="text-green-400">Realizados</span>
          </h2>
          <p className="text-xl text-gray-400">
            Conheça alguns dos projetos que desenvolvi para meus clientes
          </p>
        </div>

        <div className="max-w-7xl ml-2 mb-8">
          <div className="bg-gray-900 rounded-lg px-4 py-3 font-mono text-sm border border-gray-800 max-w-2xl">
            <div className="text-green-400">
              <span className="text-gray-500">$</span> ls -la projects/
            </div>
            <div className="text-gray-400 mt-1">
              Found {projects.length} projects... Arraste para navegar →
            </div>
          </div>
        </div>

        <div 
          ref={carouselRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
                    <div
                      className={`flex transition-transform duration-300 ease-out ${isMobile ? 'gap-0' : 'gap-6'}`}
                      style={{
                        transform: `translateX(-${currentIndex * cardTranslateX}%)`,
                      }}
                    >            {projects.map((project, index) => (
                            <div
                              key={project.id}
                              className={`flex-shrink-0 transition-all duration-300 ${
                                isMobile
                                  ? 'w-full' // Full width for mobile
                                  : index === currentIndex
                                    ? 'w-[75%]'
                                    : 'w-[75%] opacity-60 scale-95'
                              }`}
                            >
                              <ProjectScreen project={project} />
                            </div>            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-green-500' 
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
