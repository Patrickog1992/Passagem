import React, { useState, useEffect } from 'react';

const NOTIFICATIONS = [
  { name: "Mariana S.", state: "SP", time: "agora" },
  { name: "Ana P.", state: "PR", time: "2 min" },
  { name: "Juliana M.", state: "RJ", time: "agora" },
  { name: "Carla B.", state: "MG", time: "5 min" },
  { name: "Fernanda L.", state: "BA", time: "1 min" },
  { name: "Patrícia K.", state: "RS", time: "3 min" },
  { name: "Larissa B.", state: "PE", time: "agora" },
  { name: "Camila D.", state: "DF", time: "4 min" },
  { name: "Bruna R.", state: "SP", time: "10 min" }
];

export const SocialProofPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentData, setCurrentData] = useState(NOTIFICATIONS[0]);

  useEffect(() => {
    // Função para ciclar as notificações
    const showNotification = () => {
      // Escolhe um nome aleatório
      const randomIdx = Math.floor(Math.random() * NOTIFICATIONS.length);
      setCurrentData(NOTIFICATIONS[randomIdx]);
      setIsVisible(true);

      // Esconde após 4 segundos
      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Primeira aparição após 3 segundos
    const initialTimeout = setTimeout(() => {
      showNotification();
      
      // Loop a cada 15 segundos
      const interval = setInterval(showNotification, 15000);
      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(initialTimeout);
  }, []);

  return (
    <div 
      className={`fixed top-2 right-2 z-[60] max-w-[180px] w-full transform transition-all duration-700 ease-in-out font-poppins pointer-events-none ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
      }`}
    >
      <div className="bg-[#1a1625]/95 backdrop-blur-sm border-l-2 border-green-500 rounded shadow-lg p-1.5 flex items-center gap-1.5 relative overflow-hidden">
        {/* Ícone Ultra Compacto */}
        <div className="flex-shrink-0 bg-green-500/20 rounded-full p-0.5">
          <svg className="w-2.5 h-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Texto Ultra Compacto */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-baseline mb-0.5">
             {/* Nome e Estado */}
            <span className="text-[9px] text-gray-200 font-semibold leading-none truncate pr-1">
              {currentData.name} <span className="text-gray-500 text-[8px] font-normal">({currentData.state})</span>
            </span>
            {/* Tempo */}
            <span className="text-[7px] text-gray-600 leading-none whitespace-nowrap">{currentData.time}</span>
          </div>
          {/* Frase de Ação */}
          <p className="text-[8px] text-green-400 font-bold uppercase tracking-wider leading-none">
            RECEBEU A PASSAGEM
          </p>
        </div>

        {/* Efeito de brilho sutil */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
      </div>
    </div>
  );
};