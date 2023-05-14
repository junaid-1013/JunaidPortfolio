import React from 'react';
import { motion } from 'framer-motion';
import profilePic from "../../public/images/profile/developer-pic-2.png";
import Image from 'next/image';

const ProfileImage = () => {

  const boxShadowVariants = {
    start: {
      boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.5)',
    },
    end: {
      boxShadow: `${getRandomInt(1, 10)}px ${getRandomInt(1, 10)}px ${getRandomInt(1, 10)}px ${getRandomInt(1, 10)}px rgba(0, 0, 0, 0.5)`,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className='w-96 h-auto bg-cover bg-center bg-no-repeat border-3 
      border-solid border-gray-900 rounded-full relative transition-all duration-1000
      lg:hidden md:inline-block md:w-full'
      initial='start'
      animate='end'
      variants={boxShadowVariants}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <Image src={profilePic} alt='junaid' className='rounded-full' 
      priority
    sizes="(max-width: 768px) 100vm,
               (max-width:1200px) 50vm, 50vm"/>
    </motion.div>
  );
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default ProfileImage;