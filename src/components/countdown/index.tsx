import { motion } from 'motion/react';

interface CountownProps {
  className?: string;
  value: string;
}

const Countdown: React.FC<CountownProps> = ({ className, value }) => {
  const days = value.split(':')[0];
  const hours = value.split(':')[1];
  const minutes = value.split(':')[2];
  const seconds = value.split(':')[3];

  const components = [
    { label: 'Días', value: days },
    { label: 'Horas', value: hours },
    { label: 'Minutos', value: minutes },
    { label: 'Segundos', value: seconds },
  ];

  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="font-bold text-white flex gap-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {components.map((component, index) => (
          <span key={index} className="flex flex-col items-center justify-center">
            <span className="font-archivo-black-400 text-2xl">
              {component.value}
            </span>
            <span className="font-montserrat text-sm text-white md:text-lg">{component.label}</span>
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Countdown;
