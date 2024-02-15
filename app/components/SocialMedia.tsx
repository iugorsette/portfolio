'use client';
import { SetStateAction, useState } from "react";
import { Icon } from "../phosphor/Icon";

export function SocialMedias() {
  const [hovered, setHovered] = useState(null);

  const handleHover = (index: number | SetStateAction<null>) => {
    setHovered(index as SetStateAction<null>);
  };

  const handleLeave = () => {
    setHovered(null);
  };

  const socialIcons = [
    {
      name: 'github',
      link: 'https://github.com/iugorsette',
      color: 'from-local-purple-900 via-local-purple-700',
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/iugorsette/',
      color: 'from-blue-900 via-blue-500',
    },
    {
      name: 'whatsapp',
      link: 'https://wa.me/31988071497',
      color: 'from-green-900 via-green-700',
    },
    {
      name: 'instagram',
      link: 'https://www.instagram.com/iugorsette/',
      color: 'from-rose-900 via-rose-700',
    },
  ];

  return (
    <div className="z-10 fixed bottom-0 pb-2  left-0 flex h-24 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none gap-2">
      {socialIcons.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          className="relative inline-block  group"
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
        >
          <div className={`relative z-10 transition-transform duration-300 ${hovered === index ? 'translate-y-[-5px]' : ''}`}>
            <Icon name={social.name} />
          </div>
          <div className={`absolute inset-0 bg-local-purple-900 bg-opacity-0 group-hover:bg-opacity-100 transition-all duration-300 blur-2xl ${hovered === index ? 'filter brightness-110' : ''}`}></div>
          <div className={`group-hover:absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t ${social.color} to-transparent rounded`}></div>
        </a>
      ))}
    </div>
  );
}
