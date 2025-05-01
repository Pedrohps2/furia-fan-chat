import React from 'react';
import '../styles/News.css'; // Estilos da seção de notícias

const News = () => {
  return (
    <div className="news-container">
      
      <div className="news-item">
        <h4>FURIA vence Fluxo Demons e conquista torneio presencial na BGS</h4>
        <p>A FURIA.fe derrotou a Fluxo Demons por 2 a 0 na final da Monster Energy BGS Esports 2024 Female, garantindo o título e R$20 mil em premiação.</p>
        <a href="https://draft5.gg/noticia/furia-vence-fluxo-demons-e-conquista-torneio-presencial-na-bgs" target="_blank" rel="noopener noreferrer">Leia mais...</a>
      </div>

      <div className="news-item">
        <h4>FURIA volta ao Top 10 do ranking mundial</h4>
        <p>Após uma boa campanha na IEM Rio 2024, a FURIA subiu para o 7º lugar no ranking da Valve e para o 10º lugar no ranking da HLTV, consolidando-se como a melhor equipe das Américas.</p>
        <a href="https://gamearena.gg/esports/cs2/furia-volta-top-10-ranking-mundial/" target="_blank" rel="noopener noreferrer">Leia mais...</a>
      </div>

      <div className="news-item">
        <h4>FURIA é bicampeã da Brasil Game Show 2024 Women Finals</h4>
        <p>A equipe feminina da FURIA venceu a Fluxo Demons por 2 a 0 na final da BGS 2024, conquistando o título e R$28 mil em premiação.</p>
        <a href="https://gamearena.gg/esports/cs2/bgs-24-furia-fem-fluxo-demons-campea" target="_blank" rel="noopener noreferrer">Leia mais...</a>
      </div>
    </div>
  );
};

export default News;
