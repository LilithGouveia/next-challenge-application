import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "../../style/dashboard.scss";

function ChartComponent() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    // Fazer a solicitação à API
    fetch('http://localhost:3000/c')
      .then((response) => response.json())
      .then((responseData) => {
        // Verificar se responseData contém a matriz contextResponses
        if (Array.isArray(responseData.contextResponses)) {
          // Acessar a matriz de atributos
          const attributes = responseData.contextResponses[0].contextElement.attributes;

          // Verificar se attributes é uma matriz e não está vazia
          if (Array.isArray(attributes) && attributes.length > 0) {
            // Extrair os dados necessários para o gráfico
            const chartData = attributes[0].values.map((item) => ({
              x: new Date(item.recvTime).getTime(),
              y: item.attrValue,
            }));
            setData(chartData);
          } else {
            console.error('A matriz de atributos está vazia ou não é uma matriz.');
          }
        } else {
          console.error('A resposta da API não contém a matriz contextResponses.');
        }
      })
      .catch((error) => {
        console.error('Erro ao acessar a API: ' + error);
      });
  };

  useEffect(() => {
    // Inicialmente, carregue os dados do gráfico
    fetchData();

    // Em seguida, configure um intervalo para atualizar os dados do gráfico a cada X milissegundos (por exemplo, a cada 5 segundos)
    const interval = setInterval(() => {
      fetchData();
    }, 5000); // Atualize a cada 5 segundos (ajuste conforme necessário)

    // Lembre-se de limpar o intervalo quando o componente for desmontado para evitar vazamentos de memória
    return () => clearInterval(interval);
  }, []);

  const options = {
    chart: {
      id: 'basic-bar',
    },
    xaxis: {
      type: 'datetime',
    },
  };

  const series = [
    {
      name: 'Valores',
      data: data,
    },
  ];

  return (
    <div className="chart">
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
}

export default ChartComponent;
