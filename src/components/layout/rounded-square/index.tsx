import { twMerge } from 'tailwind-merge';

interface RoundedSquareProps {
  className?: string;
}

const RoundedSquare: React.FC<RoundedSquareProps> = ({ className = '' }) => {
  return (
    <div
      className={twMerge('relative bg-foreground w-30 h-30 rounded-[40px]', className)}
    ></div>
  );
};

export default RoundedSquare;
