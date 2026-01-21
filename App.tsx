import React, { useState } from 'react';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { FAQ } from './components/FAQ';
import { CTAButton } from './components/CTAButton';
import { CommitmentModal } from './components/CommitmentModal';
import { SocialProofPopup } from './components/SocialProofPopup';

const App: React.FC = () => {
  // Estado para controlar qual tela está visível
  // false = Landing Page (Carta de Vendas)
  // true = Tela da Passagem Sagrada (Formulário)
  const [showPassageScreen, setShowPassageScreen] = useState(false);
  
  // Data de hoje para o aviso de escassez
  const today = new Date().toLocaleDateString('pt-BR');

  const handleOpenPassage = () => {
    // Troca para a tela do formulário e rola para o topo
    setShowPassageScreen(true);
    window.scrollTo(0, 0);
  };

  const handleClosePassage = () => {
    // Volta para a landing page e rola para o topo
    setShowPassageScreen(false);
    window.scrollTo(0, 0);
  };

  // RENDERIZAÇÃO CONDICIONAL:
  if (showPassageScreen) {
    return <CommitmentModal isOpen={true} onClose={handleClosePassage} />;
  }

  return (
    <div className="min-h-screen font-poppins text-gray-200 selection:bg-purple-500 selection:text-white pb-20 relative">
      
      {/* Pop-up de Prova Social */}
      <SocialProofPopup />

      {/* Top Bar */}
      <div className="bg-red-600 py-3 text-center text-xs md:text-sm font-bold tracking-wide text-white border-b border-red-800 shadow-lg">
        ⚠️ ATENÇÃO: As últimas vagas serão completadas no dia <span className="text-yellow-300">{today}</span> depois disso essa página irá sair do ar
      </div>

      <main className="max-w-3xl mx-auto px-5 py-8 md:py-12 space-y-8">
        
        {/* Headline Section */}
        <section className="text-center space-y-6">
          <p className="text-purple-400 font-bold uppercase tracking-widest text-sm md:text-base">
            Madame Alaia vai PRESENTEAR 3333 pessoas com poder total para trazer de volta um amor perdido — ou atrair um novo amor verdadeiro para suas vidas
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
            <span className="text-amber-400 block mb-2 text-xl md:text-2xl font-semibold">Encantadora do Amor Revela:</span>
            Esta Frase Sagrada, Quando Repetida à Meia-Noite, Faz Ele(a)
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-600 block mt-2">
              FICAR COMPLETAMENTE OBCECADO(A) Por Você
            </span>
          </h1>

          <div className="border-l-4 border-amber-500 pl-4 text-left md:text-center md:border-l-0 md:border-b-4 md:pb-4 md:border-amber-500/50">
            <p className="text-lg md:text-xl text-gray-300 italic font-light mb-4">
              Isso funciona mesmo que haja outra pessoa na história... Mesmo que ele(a) esteja distante... E mesmo que não esteja “pronto(a)” para compromisso. E também funciona se você ainda não tem ninguém específico em mente e deseja atrair um novo amor verdadeiro para sua vida.
            </p>
            
            {/* Frase de Destaque Inclusiva */}
            <div className="mt-6 flex justify-center">
              <p className="text-sm md:text-base font-bold text-amber-300 uppercase tracking-widest bg-purple-900/40 inline-block px-4 py-2 rounded-lg border border-amber-500/30 shadow-[0_0_15px_rgba(217,119,6,0.2)]">
                ESSE FEITIÇO FUNCIONA INDEPENDENTE DO SEU GÊNERO
              </p>
            </div>
          </div>
        </section>

        {/* Warning Box */}
        <div className="bg-red-900/20 border-2 border-red-600/50 rounded-lg p-6 md:p-8 my-10 shadow-lg">
          <p className="font-bold text-red-400 mb-4 text-lg">Querida Irmã, Querido Irmão,</p>
          <div className="space-y-4 text-gray-200">
            <p>O que estou prestes a compartilhar é perigoso nas mãos erradas.</p>
            <p>Tenha cuidado com quem você usa isso.</p>
            <p className="font-bold text-white bg-red-600/20 inline-block px-1">Se você não está pronto(a) para que ele(a) fique COMPLETAMENTE OBCECADO(A)…</p>
            <p className="uppercase font-bold tracking-wide">Então pare de ler agora.</p>
            <p>Porque, uma vez que você sussurrar essas palavras 4 vezes à meia-noite, ele(a) ficará ligado(a) a você até o fim.</p>
            <p>Você NÃO conseguirá se livrar dele(a).</p>
          </div>
        </div>

        {/* Story Start */}
        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>
            Isso não é um feitiço fofo de amor. Isso é conhecimento proibido — uma força tão poderosa que, uma vez usada, não há como voltar atrás.
          </p>
          <p>
            É a história de como a pessoa que me bloqueou, me ignorou e agiu como se eu nunca tivesse existido…
          </p>
          <p>
            Acabou estacionada em frente à minha casa à meia-noite, me ligando 47 vezes seguidas, implorando e jurando que faria qualquer coisa só para me ter de volta.
          </p>
          <p>Eu não implorei. Não chorei.</p>
          <p>Não mandei uma mensagem de “estou com saudade”.</p>
          <p>Nem sequer levantei um dedo.</p>
          <p className="font-semibold text-white">
            Tudo o que foi necessário foi uma Frase Sagrada, sussurrada 4 vezes baixinho à meia-noite.
          </p>
          <p>Acordei na manhã seguinte…</p>
          
          <ul className="list-disc pl-6 space-y-2 text-purple-200">
            <li>47 ligações.</li>
            <li>Dezenas de mensagens.</li>
            <li>Correio de voz atrás de correio de voz chorando, implorando, suplicando para voltar comigo.</li>
          </ul>

          <p>Era como se algo tivesse se quebrado dentro daquela pessoa. Uma FOME tão intensa que consumia.</p>
          <p>Uma OBSESSÃO que fez qualquer outra pessoa DESAPARECER.</p>
          <p>Um DESEJO inabalável repetindo na mente como um vício.</p>
          <p>E de repente — quem me tratava como NADA — estava RASTEJANDO DE VOLTA.</p>
        </section>

        <hr className="border-gray-800 my-8" />

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>Parece impossível, certo?</p>
          <p>Foi exatamente isso que eu pensei também.</p>
          <p>Mesmo estando mais do que cética…</p>
          <p className="font-bold text-white">Isso funcionou para mim.</p>
          <p>Muito mais do que eu jamais imaginei.</p>
          <p>Porque agora, estou vivendo a minha vida amorosa dos sonhos.</p>
          <p>E mesmo que eu ainda não entenda tudo completamente, aqui está o que aprendi:</p>
          <p className="text-xl font-semibold text-amber-400">Agora, você está prestes a aprender também.</p>
        </section>

        {/* Image 1 */}
        <div className="my-10 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <img src="https://i.imgur.com/bYPabon.jpeg" alt="Paisagem do Rio de Janeiro" className="w-full h-auto object-cover" />
        </div>

        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">A Noite Em Que Descobri Este Segredo Mudou Tudo</h2>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>Meu nome é Lorraine.</p>
          <p>E eu provavelmente deveria ter vergonha de compartilhar esta história. Mas depois de ver quantas pessoas estão passando pelo mesmo inferno que eu passei… não posso ficar em silêncio.</p>
          <p>Tudo começou há três meses. A noite em que fui bloqueada.</p>
          <p>Não apenas meu número. Tudo. Instagram. Facebook. E-mail.</p>
          <p>Como se eu nunca tivesse existido.</p>
          <p>Como se os últimos 8 meses não significassem nada.</p>
        </section>

        <h3 className="text-xl md:text-2xl font-bold text-purple-300 mt-10 mb-4">Meus Amigos Me Avisaram Sobre Ele Desde o Começo</h3>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>Eles disseram que ele era um conquistador. Que nunca iria se comprometer.</p>
          <p>Mas eu não ouvi.</p>
          <p>Porque quando as coisas estavam boas? Elas eram perfeitas.</p>
          <p>A forma como ele me olhava. Me segurava. Me fazia sentir como se eu fosse a única mulher do mundo.</p>
          <p>Até que, de repente… eu não era.</p>
          <p>Então a distância começou.</p>
          <p>As mensagens de “bom dia” pararam de chegar.</p>
          <p>“Estou ocupado” virou a desculpa favorita dele.</p>
          <p>E aquele olhar nos olhos dele? Aquele que fazia meu coração disparar?<br/>Sumiu.</p>
          <p>Eu tentei de tudo. Fazer jogo duro. Fazer ciúmes. Até aquela regra idiota do “sem contato” que todo mundo fala.</p>
          <p>Nada funcionou.</p>
          <p>Então veio aquela noite…</p>
          <p>A noite em que vi o story dele no Instagram.</p>
          <p>Ele. No nosso restaurante favorito.</p>
          <p className="text-red-400 font-bold text-xl">Com ela.</p>
        </section>

        {/* Image 2 */}
        <div className="my-10 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <img src="https://i.imgur.com/7USqM2D.jpeg" alt="Casal no restaurante" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">O Que Aconteceu Depois Ainda Me Choca</h2>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>Eu perdi o controle.</p>
          <p>Liguei para ele 12 vezes seguidas.</p>
          <p>Enviei parágrafo após parágrafo de mensagens.</p>
          <p>E foi quando eu vi…</p>
          <div className="bg-gray-800 p-4 rounded text-center font-mono text-red-400 border border-gray-600">
            “Este usuário bloqueou você.”
          </div>
          <p>Eu me senti mal. Fisicamente mal. Como se alguém tivesse me dado um soco no estômago.</p>
          <p>Os dias seguintes foram um borrão…</p>
          <p>Eu não conseguia comer. Não conseguia dormir. Mal conseguia funcionar no trabalho.</p>
          <p>Minhas amigas tentaram ajudar. “Ele não vale a pena.” “Você merece coisa melhor.” “Qualquer cara teria sorte de te ter, não perca seu tempo com ele.”</p>
          <p>Mas elas não entendiam. Isso não era apenas mais um término.</p>
          <p className="italic font-medium text-white">Isso era diferente.</p>
          <p>Eu SABIA que nós deveríamos ficar juntos. Ele só… ainda não via isso.</p>
        </section>

        <h3 className="text-xl md:text-2xl font-bold text-purple-300 mt-10 mb-4">Eu Estava Ficando Sem Opções</h3>
        
        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>Foi quando minha melhor amiga Sara ligou.</p>
          <p>“Venha para o Rio de Janeiro”, ela disse. “Minha família inteira vai se reunir para o aniversário de 80 anos da minha avó. Você precisa sair daí. Limpar a cabeça.”</p>
          <p>Eu tentei dizer não. Tentei inventar desculpas.</p>
          <p>Mas Sara não aceitou.</p>
          <p>“Lorraine, você está sentada no seu apartamento chorando por stories do Instagram. Você vem. Fim de discussão.”</p>
          <p>Ela estava certa. Eu precisava escapar.</p>
        </section>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">A Noite Em Que Tudo Mudou</h2>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>A celebração foi realizada perto da praia, no fundo do Cristo Redentor. O tipo de lugar onde tradições antigas ainda vivem, onde segredos ainda são guardados.</p>
          <p>Eu estava tentando me esconder em um canto, checando meu telefone pela centésima vez para ver se a pessoa que eu amava tinha me desbloqueado, quando senti alguém me observando.</p>
          <p>Ela se movia como uma sombra. Elegante. Atemporal. Sarah havia mencionado sua tia-avó, Madame Alaia, mas não tinha dito muito mais. Apenas que ela era… diferente.</p>
          <p>Agora eu entendia por quê.</p>
          <p className="text-amber-400 italic">“O nome da pessoa que ocupa o seu coração não sai da sua mente, não é?” ela disse suavemente.</p>
          <p>Minha cabeça se ergueu de repente. Eu não tinha contado a ninguém ali sobre aquilo.</p>
          <p>“A dor do amor bloqueado deixa marcas que apenas alguns conseguem ver”, ela continuou, seu sotaque carregado, mas seu inglês perfeito. “Passei minha vida estudando essas conexões.”</p>
          <p>Tentei rir e desconversar, mas ela tocou minha mão e tudo ficou imóvel.</p>
          <p>Foi quando as palavras de Sara mais cedo fizeram sentido. Sobre como sua tia-avó Madame Alaia não era apenas uma parente qualquer — ela era uma das últimas encantadoras do exterior.</p>
          <p className="font-bold text-white">Uma guardiã de segredos antigos passados por gerações.</p>
          <p>“Nessas montanhas”, ela disse, “guardamos segredos antigos. Conhecimentos transmitidos pelo sangue. Sobre encantamentos que podem perfurar a alma de uma pessoa. Fazer ela lembrar do que o coração já sabe.”</p>
          <p>“Cada pessoa tem sua própria Passagem Sagrada”, ela continuou.</p>
          <p className="bg-purple-900/40 p-2 rounded">“Palavras específicas que, quando faladas, despertam algo primitivo. Algo que ninguém consegue lutar contra.”</p>
          <p>Revirei os olhos. “Olha, eu agradeço o que você está tentando fazer, mas…”</p>
          <p>“Verifique seu telefone”, ela interrompeu.</p>
          <p>“O quê?”</p>
          <p>“Verifique. Seu. Telefone.”</p>
          <p>Com as mãos levemente tremendo, eu peguei o celular.</p>
          <p className="font-bold text-green-400">Três novas notificações. Todas da mesma pessoa. Em um aplicativo no qual eu havia sido bloqueada apenas algumas horas antes.</p>
          <p>Meu coração parou.</p>
          <p>“Isso é apenas uma amostra”, ela disse suavemente. “Uma fração do que é possível quando você conhece as palavras certas. A Passagem Sagrada dessa conexão.”</p>
        </section>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">O Que Ela Revelou Depois Mudou Tudo</h2>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>Ela explicou como cada Passagem Sagrada era diferente. Pessoal. Escolhida especificamente para cada pessoa e para cada situação.</p>
          <p>Como usar a passagem errada não faria nada. Mas a certa? Era como girar uma chave em uma fechadura que sempre esteve ali.</p>
          <p>“Você está pronta para conhecer a sua?” ela perguntou.</p>
          <p>Eu hesitei. Isso era loucura. Eu estava em uma reunião de família, conversando com alguém que eu tinha acabado de conhecer sobre algum ritual místico…</p>
          <p>Outra notificação acendeu na tela do meu telefone. A mesma pessoa novamente.</p>
          <p>“Sim”, eu sussurrei.</p>
          <p>Ela revelou a Passagem Sagrada naquela noite. Palavras que eu nunca tinha ouvido antes. Palavras que pareciam pulsar com sua própria energia.</p>
          <p>Eu as falei exatamente como ela instruiu, e então tentei esquecer tudo aquilo.</p>
          <p>Tentei me convencer de que eu não tinha acabado de participar de algum ritual antigo no canto de uma festa de família.</p>
          <p>Mas às 3:47 da manhã, meu telefone explodiu.</p>
          
          <div className="pl-4 border-l-2 border-green-500 space-y-4 my-6">
            <p>Uma mensagem. Daquela pessoa.</p>
            <p className="bg-gray-800 inline-block px-3 py-1 rounded-full text-sm">“Não consigo parar de pensar em você.”</p>
            <p>Meu coração disparou. Mas eu não respondi.</p>
            <p>Outro alerta.</p>
            <p className="bg-gray-800 inline-block px-3 py-1 rounded-full text-sm">“Por favor, responde.”</p>
            <p>Depois outro.</p>
            <p className="bg-gray-800 inline-block px-3 py-1 rounded-full text-sm">“Estou ficando louco aqui.”</p>
          </div>

          <p>Eu assistia enquanto mensagem após mensagem chegava. Cada uma mais desesperada que a anterior.</p>
        </section>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">De Manhã, Ele Estava DESESPERADO</h2>
        
        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <ul className="list-none space-y-2 font-bold text-amber-200">
            <li>47 chamadas perdidas.</li>
            <li>23 mensagens de voz.</li>
            <li>89 mensagens de texto.</li>
          </ul>
          <p>Todas dele.</p>
          <p>O mesmo homem que tinha me BLOQUEADO dias antes agora estava:</p>
          <p className="italic text-gray-400">“Estou em frente ao seu apartamento.” “Por favor, só fala comigo.” “Eu faço qualquer coisa.” “Não consigo comer. Não consigo dormir.” “Você é tudo em que eu penso.”</p>
          <p>Isso foi há três meses.</p>
          <p>Agora? Ele ainda está tão dedicado. Tão consumido.</p>
          <p>O homem que antes nem conseguia se comprometer com um jantar?</p>
          <p>Ele está planejando nosso futuro. Falando sobre para sempre.</p>
          <p>Às vezes eu pego ele me encarando, como se não acreditasse que eu sou real.</p>
          <p>Ele me manda mensagens o tempo todo, só para ter certeza de que eu estou feliz.</p>
          <p>E aquela outra mulher? História antiga.</p>
        </section>

        <h3 className="text-xl md:text-2xl font-bold text-purple-300 mt-10 mb-4">Eu Não Consegui Guardar Esse Segredo</h3>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>Eu tive que contar para minha melhor amiga Jessica o que aconteceu.</p>
          <p>“Você está louca”, ela disse. “Não tem como…”</p>
          <p>Mas depois de ver a transformação completa de Gustavo — como ele passou de me bloquear para estar absolutamente devotado — ela implorou para que eu compartilhasse a Passagem Sagrada para a situação dela com Thiago.</p>
          <p>Três dias depois de ela falar a passagem… Thiago deixou a garota com quem estava saindo. Apareceu na porta dela às 2 da manhã. Confessou que não conseguia comer, dormir ou pensar em ninguém além dela.</p>
          <p>Depois Sara, a amiga que me convidou para o exterior em primeiro lugar, pediu a dela.</p>
          <p>Em poucas horas depois de falar, o ex dela de 3 anos — aquele que tinha sumido por meses — estava ligando para a família dela, amigos dela, qualquer pessoa que pudesse ajudá-lo a encontrá-la.</p>
          <p>Foi quando Madame Alaia me contou algo que me assombra…</p>
        </section>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Por Que Estou Quebrando Meu Silêncio</h2>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
          <p>Antes de eu ir embora naquela noite, Madame Alaia me contou algo que me assombra.</p>
          <p>“Por séculos, minha família guardou essas passagens”, ela disse. “Passadas por gerações de mulheres. Mas eu sou a última. A última que consegue ver as palavras únicas de cada pessoa.”</p>
          <p>Ela tocou minha mão novamente. “Meu tempo está acabando. E quando eu partir, esse conhecimento vai comigo.”</p>
          <p>“A menos que…”</p>
          <p className="font-bold text-white">Ela explicou seu último desejo: ajudar 3.333 pessoas a encontrarem suas próprias Passagens Sagradas antes de partir. Para garantir que esse poder não seja perdido para sempre.</p>
          <p>Não a minha passagem — isso não funcionaria para você.</p>
          <p>Mas as suas próprias palavras específicas. Escolhidas para sua situação. Para a pessoa que você deseja.</p>
        </section>

        <div className="bg-red-900/30 border border-red-500 rounded p-6 my-8">
            <h3 className="text-xl font-bold text-red-400 mb-4">Mas Eu Preciso Avisar Você…</h3>
            <div className="space-y-4 text-gray-200">
                <p>Isso não é para todo mundo.</p>
                <p>Se você só quer algo casual… procure outra coisa.</p>
                <p>Se você não está pronto(a) para devoção completa… pare de ler.</p>
                <p>Porque, uma vez que você fale sua Passagem Sagrada?</p>
                <p className="font-bold">Não há como voltar atrás.</p>
                <p>Essa pessoa ficará obcecada. Ela irá persegui-lo(a) incansavelmente. Ela nunca conseguirá ir embora.</p>
                <p>Então, antes de continuar…</p>
                <p className="uppercase tracking-wide font-bold">Tenha absoluta certeza de que é isso que você quer.</p>
            </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-amber-400 mt-16 mb-8">Então Agora... É A Sua Vez</h2>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300 text-center">
            <p>Agora, você pode receber sua própria Passagem Sagrada…</p>
            <p>A que foi feita especificamente para aquela pessoa…</p>
            <p>Aquela pessoa que ainda não sabe que é sua…</p>
            <div className="space-y-2 font-medium text-white">
                <p>Não importa se essa pessoa te bloqueou…</p>
                <p>Não importa se ela está com outra pessoa…</p>
                <p>Não importa se ela jura que nunca vai voltar…</p>
            </div>
            <p>Porque cada Passagem Sagrada desperta algo primitivo na alma de uma pessoa…</p>
            <p>…O que fará a conexão que é óbvia para você…</p>
            <p>…Impossível para ELA negar…</p>
            <p>E quando essas palavras tomarem conta, essa pessoa não terá escolha a não ser voltar…</p>
            <p className="text-xl font-bold text-purple-300">Porque Uma Vez Que A Passagem Sagrada É FALADA, Nenhuma Outra Pessoa Jamais Se Comparará A Você</p>
        </section>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300 mt-12">
            <p>E quanto a quanto esse poder vai custar…</p>
            <p>Bem, não vai custar nada…</p>
            <p>Mas vai ajudar você a GANHAR controle completo sobre a pessoa que escolher.</p>
            <p>E Madame Alaia não está aqui para ganhar dinheiro.</p>
            <p>O único objetivo dela é ajudar 3.333 pessoas a reivindicarem esse poder antes que esse conhecimento se perca para sempre.</p>
        </section>

        <h3 className="text-xl md:text-2xl font-bold text-white mt-10 mb-4">Ela Originalmente Queria Dar Essas Passagens De Graça</h3>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>Mas eu tive que lembrá-la de que precisamos manter este site…</p>
            <p>Então concordamos com um valor que mal nos permite empatar.</p>
            <p>Dessa forma, até pessoas que estão passando por dificuldades…</p>
            <p>Até pessoas que foram deixadas para trás…</p>
            <p>Até pessoas que foram substituídas por outra pessoa…</p>
            <p>Podem experimentar o poder de ter aquela pessoa especial absolutamente OBCECADA a elas para sempre.</p>
        </section>

        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 border border-purple-500 rounded-xl p-8 my-10 shadow-2xl text-center">
            <p className="text-xl text-gray-200 mb-4">Então, por apenas <span className="text-green-500 font-bold text-2xl">R$ 41,41</span> hoje…</p>
            <p className="text-lg text-white font-medium">…Você pode receber sua Passagem Sagrada única.</p>
            <p className="text-lg text-white font-medium mb-8">…E ter controle permanente sobre o coração dele.</p>

            <h4 className="text-xl font-bold text-amber-400 mb-4">Tão Poucas Pessoas Alguma Vez Têm Esse Tipo De Poder</h4>
            <p className="text-gray-300 mb-2">Mas isso não está disponível para todo mundo…</p>
            <p className="text-gray-300 mb-6">Porque essas passagens são PODEROSAS & PERMANENTES…</p>
            <p className="text-gray-300 mb-6">…Então elas só estão disponíveis para pessoas que concordam com estas condições:</p>

            <ul className="text-left space-y-3 max-w-md mx-auto mb-8">
                <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✅</span>
                    <span>Eu Entendo Que Cada Passagem Deve Ser Escolhida Especificamente</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✅</span>
                    <span>Eu Nunca Compartilharei Minha Passagem Sagrada (Isso Quebrará Seu Poder)</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✅</span>
                    <span>Eu Aceito Que Uma Vez Falada, Não Há Como Voltar</span>
                </li>
            </ul>

            <p className="mb-6 font-semibold">Se você concorda com essas condições, e está pronto(a) para reivindicar esse poder…</p>
            <p className="mb-4">Clique no botão “Receber Minha Passagem” abaixo</p>

            <CTAButton mainText="Receber Minha Passagem Sagrada Agora" subText="Funciona Ainda Hoje À Noite" onClick={handleOpenPassage} />
        </div>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>A partir daí, você será levado(a) para um formulário de pedido seguro…</p>
            <p>Isso ajuda a manter nossa conexão com Madame Alaia.</p>
            <p>Depois de completar isso…</p>
            <p>Você responderá a algumas perguntas simples.</p>
            <p>Isso ajuda Madame Alaia a ver sua situação única e escolher sua passagem exata.</p>
            <p>Após isso, Madame Alaia irá realizar pessoalmente o feitiço para o seu caso.</p>
            <p>A sua Passagem Sagrada será enviada diretamente para o e-mail de cadastro.</p>
            <p>Depois de completar tudo isso…</p>
            <p>…Sua Passagem Sagrada será revelada dentro de 24–48 horas.</p>
            <p>E apenas alguns dias a partir de agora…</p>
        </section>

        <h3 className="text-2xl font-bold text-white mt-10 mb-4 text-center">Você Vai Olhar Para Trás Para Este Momento E Sorrir</h3>
        
        <section className="space-y-6 text-lg leading-relaxed text-gray-300 text-center">
            <p>Porque este foi o momento em que tudo mudou…</p>
            <p>O dia em que você ganhou verdadeiro poder…</p>
            <p>O dia em que aquela pessoa finalmente percebeu…</p>
            <p className="font-bold text-purple-300 text-xl">VOCÊ POSSUI A ALMA DA PESSOA</p>
            
            <p className="mt-8">Receba Sua Passagem Sagrada aqui:</p>
            
            <CTAButton mainText="Receber Minha Passagem Sagrada Agora" subText="Funciona Ainda Hoje À Noite" onClick={handleOpenPassage} />
        </section>

        <section className="mt-16 mb-12">
            <h3 className="text-xl font-bold text-white text-center mb-6">Dê Uma Olhada No Que Outras Pessoas Estão Dizendo Sobre O Trabalho De Madame Alaia:</h3>
            <TestimonialCarousel />
            <div className="text-center mt-8 italic text-amber-200 text-lg">
                “O poder é real. E uma vez que ele toma conta… não há como voltar.”
            </div>
            <CTAButton mainText="Receber Minha Passagem Sagrada Agora" subText="Funciona Ainda Hoje À Noite" onClick={handleOpenPassage} />
        </section>

        <section className="bg-gray-800/50 rounded-xl p-6 md:p-8 space-y-8 border border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Como Sua Passagem Sagrada Funciona</h2>
            
            <div className="space-y-6">
                <div className="flex gap-4">
                    <span className="text-3xl">🔮</span>
                    <div>
                        <h4 className="text-xl font-bold text-purple-300">Passo 1: Compartilhe Sua Situação</h4>
                        <p className="text-gray-400">Conte a Madame Alaia sobre ele e suas circunstâncias. Quanto mais detalhes você fornecer, mais precisamente ela poderá identificar sua Passagem Sagrada única.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <span className="text-3xl">🔮</span>
                    <div>
                        <h4 className="text-xl font-bold text-purple-300">Passo 2: Receba Sua Passagem Dentro De 24–48 Horas</h4>
                        <p className="text-gray-400">Você receberá sua Passagem Sagrada específica, escolhida exclusivamente para sua situação e para o homem que você quer reivindicar.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <span className="text-3xl">🔮</span>
                    <div>
                        <h4 className="text-xl font-bold text-purple-300">Passo 3: Fale Suas Palavras E Veja Ele Voltar</h4>
                        <p className="text-gray-400">Siga exatamente as instruções para falar sua Passagem e testemunhe a transformação completa dele em devoção obsessiva.</p>
                    </div>
                </div>
            </div>
        </section>

        <div className="border-4 border-dashed border-amber-500/30 bg-amber-900/10 rounded-xl p-8 my-12 text-center">
            <div className="w-20 h-20 mx-auto bg-amber-500 rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg shadow-amber-500/20">🛡️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Nossa Garantia De 60 Dias “Transformação Do Amor”</h2>
            <p className="text-lg text-gray-300 mb-6">Madame Alaia oferece algo sem precedentes: Se sua Passagem Sagrada não criar uma transformação óbvia no comportamento dele dentro de 60 dias, devolveremos cada centavo.</p>
            
            <p className="font-semibold text-white mb-4">Aqui está o que esperar:</p>
            <ul className="inline-block text-left space-y-2 text-gray-300">
                <li>🔮 Receba sua passagem única</li>
                <li>🔮 Fale as palavras antigas</li>
                <li>🔮 Veja a resistência dele desmoronar</li>
                <li>🔮 Veja ele se tornar completamente seu</li>
            </ul>
        </div>

        <section className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>Mas eu preciso avisar: Esta oferta para receber sua Passagem Sagrada por apenas <span className="text-green-500 font-bold">R$ 41,41</span> não vai durar.</p>
            <p>Madame Alaia só pode ajudar 3.333 pessoas antes que esse conhecimento se perca para sempre. E as vagas estão se esgotando rapidamente.</p>
            <p>Não perca sua chance de reivindicar esse poder enquanto ainda está disponível.</p>
            <p>Se você está cansado(a) de ser bloqueado(a), ignorado(a) ou substituído(a) ou está procurando um novo amor — agora é a hora de agir. Tome controle dessa conexão para sempre.</p>
            <p>Não apenas fazendo essa pessoa voltar — mas tornando impossível que ela vá embora novamente.</p>
            
            <CTAButton mainText="Receber Minha Passagem Sagrada Agora" subText="Funciona Ainda Hoje À Noite" onClick={handleOpenPassage} />
        </section>

        <section className="my-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Perguntas Frequentes</h2>
            <FAQ />
            <div className="mt-12">
                 <CTAButton mainText="Receber Minha Passagem Sagrada" subText="Funciona Ainda Hoje À Noite" onClick={handleOpenPassage} />
            </div>
        </section>

        <footer className="text-center text-sm text-gray-600 pt-10 border-t border-gray-800">
            <p>&copy; {new Date().getFullYear()} Madame Alaia. Todos os direitos reservados.</p>
            <p className="mt-2 text-xs">Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Uma vez que você sai do Facebook, a responsabilidade não é deles, mas do nosso site.</p>
        </footer>

      </main>
    </div>
  );
};

export default App;