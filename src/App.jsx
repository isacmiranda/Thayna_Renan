import { useState, useEffect } from 'react';

const CardapioWood = () => {
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pixName = "Renan da Silva Santos";
  const pix = "499.927.578-33";

  // Simula o carregamento do conteúdo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 segundos para demonstrar o preloader

    return () => clearTimeout(timer);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pix);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar: ', err);
      // Fallback para dispositivos móveis mais antigos
      const textArea = document.createElement('textarea');
      textArea.value = pix;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Componente reutilizável para seções
  const MenuSection = ({ title, children, variant = 'light', isHighlighted = false }) => {
    const bgColor = variant === 'light' ? 'bg-white' : 'bg-[#f8fff4]';
    const titleColor = isHighlighted ? 'text-[#325018]' : 'text-[#2f3f18]';
    const fontSize = isHighlighted ? 'text-2xl' : 'text-lg';
    const fontWeight = isHighlighted ? 'font-bold' : 'font-semibold';

    return (
      <div className={`p-4 sm:p-6 rounded-2xl ${bgColor} shadow-md border border-[#e6ecd9]`}>
        <h3 className={`${fontSize} ${fontWeight} ${titleColor}`}>
          {title}
        </h3>
        <div className="mt-2 text-sm text-[#3b4a1f]">
          {children}
        </div>
      </div>
    );
  };

  // Preloader Component
  if (isLoading) {
    return (
      <div className="fixed inset-0 .bg-gradient-to-br from-[#f8fff4] to-[#eaf1de] flex items-center justify-center z-50">
        <div className="text-center">
          {/* Logo animada */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto mb-4 relative">
              <img
                src="../public/icone-alianca2.png"
                alt="Aliança - Thayna & Renan"
                className="w-full h-full object-contain animate-pulse"
              />
              {/* Efeito de brilho ao redor */}
              <div className="absolute inset-0 rounded-full bg-[#6b8e23] opacity-20 animate-ping"></div>
            </div>
            
            {/* Anel de loading */}
            <div className="w-32 h-32 mx-auto border-4 border-transparent border-t-[#6b8e23] border-r-[#6b8e23] rounded-full animate-spin absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Texto animado */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#325018] animate-bounce">
              Thayna & Renan
            </h2>
            <p className="text-[#3b4a1f] animate-pulse">
              Carregando nosso cardápio especial...
            </p>
            
            {/* Loading dots */}
            <div className="flex justify-center space-x-1 mt-4">
              <div className="w-2 h-2 bg-[#6b8e23] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#6b8e23] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-[#6b8e23] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen .bg-gradient-to-br from-[#f8fff4] to-[#eaf1de] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
        
        {/* FOTO DO CASAL - CORRIGIDA PARA 1066x1600 */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            src="/casal.jpg"
            alt="Thayna & Renan - O Casal"
            className="w-full h-auto max-h-96 sm:max-h-[500px] object-contain"
            onError={(e) => {
              // Fallback caso a imagem não carregue
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='600' viewBox='0 0 400 600'%3E%3Crect width='400' height='600' fill='%23eaf1de'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%23325018'%3EThayna %26 Renan%3C/text%3E%3C/svg%3E";
            }}
          />
          <div className="absolute inset-0 .bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-1">Thayna & Renan</h2>
            <p className="text-sm sm:text-base opacity-90">Celebrando nosso amor</p>
          </div>
        </div>

        {/* HEADER DO CARDÁPIO */}
        <div className="p-6 rounded-2xl .bg-gradient-to-r from-[#eaf1de] to-white shadow-lg border border-[#e3ebd6] text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#325018]">CARDÁPIO - Casamento T & R</h1>
        </div>

        {/* ENTRADAS */}
        <MenuSection title="ENTRADAS" variant="light">
          <ul className="list-disc list-inside space-y-1">
            <li>ANTEPASTOS</li>
            <li>Azeitona Preta e Tomate Italiano</li>
            <li>Torradas</li>
          </ul>
        </MenuSection>

        {/* COQUETEL FRIO */}
        <MenuSection title="COQUETEL FRIO" variant="dark">
          <ul className="list-disc list-inside space-y-1">
            <li>Caponata de berinjela em cestinha crocante</li>
            <li>Potato cheese (batata bolinha com creme de gorgonzola e molho pesto)</li>
            <li>Tabule no copo</li>
            <li>Rall de Calabresa</li>
          </ul>
        </MenuSection>

        {/* CONSOMÊ */}
        <MenuSection title="CONSOMÊ" variant="light">
          <ul className="list-disc list-inside space-y-1">
            <li>Milho verde com bacon</li>
          </ul>
        </MenuSection>

        {/* FINGER FOOD */}
        <MenuSection title="FINGER FOOD" variant="dark">
          <ul className="list-disc list-inside space-y-1">
            <li>Escondidinho de frango com creme de batata</li>
          </ul>
        </MenuSection>

        {/* COQUETEL QUENTE */}
        <MenuSection title="COQUETEL QUENTE" variant="light">
          <ul className="list-disc list-inside space-y-1">
            <li>Coxinha</li>
            <li>Dadinho de tapioca com molho de mostarda e mel</li>
            <li>Pérola de queijo</li>
            <li>Kibe</li>
            <li>Espetinho de frango com bacon</li>
          </ul>
        </MenuSection>

        {/* SALADA */}
        <MenuSection title="SALADA" variant="dark">
          <p>
            Mix de folhas verdes: cenoura, tomate cereja, pepino e mussarela ralada com molho especial
          </p>
        </MenuSection>

        {/* PRATO PRINCIPAL */}
        <MenuSection title="PRATO PRINCIPAL" variant="light" isHighlighted={true}>
          <ul className="list-disc list-inside space-y-1">
            <li>Arroz branco</li>
            <li>Lagarto ao molho madeira</li>
          </ul>
        </MenuSection>

        {/* SOBREMESA */}
        <MenuSection title="SOBREMESA" variant="dark">
          <p>Delícia de abacaxi</p>
        </MenuSection>

        {/* BOLO DE CORTE */}
        <MenuSection title="BOLO DE CORTE" variant="light" isHighlighted={true}>
          <p>Trufado preto e branco com morango</p>
        </MenuSection>

        {/* DOCES */}
        <MenuSection title="DOCES" variant="dark" isHighlighted={true}>
          <div className="flex flex-wrap gap-2 mt-2">
            {['Brigadeiro', 'Brigadeiro de ninho','Surpresa de uva','Beijinho'].map((doce) => (
              <span
                key={doce}
                className="px-3 py-1 rounded-full text-sm font-medium bg-[#eef6e6] border border-[#d9e6ce] whitespace-nowrap"
              >
                {doce}
              </span>
            ))}
          </div>
        </MenuSection>

        {/* BEBIDAS */}
        <MenuSection title="BEBIDAS" variant="light">
          <ul className="list-disc list-inside space-y-1">
            <li>Refrigerantes Primeira Linha (Coca-Cola, Guaraná)</li>
            <li>Sucos industrializados (laranja e uva)</li>
            <li>Água Mineral com e sem gás</li>
            <li>Champanhe para o brinde (serve até 6 pessoas)</li>
          </ul>
        </MenuSection>

        {/* MESA DE CAFÉ */}
        <MenuSection title="MESA DE CAFÉ" variant="dark">
          <p>Café, Chá, Petit four</p>
        </MenuSection>

        {/* PIX FINAL */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white shadow-lg border border-[#e6ecd9]">
          <h3 className="text-lg sm:text-xl font-bold text-[#2b3a12] text-center sm:text-left">
            PIX — Ajude na lua de mel (opcional)
          </h3>

          <p className="mt-2 text-sm text-center sm:text-left text-[#3b4a1f]">
            Se quiser presentear o casal de forma prática, pode enviar via PIX:
          </p>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-center sm:text-left flex-1">
              <div className="text-sm text-[#31421b] font-medium mb-1">Nome</div>
              <div className="text-base font-semibold text-[#123010] mb-3">{pixName}</div>
              
              <div className="text-sm text-[#31421b] font-medium mb-1">Chave PIX (CPF)</div>
              <div className="text-lg font-bold text-[#123010] break-all bg-[#f8fff4] p-2 rounded-lg border border-[#e6ecd9]">
                {pix}
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-end gap-2">
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#6b8e23] text-white font-semibold shadow hover:scale-105 transition active:scale-95 hover:bg-[#5a7c1a]"
              >
                {copied ? "✓ Copiado!" : "Copiar PIX"}
              </button>

              <a
                href="https://wa.me/5511994182908?text=Olá!%20Enviei%20um%20presente%20via%20PIX%20😊"
                target="_blank"
                rel="noreferrer"
                className="text-xs underline text-[#2f4a15] hover:text-[#6b8e23] transition text-center"
              >
                Avisar por WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(pix)}`}
              alt="QR Code PIX"
              className="rounded-xl border border-[#cfdac0] shadow-md w-48 h-48 sm:w-52 sm:h-52"
              loading="lazy"
            />
          </div>

          <p className="mt-4 text-xs text-[#516038] text-center">
            Muito obrigado por celebrar com a gente! 
          </p>
        </div>

      </div>
    </div>
  );
};

export default CardapioWood;