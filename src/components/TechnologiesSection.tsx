import { Monitor, FileCode, Palette, Component, Layers, Database, Layout, Code, Coffee, Terminal as TerminalIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

export function TechnologiesSection() {
  const technologies = [
    { name: 'Linux', icon: TerminalIcon, color: '#FCC624' },
    { name: 'Java', icon: Coffee, color: '#ED8B00' },
    { name: 'JavaScript', icon: Code, color: '#F7DF1E' },
    { name: 'PostgreSQL', icon: Database, color: '#4169E1' },
    { name: 'Next.js', icon: Layers, color: '#FFFFFF' },
    { name: 'React', icon: Component, color: '#61DAFB' },
    { name: 'Bootstrap', icon: Layout, color: '#7952B3' },
    { name: 'CSS', icon: Palette, color: '#1572B6' },
    { name: 'HTML', icon: FileCode, color: '#E34F26' },
    { name: 'Windows', icon: Monitor, color: '#0078D4' },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [isLoadFinished, setIsLoadFinished] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      const loadingInterval = setInterval(() => {
        setLoadingPercentage((prev) => {
          if (prev >= 100) {
            clearInterval(loadingInterval);
            setIsLoadFinished(true);
            return 100;
          }
          return prev + 1;
        });
      }, 50); // 50ms per 1% = 5s total = 0.5s per node

      return () => clearInterval(loadingInterval);
    }
  }, [inView]);

  useEffect(() => {
    if (isLoadFinished) {
      // Start the active index loop after loading is finished
      const activeIndexTimer = setTimeout(() => {
        setActiveIndex(0);
        const interval = setInterval(() => {
          setActiveIndex((current) => (current + 1) % technologies.length);
        }, 2000); // Change item every 2 seconds
        return () => clearInterval(interval);
      }, 500); // A short delay before starting the highlight loop

      return () => {
        clearTimeout(activeIndexTimer);
      };
    }
  }, [isLoadFinished, technologies.length]);

  return (
    <section id="technologies" ref={ref} className="py-32 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Stack <span className="text-green-400">Tecnológico</span>
          </h2>
          <p className="text-xl text-gray-400">
            Jornada através das tecnologias que domino
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-900 rounded-lg px-4 py-3 font-mono text-sm border border-gray-800">
            <div className="text-green-400">
              <span className="text-gray-500">$</span> cat tech-journey.log
            </div>
            <div className="flex items-baseline text-gray-400 mt-1 font-mono text-sm">
              <span className="whitespace-nowrap">Loading technology stack</span>
              <div className="flex-grow overflow-hidden mx-2">
                <div
                  style={{ width: `${loadingPercentage}%` }}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {'.'.repeat(72)}
                </div>
              </div>
              <span className="whitespace-nowrap">{loadingPercentage}%</span>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className={clsx(
              "absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-400 to-green-500 transition-opacity duration-1000",
              loadingPercentage > 0 ? "opacity-100" : "opacity-0"
            )}></div>

            {/* Timeline items */}
            <div>
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                const isActive = index === activeIndex;
                const isVisible = loadingPercentage >= (index + 1) * 10;

                return (
                  <div
                    key={index}
                    className="transition-[max-height] duration-400 ease-in-out overflow-hidden"
                    style={{ maxHeight: isVisible ? '15rem' : '0' }}
                  >
                    <div className={clsx(
                      'relative flex items-center gap-6 transition-opacity duration-200 delay-100',
                      index > 0 ? 'mt-8' : '',
                      isVisible ? 'opacity-100' : 'opacity-0'
                    )}>
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className={clsx(
                          "w-16 h-16 rounded-full bg-gray-800 border-4 border-green-500 flex items-center justify-center transition-transform",
                          isActive && "scale-110"
                        )}>
                          <Icon 
                            className="w-7 h-7" 
                            style={{ color: tech.color }}
                          />
                        </div>
                      </div>

                      {/* Timeline content */}
                      <div className={clsx(
                        "flex-1 bg-gray-800 rounded-lg p-6 border border-gray-700 transition-all",
                        isActive && "border-green-500 shadow-lg shadow-green-500/20"
                      )}>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap items-center gap-4">
                            <h3 
                              className="text-2xl"
                              style={{ color: tech.color }}
                            >
                              {tech.name}
                            </h3>
                            <div className="font-mono text-sm text-gray-500">
                              <span className="text-green-400">$</span> which {tech.name.toLowerCase().replace('.', '')}
                            </div>
                          </div>
                          <div className="hidden md:block">
                            <span className="px-3 py-1 bg-gray-900 rounded-full text-sm text-green-400 font-mono border border-gray-700">
                              ✓ installed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gray-900 rounded-lg px-4 py-3 font-mono text-sm border border-gray-800">
            <div className="text-green-400">
              <span className="text-gray-500">$</span> echo "Sempre aprendendo novas tecnologias..."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
