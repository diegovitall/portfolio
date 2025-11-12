import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectLinkButton } from './ProjectLinkButton';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

interface ProjectScreenProps {
  project: Project;
}

export function ProjectScreen({ project }: ProjectScreenProps) {
  return (
    <div className="relative">
      <div className="rounded-3xl p-3 shadow-2xl overflow-hidden">
        <div className="bg-gray-800 rounded-t-2xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-gray-400 text-xs">{project.title}</div>
          <div className="w-16"></div>
        </div>

        <div className="bg-white rounded-b-2xl overflow-hidden">
          <div className="relative h-96 sm:h-96 sm:aspect-auto overflow-hidden">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <div>
                  <ProjectLinkButton
                    link={project.link}
                    text={project.id === 1 ? 'Visitar site' : 'Em construção'}
                    isClickable={project.id === 1}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -inset-4 bg-gray-900/50 rounded-3xl blur-2xl -z-10"></div>
    </div>
  );
}
