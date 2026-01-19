import React, { useState, useEffect } from 'react';

interface CommitmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommitmentModal: React.FC<CommitmentModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [step, setStep] = useState<'form' | 'processing'>('form');
  
  // Form States
  const [yourName, setYourName] = useState('');
  const [hisName, setHisName] = useState('');
  
  // Ritual States
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Checkboxes
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (timeLeft === 0) setTimeLeft(120);
    
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const handleContinue = () => {
    // Redireciona direto para o checkout sem loading
    window.location.href = "https://go.perfectpay.com.br/PPU38CQ63ME";
  };
  
  if (!isOpen) return null;

  return (
    <div className="min-h-screen w-full bg-[#0f0c1a] flex flex-col font-poppins text-gray-200 relative">
      
      <button 
        onClick={onClose} 
        className="absolute left-4 top-4 z-50 p-2 text-gray-400 hover:text-white transition-colors"
        aria-label="Voltar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="p-4 md:p-8 pt-16 flex-1 w-full max-w-3xl mx-auto flex flex-col">
        {step === 'form' ? (
          <div className="space-y-6 pb-10">
            
            <div className="text-center mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Passo 1: Concorde com a Passagem Sagrada</h3>
              <p className="text-red-500 font-bold text-sm animate-pulse tracking-wide">
                Isso vai expirar em... {formatTime(timeLeft)}
              </p>
            </div>

            <div className="space-y-4 bg-purple-900/20 p-6 rounded-xl border border-purple-500/20 shadow-inner">
              <h4 className="text-purple-300 font-bold mb-2 uppercase tracking-wide text-sm">Termos de Compromisso</h4>
              
              <label className="flex items-start gap-4 cursor-pointer group p-2 hover:bg-purple-900/10 rounded-lg transition-colors">
                <div className="relative flex items-center mt-1">
                  <input 
                    type="checkbox" 
                    checked={check1}
                    onChange={(e) => setCheck1(e.target.checked)}
                    className="peer h-6 w-6 cursor-pointer appearance-none rounded border-2 border-purple-400 bg-gray-900 checked:bg-purple-500 checked:border-purple-500 transition-all"
                  />
                  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 text-white" viewBox="0 0 14 14" fill="none">
                    <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={`text-base md:text-lg leading-tight text-white group-hover:text-gray-200 transition-colors`}>
                  Eu entendo que a crença é necessária para que este feitiço funcione
                </span>
              </label>

              <label className="flex items-start gap-4 cursor-pointer group p-2 hover:bg-purple-900/10 rounded-lg transition-colors">
                <div className="relative flex items-center mt-1">
                  <input 
                    type="checkbox" 
                    checked={check2}
                    onChange={(e) => setCheck2(e.target.checked)}
                    className="peer h-6 w-6 cursor-pointer appearance-none rounded border-2 border-purple-400 bg-gray-900 checked:bg-purple-500 checked:border-purple-500 transition-all"
                  />
                  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 text-white" viewBox="0 0 14 14" fill="none">
                    <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={`text-base md:text-lg leading-tight text-white group-hover:text-gray-200 transition-colors`}>
                  Eu não tornarei ninguém mais ciente deste feitiço (isso causará o desencantamento)
                </span>
              </label>

              <label className="flex items-start gap-4 cursor-pointer group p-2 hover:bg-purple-900/10 rounded-lg transition-colors">
                <div className="relative flex items-center mt-1">
                  <input 
                    type="checkbox" 
                    checked={check3}
                    onChange={(e) => setCheck3(e.target.checked)}
                    className="peer h-6 w-6 cursor-pointer appearance-none rounded border-2 border-purple-400 bg-gray-900 checked:bg-purple-500 checked:border-purple-500 transition-all"
                  />
                  <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 text-white" viewBox="0 0 14 14" fill="none">
                    <path d="M3 8L6 11L11 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className={`text-base md:text-lg leading-tight text-white group-hover:text-gray-200 transition-colors`}>
                  Eu entendo que, uma vez que este feitiço seja lançado, não há como voltar atrás
                </span>
              </label>
            </div>

            <div className="space-y-6 bg-[#161223] p-6 rounded-xl border border-gray-800 shadow-lg">
              
              {/* Inputs de Nome */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-bold text-purple-300 mb-2">Seu nome</label>
                  <input 
                    type="text" 
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                    placeholder="Seu nome..."
                    className="w-full bg-gray-900 border border-purple-500/50 rounded-lg p-4 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-base font-bold text-purple-300 mb-2">O nome dele</label>
                  <input 
                    type="text" 
                    value={hisName}
                    onChange={(e) => setHisName(e.target.value)}
                    placeholder="Nome dele..."
                    className="w-full bg-gray-900 border border-purple-500/50 rounded-lg p-4 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all shadow-inner"
                  />
                </div>
              </div>

              {/* CHAVE MÍSTICA - NOVA ÁREA */}
              <div className="border-t border-gray-800 pt-6 mt-4">
                <div 
                  onClick={!isUnlocked ? handleUnlock : undefined}
                  className="bg-[#0f0c1a] border border-purple-500/30 rounded-xl p-8 relative overflow-hidden min-h-[250px] flex flex-col items-center justify-center cursor-pointer group transition-all duration-300 hover:border-purple-500/60"
                >
                  
                  {/* Fundo Místico Animado */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
                  
                  {/* Título */}
                  <h4 className="text-center font-bold uppercase tracking-widest mb-8 text-amber-500 relative z-10">
                    6. CHAVE MÍSTICA
                  </h4>

                  {!isUnlocked ? (
                    <div className="flex flex-col items-center justify-center relative z-10">
                      {/* Chave Flutuante */}
                      <div className="text-7xl md:text-8xl mb-6 animate-pulse-slow filter drop-shadow-[0_0_15px_rgba(245,158,11,0.4)] transform group-hover:scale-110 transition-transform duration-500">
                        🔑
                      </div>
                      <p className="text-gray-300 animate-pulse text-sm md:text-base font-medium tracking-wide">
                        Toque na chave para desbloquear a conexão
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center relative z-10">
                      {/* Coração Pulsante */}
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full animate-ping"></div>
                        <div className="absolute inset-0 bg-pink-500/30 blur-2xl rounded-full animate-pulse"></div>
                        <div className="text-7xl md:text-8xl relative z-10 animate-bounce text-red-500 drop-shadow-[0_0_35px_rgba(239,68,68,0.8)]">
                          ❤️‍🔥
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/10 blur-md rotate-45 scale-150 animate-pulse">✨</div>
                      </div>
                      <p className="text-red-400 font-bold tracking-widest uppercase text-lg animate-pulse drop-shadow-md">
                        Portal liberado.
                      </p>
                    </div>
                  )}

                </div>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={handleContinue}
                className="w-full py-5 rounded-xl font-bold text-xl uppercase tracking-wider transition-all shadow-lg transform active:scale-95 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-900/50 animate-pulse-slow ring-2 ring-green-400 ring-offset-2 ring-offset-[#0f0c1a]"
              >
                Confirmar Passagem
              </button>
            </div>

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-8 text-center h-full min-h-[50vh] flex-1">
             {/* Estado de loading removido conforme pedido anterior, mas mantido o fallback caso o state mude */}
          </div>
        )}
      </div>
    </div>
  );
};