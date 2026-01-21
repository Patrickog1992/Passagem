import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-purple-500/30 last:border-0">
      <button
        className="w-full py-4 text-left flex justify-between items-center focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-gray-200 group-hover:text-purple-300 transition-colors">
          {question}
        </span>
        <span className={`transform transition-transform duration-300 text-purple-400 ${isOpen ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Como a Passagem Sagrada funciona?",
      answer: "Depois de fazer o pedido, você compartilhará detalhes sobre sua situação e sobre a pessoa que deseja reivindicar. Dentro de 24–48 horas, Madame Alaia revelará sua Passagem Sagrada única, escolhida especificamente para suas circunstâncias."
    },
    {
      question: "O que torna isso diferente dos outros?",
      answer: "Ao contrário de técnicas de manifestação ou atração, sua Passagem Sagrada não tenta mudar a mente da pessoa. Ela desperta algo mais profundo — uma obsessão que sempre esteve ali, esperando para ser ativada."
    },
    {
      question: "Quão poderosas são essas passagens?",
      answer: "Cada Passagem Sagrada foi passada por gerações de encantadoras bascas. Elas funcionam mesmo que a pessoa tenha te bloqueado, escolhido outra pessoa ou jurado nunca voltar."
    },
    {
      question: "Isso funciona se ele(a) estiver com outra pessoa?",
      answer: "Sim. Sua Passagem Sagrada funciona em um nível primal. Muitas pessoas relatam que seus amores deixaram novos relacionamentos poucos dias depois de falar sua Passagem."
    },
    {
      question: "Que informações vocês precisam de mim?",
      answer: "Quanto mais você compartilhar sobre sua situação, mais precisamente Madame Alaia poderá escolher suas palavras. No mínimo, precisamos do nome da pessoa e detalhes sobre suas circunstâncias."
    }
  ];

  return (
    <div className="w-full bg-white/5 rounded-xl p-4 md:p-8">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};