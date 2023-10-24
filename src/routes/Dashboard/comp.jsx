import React, { useState } from 'react';
import ChartComponent from './index';

function App() {
  const [showFirstChart, setShowFirstChart] = useState(true);

  const toggleChart = () => {
    setShowFirstChart((prevShowFirstChart) => !prevShowFirstChart);
    console.log('showFirstChart:', showFirstChart);
  };  

  return (
    <div>
      <button onClick={toggleChart}>
        {showFirstChart ? 'Mostrar Segundo Gráfico' : 'Mostrar Primeiro Gráfico'}
      </button>

      {showFirstChart ? (
        <ChartComponent dataUrl="http://localhost:3000/c" />
      ) : (
        <ChartComponent dataUrl="http://localhost:3000/t" />
      )}
    </div>
  );
}

export default App;