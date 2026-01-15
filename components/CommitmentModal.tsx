import React, { useState, useEffect } from 'react';

interface CommitmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ZODIAC_SIGNS = [
  "Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem",
  "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"
];

export const CommitmentModal: React.FC<CommitmentModalProps> = ({ isOpen, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [step, setStep] = useState<'form' | 'processing'>('form');
  
  // Form States
  const [yourName, setYourName] = useState('');
  const [hisName, setHisName] = useState('');
  const [hisSign, setHisSign] = useState('');
  const [yourSign, setYourSign] = useState('');
  
  // Checkboxes
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  // Lógica de Scroll Lock: Impede o fundo de rolar
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset timer if needed
      if (timeLeft === 0) setTimeLeft(120);
    } else {
      document.body.style.overflow = 'unset';
      return; 
    }

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
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleContinue = () => {
    setStep('processing');
    setTimeout(() => {
      alert("Redirecionando para a revelação da Passagem Sagrada...");
      onClose();
      setStep('form');
    }, 3000);
  };

  const isFormValid = check1 && check2 && check3 && yourName.trim() !== '' && hisName.trim() !== '';

  if (!isOpen) return null;

  return (
    /* 
      Container Principal: 
      - fixed inset-0: Cobre toda a tela
      - overflow-y-auto: Permite rolar o conteúdo do modal se for maior que a tela
      - h-[100dvh]: Garante altura total correta em mobile
      - bg-[#0f0c1a]: Cor de fundo
    */
    <div className="fixed inset-0 z-50 bg-[#0f0c1a] overflow-y-auto h-[100dvh] w-full">
      
      {/* Wrapper interno para estrutura */}
      <div className="min-h-full flex flex-col relative">

        {/* 
          Header STICKY:
          - sticky top-0: Cola no topo quando rola
          - z-50: Fica acima do conteúdo
        */}
        <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-900 to-indigo-900 p-4 text-center border-b border-purple-500/30 shadow-xl">
          
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-purple-300 hover:text-white transition-colors rounded-full hover:bg-purple-800/30"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 className="text-xl font-bold text-white mb-1 px-8">Passo 1: Concorde com a Passagem Sagrada</h3>
          <p className="text-red-400 font-mono text-sm font-bold animate-pulse">
            Isso vai expirar em... {formatTime(timeLeft)}
          </p>
        </div>

        {/* Conteúdo do Formulário */}
        <div className="p-4 md:p-8 flex-1 w-full max-w-3xl mx-auto">
          
          {step === 'form' ? (
            <div className="space-y-6 pb-10">
              
              {/* Checkboxes */}
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
                  <span className={`text-base md:text-lg leading-tight ${check1 ? 'text-white' : 'text-gray-400'} group-hover:text-gray-200 transition-colors`}>
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
                  <span className={`text-base md:text-lg leading-tight ${check2 ? 'text-white' : 'text-gray-400'} group-hover:text-gray-200 transition-colors`}>
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
                  <span className={`text-base md:text-lg leading-tight ${check3 ? 'text-white' : 'text-gray-400'} group-hover:text-gray-200 transition-colors`}>
                    Eu entendo que, uma vez que este feitiço seja lançado, não há como voltar atrás
                  </span>
                </label>
              </div>

              {/* Inputs */}
              <div className="space-y-6 bg-[#161223] p-6 rounded-xl border border-gray-800 shadow-lg">
                <div>
                  <label className="block text-base font-bold text-purple-300 mb-2">Seu nome completo</label>
                  <input 
                    type="text" 
                    value={yourName}
                    onChange={(e) => setYourName(e.target.value)}
                    placeholder="Digite seu nome..."
                    className="w-full bg-gray-900 border border-purple-500/50 rounded-lg p-4 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all shadow-inner"
                  />
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-base font-bold text-purple-300 mb-2">Seu Signo</label>
                      <select 
                        value={yourSign}
                        onChange={(e) => setYourSign(e.target.value)}
                        className="w-full bg-gray-900 border border-purple-500/50 rounded-lg p-4 text-white text-lg focus:outline-none focus:border-purple-400 shadow-inner"
                      >
                        <option value="">Selecionar...</option>
                        {ZODIAC_SIGNS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-base font-bold text-purple-300 mb-2">Signo Dele</label>
                      <select 
                        value={hisSign}
                        onChange={(e) => setHisSign(e.target.value)}
                        className="w-full bg-gray-900 border border-purple-500/50 rounded-lg p-4 text-white text-lg focus:outline-none focus:border-purple-400 shadow-inner"
                      >
                        <option value="">Selecionar...</option>
                        {ZODIAC_SIGNS.map(s => <option key={s} value={s}>{s}</option>)}
                        <option value="unknown">Não sei (Usar Nome)</option>
                      </select>
                    </div>
                </div>
                {hisSign === 'unknown' && (
                    <p className="text-sm text-green-400 text-center italic border border-green-900/30 bg-green-900/10 p-2 rounded">
                      ✨ Madame Alaia usará a conexão energética do nome dele para encontrá-lo.
                    </p>
                )}

                <div>
                  <label className="block text-base font-bold text-purple-300 mb-2">O nome dele</label>
                  <input 
                    type="text" 
                    value={hisName}
                    onChange={(e) => setHisName(e.target.value)}
                    placeholder="Digite o nome dele..."
                    className="w-full bg-gray-900 border border-purple-500/50 rounded-lg p-4 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={handleContinue}
                  disabled={!isFormValid}
                  className={`w-full py-5 rounded-xl font-bold text-xl uppercase tracking-wider transition-all shadow-lg transform active:scale-95 ${
                    isFormValid 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white shadow-green-900/50 animate-pulse-slow ring-2 ring-green-400 ring-offset-2 ring-offset-[#0f0c1a]' 
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed border border-gray-700'
                  }`}
                >
                  Confirmar Passagem
                </button>
                {!isFormValid && (
                  <p className="text-center text-gray-500 text-sm mt-3">
                    Preencha todos os campos e aceite os termos para continuar.
                  </p>
                )}
              </div>

            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-8 text-center h-full min-h-[50vh]">
              <div className="relative">
                <div className="w-24 h-24 border-4 border-purple-500/30 rounded-full"></div>
                <div className="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                  🔮
                </div>
              </div>
              <div className="space-y-4 max-w-md">
                <h3 className="text-2xl font-bold text-white">Conectando Almas...</h3>
                <p className="text-gray-400 text-lg">Madame Alaia está analisando a compatibilidade astral e preparando a Passagem Sagrada...</p>
                <div className="w-full bg-gray-800 rounded-full h-2 mt-6 overflow-hidden">
                  <div className="bg-purple-500 h-2 rounded-full animate-[width_3s_ease-in-out_infinite]" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};