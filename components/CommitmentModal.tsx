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
  const [ritualStatus, setRitualStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [scanProgress, setScanProgress] = useState(0);

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

  const handleStartRitual = () => {
    if (!yourName || !hisName) return;
    
    setRitualStatus('scanning');
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += 2; // Velocidade do carregamento
      setScanProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setRitualStatus('complete');
      }
    }, 50); // Ajuste para duração total de ~2.5s
  };

  const handleContinue = () => {
    setStep('processing');
    
    setTimeout(() => {
      window.location.href = "https://go.perfectpay.com.br/PPU38CQ63ME";
    }, 3000);
  };
  
  const getInitials = (name: string) => {
    if (!name) return "?";
    return name.charAt(0).toUpperCase();
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
                  <label className="block text-base font-bold text-purple-300 mb-2">Seu nome completo</label>
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

              {/* ÁREA DO RITUAL DE CONEXÃO (Substituindo Signos) */}
              <div className="border-t border-gray-800 pt-6 mt-4">
                <div className="bg-[#0f0c1a] border border-purple-500/30 rounded-xl p-6 relative overflow-hidden min-h-[250px] flex flex-col items-center justify-center">
                  
                  {/* Fundo Místico Animado */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>
                  
                  {/* Título do Ritual */}
                  <h4 className={`text-center font-bold uppercase tracking-widest mb-6 transition-colors duration-500 relative z-10 ${ritualStatus === 'complete' ? 'text-green-400' : 'text-purple-400'}`}>
                    {ritualStatus === 'idle' && "Sincronização de Almas Necessária"}
                    {ritualStatus === 'scanning' && "Buscando Rastro Energético..."}
                    {ritualStatus === 'complete' && "✨ CONEXÃO DE OBSESSÃO ENCONTRADA ✨"}
                  </h4>

                  {/* Orbes de Energia */}
                  <div className="flex items-center justify-center gap-4 md:gap-12 relative z-10 w-full">
                    
                    {/* Orbe Dela */}
                    <div className="flex flex-col items-center gap-2">
                       <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl font-bold border-2 transition-all duration-700 shadow-[0_0_20px_rgba(139,92,246,0.3)]
                         ${ritualStatus === 'complete' 
                            ? 'bg-gradient-to-br from-red-600 to-pink-600 border-red-400 text-white shadow-[0_0_30px_rgba(239,68,68,0.6)]' 
                            : 'bg-gradient-to-br from-purple-900 to-indigo-900 border-purple-500 text-purple-200'
                         }
                         ${ritualStatus === 'scanning' ? 'animate-pulse scale-110' : ''}
                       `}>
                          {getInitials(yourName)}
                       </div>
                       <span className="text-xs text-gray-400 uppercase tracking-wide">Você</span>
                    </div>

                    {/* Conector Central */}
                    <div className="flex-1 max-w-[100px] flex flex-col items-center justify-center relative h-10">
                        {ritualStatus === 'idle' && (
                           <div className="h-0.5 w-full bg-gray-800"></div>
                        )}
                        
                        {ritualStatus === 'scanning' && (
                           <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden relative">
                              <div className="absolute top-0 left-0 h-full bg-purple-500 shadow-[0_0_10px_#a855f7]" style={{ width: `${scanProgress}%` }}></div>
                           </div>
                        )}

                        {ritualStatus === 'complete' && (
                           <div className="h-1 w-full bg-gradient-to-r from-red-500 via-pink-500 to-red-500 animate-pulse shadow-[0_0_15px_rgba(236,72,153,0.8)]"></div>
                        )}
                        
                        {/* Ícone de Cadeado/Conexão */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f0c1a] p-1 rounded-full">
                           {ritualStatus === 'complete' ? (
                             <span className="text-green-500 text-xl animate-bounce">🔓</span>
                           ) : (
                             <span className="text-gray-600 text-xl">🔒</span>
                           )}
                        </div>
                    </div>

                    {/* Orbe Dele */}
                    <div className="flex flex-col items-center gap-2">
                       <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-2xl font-bold border-2 transition-all duration-700 shadow-[0_0_20px_rgba(139,92,246,0.3)]
                         ${ritualStatus === 'complete' 
                            ? 'bg-gradient-to-br from-red-600 to-pink-600 border-red-400 text-white shadow-[0_0_30px_rgba(239,68,68,0.6)]' 
                            : 'bg-gradient-to-br from-purple-900 to-indigo-900 border-purple-500 text-purple-200'
                         }
                         ${ritualStatus === 'scanning' ? 'animate-pulse scale-110 delay-150' : ''}
                       `}>
                          {getInitials(hisName)}
                       </div>
                       <span className="text-xs text-gray-400 uppercase tracking-wide">Ele</span>
                    </div>

                  </div>

                  {/* Botão de Ação do Ritual */}
                  <div className="mt-8 relative z-10">
                    {ritualStatus === 'idle' && (
                      <button
                        onClick={handleStartRitual}
                        disabled={!yourName || !hisName}
                        className={`px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all transform
                          ${(!yourName || !hisName) 
                            ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.5)] animate-pulse'
                          }
                        `}
                      >
                        {(!yourName || !hisName) ? 'Preencha os nomes acima' : 'Sincronizar Energias Agora'}
                      </button>
                    )}

                    {ritualStatus === 'scanning' && (
                       <p className="text-purple-300 font-mono text-sm animate-pulse">Analisando vibração espiritual... {scanProgress}%</p>
                    )}

                    {ritualStatus === 'complete' && (
                       <p className="text-green-400 font-bold text-sm bg-green-900/20 px-4 py-2 rounded border border-green-500/30">
                          A alma dele está aberta para receber sua Passagem.
                       </p>
                    )}
                  </div>

                </div>
              </div>
            </div>

            <div className="pt-4">
              {ritualStatus === 'complete' ? (
                <button 
                  onClick={handleContinue}
                  className="w-full py-5 rounded-xl font-bold text-xl uppercase tracking-wider transition-all shadow-lg transform active:scale-95 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-900/50 animate-pulse-slow ring-2 ring-green-400 ring-offset-2 ring-offset-[#0f0c1a]"
                >
                  Confirmar Passagem
                </button>
              ) : (
                <button 
                  disabled
                  className="w-full py-5 rounded-xl font-bold text-xl uppercase tracking-wider bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700"
                >
                  {ritualStatus === 'idle' ? 'Realize o Ritual Acima Primeiro' : 'Aguarde a Sincronização...'}
                </button>
              )}
            </div>

          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-8 text-center h-full min-h-[50vh] flex-1">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-purple-500/30 rounded-full"></div>
              <div className="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                🔮
              </div>
            </div>
            <div className="space-y-4 max-w-md">
              <h3 className="text-2xl font-bold text-white">Preparando sua Passagem...</h3>
              <p className="text-gray-400 text-lg">Não feche essa página. Madame Alaia está selando o ritual.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};