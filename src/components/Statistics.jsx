import React from 'react';
import '../styles/Statistics.css'; // Estilos da seção de Estatísticas

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="stats-item">
        <h4>Yuurih</h4>
        <p>Kills: 1200 | Mortes: 900 | K/D Ratio: 1.33</p>
      </div>

      <div className="stats-item">
        <h4>KSCERATO</h4>
        <p>Kills: 1100 | Mortes: 950 | K/D Ratio: 1.16</p>
      </div>

      <div className="stats-item">
        <h4>Yekindar</h4>
        <p>Kills: 1050 | Mortes: 980 | K/D Ratio: 1.07</p>
      </div>

      <div className="stats-item">
        <h4>FalleN</h4>
        <p>Kills: 900 | Mortes: 870 | K/D Ratio: 1.03</p>
      </div>

      <div className="stats-item">
        <h4>molodoy</h4>
        <p>Kills: 850 | Mortes: 800 | K/D Ratio: 1.06</p>
      </div>
    </div>
  );
};

export default Statistics;
