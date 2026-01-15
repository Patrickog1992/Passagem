import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    name: "Fernanda S.",
    location: "São Paulo, SP",
    text: "Gente, eu não acreditava nessas coisas, sério. Mas depois de 3 dias que eu falei a frase, ele me desbloqueou e mandou flores. Tô em choque até agora!",
    rating: 5,
    image: "https://i.imgur.com/Egm2wH7.jpg",
    likes: 423
  },
  {
    name: "Juliana M.",
    location: "Salvador, BA",
    text: "Meu ex tava namorando outra há 4 meses. Fiz a passagem sagrada numa terça, na sexta ele tava na minha porta chorando pedindo pra voltar. Madame Alaia é surreal.",
    rating: 5,
    image: "https://i.imgur.com/nCdT1tV.jpg",
    likes: 891
  },
  {
    name: "Carla R.",
    location: "Belo Horizonte, MG",
    text: "A sensação de poder é inexplicável. Ele fica igual um cachorrinho atrás. Valeu cada centavo, recomendo demais pra quem tá sofrendo.",
    rating: 5,
    image: "https://i.imgur.com/sqYjS4V.png",
    likes: 215
  },
  {
    name: "Patrícia L.",
    location: "Rio de Janeiro, RJ",
    text: "Só façam. É bizarro como funciona rápido. Ele disse que sonhou comigo a noite toda e acordou precisando me ver. Gratidão eterna!",
    rating: 5,
    image: "https://i.imgur.com/SPsVs9s.jpg",
    likes: 674
  }
];

export const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white/5 border border-purple-500/30 rounded-xl p-6 my-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
      
      <div className="flex flex-col items-center text-center transition-opacity duration-500 ease-in-out">
        {/* Profile Image */}
        <div className="mb-4 rounded-full p-1 bg-gradient-to-tr from-purple-500 to-amber-400">
          <img 
            src={testimonials[currentIndex].image} 
            alt={testimonials[currentIndex].name} 
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-900"
          />
        </div>

        <div className="flex space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-lg italic text-gray-200 mb-4 font-light">
          "{testimonials[currentIndex].text}"
        </p>
        
        <div className="mt-2 mb-4">
          <p className="font-bold text-purple-300">{testimonials[currentIndex].name}</p>
          <p className="text-xs text-gray-400">{testimonials[currentIndex].location}</p>
        </div>

        {/* Social Interaction Bar */}
        <div className="flex items-center gap-4 text-sm text-gray-400 border-t border-gray-700 pt-3 w-full justify-center">
            <div className="flex items-center gap-1 group cursor-pointer hover:text-blue-400 transition-colors">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white p-1">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                </div>
                <span>Curtir</span>
            </div>
            <div className="flex items-center gap-1 group cursor-pointer hover:text-red-400 transition-colors">
                 <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-white p-1">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </div>
                <span>Amei</span>
            </div>
            <span className="ml-2 text-xs">{testimonials[currentIndex].likes} pessoas reagiram</span>
        </div>

      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-purple-500 w-4' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};