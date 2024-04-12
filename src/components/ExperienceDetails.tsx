import { ExperienceProps } from "@/config/types";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const ExperienceDetails: React.FC<ExperienceProps> = ({ title, company, period, duration, details }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl">
        {title}
        <span className="dark:text-white text-black tracking-wide font-semibold">@{company}</span>
      </h3>
      <p className="text-sm mt-1 font-medium dark:text-[#939393] text-gray-700">
        {period}
      </p>
      {duration && (
        <span className="dark:text-white text-black  text-sm mt-1 tracking-wide">
          Duration: {duration}
        </span>
      )}
      <ul className="mt-6 flex flex-col gap-3">
        {details.map((detail, index) => (
          <li key={index} className="text-base flex gap-2 dark:text-[#939393] text-gray-700">
            <span className="dark:text-white text-black mt-1">
              <TiArrowForward />
            </span>
            {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ExperienceDetails;