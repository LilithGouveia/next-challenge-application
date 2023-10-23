import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

function ChartComponent({ dataUrl }) {
  const [data, setData] = useState([]);

  const fetchData = () => {
    // Fazer a solicitação à API com a URL especificada
    fetch(dataUrl)
      .then((response) => response.json())
      .then((responseData) => {
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
  }, [dataUrl]);

  const options = {
    chart: {
      id: 'chart',
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
