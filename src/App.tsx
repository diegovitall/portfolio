import { Menu } from './components/Menu';
import { Terminal } from './components/Terminal';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ProjectsSection } from './components/ProjectsSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { Footer } from './components/Footer';
import { FadeInOnScroll } from './components/FadeInOnScroll';
import person1Image from './assets/person-1.png';

export default function App() {
  const terminalLines = [
    { prompt: '$ ', text: 'cat projeto.md', delay: 800 },
    { prompt: '', text: '...', delay: 100 },
    { prompt: '> ', text: 'Vamos construir seu próximo negócio!', delay: 1000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Menu />
      <div id="home" className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl text-white">
                Diego Rodrigo <br /> Barbosa Vital
                <span className="block text-green-400 mt-2 text-xl">Desenvolvedor Freelancer</span>
              </h1>
            </div>

            <Terminal lines={terminalLines} loop={true} />

            <div className="flex gap-4">
              <a href="#contact" className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-6 py-3 rounded-lg transition-colors">
                Entrar em Contato
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden max-w-lg mx-auto bg-transparent">
              <ImageWithFallback
                src={person1Image}
                alt="Desenvolvedor"
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>

      <FadeInOnScroll>
        <ProjectsSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <TechnologiesSection />
      </FadeInOnScroll>

      <FadeInOnScroll>
        <Footer />
      </FadeInOnScroll>
    </div>
  );
}

