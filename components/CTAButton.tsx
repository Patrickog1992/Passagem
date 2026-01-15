import React from 'react';

interface CTAButtonProps {
  mainText: string;
  subText?: string;
  onClick?: () => void;
  // Mantemos href como opcional, mas o App agora usa onClick
  href?: string;
  target?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ mainText, subText, onClick, href, target }) => {
  const buttonClasses = "w-full max-w-lg bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold text-xl md:text-2xl py-6 px-4 rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.4)] transform transition hover:scale-[1.02] active:scale-95 animate-pulse-slow leading-tight border-2 border-green-400 block text-center cursor-pointer focus:outline-none";

  return (
    <div className="flex flex-col items-center w-full my-8">
      {href ? (
        <a 
          href={href} 
          target={target}
          onClick={onClick}
          className={buttonClasses}
        >
          <span className="block drop-shadow-md">{mainText}</span>
        </a>
      ) : (
        <button 
          onClick={onClick}
          className={buttonClasses}
          type="button"
        >
          <span className="block drop-shadow-md">{mainText}</span>
        </button>
      )}
      
      {subText && (
        <p className="mt-3 text-sm md:text-base text-gray-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          {subText}
        </p>
      )}
    </div>
  );
};