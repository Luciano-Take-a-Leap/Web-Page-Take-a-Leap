import { Project } from '@/types';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';
import React from 'react';
import Image from 'next/image';
interface HighlightedProjectProps {
  project: Project;
}

const HighlightedProject: React.FC<HighlightedProjectProps> = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative rounded-xl p-2 shadow-lg dark:shadow-zinc-800/50 flex flex-col justify-between h-full overflow-hidden text-ellipsis"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full min-h-80 h-full md:min-h-[70] rounded-lg flex items-center justify-center">
        <Image
          width={1200}
          height={630}
          src={project.images[0].url}
          alt={project.title}
          className="rounded-lg self-center"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between gap-2 px-2 text-sm text-zinc-500">
          {`${project.start_date} – ${project.end_date}`}
        </div>

        <motion.div
          animate={{ x: isHovered ? 20 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex gap-2 items-center mr-8 "
        >
          <div className="flex flex-col px-2 lg:py-4 w-full gap-2 mt-2">
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="text-muted-foreground lg:mt-2">
              {project.description.substring(0, 100)}...
            </p>
          </div>
          <ArrowRightIcon size={24} />
        </motion.div>
      </div>
    </Link>
  );
};
export default HighlightedProject;
