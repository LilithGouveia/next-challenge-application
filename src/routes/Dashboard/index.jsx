import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import "../../style/dashboard.scss";

function ChartComponent() {
  const [dataC, setDataC] = useState([]);
  const [dataV, setDataV] = useState([]);
  const [dataT, setDataT] = useState([]);
  const [dataH, setDataH] = useState([]);
  const [dataL, setDataL] = useState([]);
  const [dataB, setDataB] = useState([]);

  const [dataO, setDataO] = useState([]);

  const fetchData = (url, setData) => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        if (Array.isArray(responseData.contextResponses)) {
          const attributes = responseData.contextResponses[0].contextElement.attributes;
          if (Array.isArray(attributes) && attributes.length > 0) {
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

  const convertAndSetDataO = (data) => {
    const oxygenData = data.map((item) => ({
      x: item.x,
      y: (item.y / 10000) * 6.75,
    }));
    setDataO(oxygenData);
  };

  useEffect(() => {
    // Inicialmente, carregue os dados de todos os gráficos
    fetchData('http://localhost:3000/c', setDataC);
    fetchData('http://localhost:3000/v', setDataV);
    fetchData('http://localhost:3000/t', setDataT);
    fetchData('http://localhost:3000/h', setDataH);
    fetchData('http://localhost:3000/l', setDataL);
    fetchData('http://localhost:3000/b', setDataB);
    
    fetchData('http://localhost:3000/c', setDataO);

    // Em seguida, configure um intervalo para atualizar os dados dos gráficos a cada X milissegundos (por exemplo, a cada 5 segundos)
    const interval = setInterval(() => {
      fetchData('http://localhost:3000/c', setDataC);
      fetchData('http://localhost:3000/v', setDataV);
      fetchData('http://localhost:3000/t', setDataT);
      fetchData('http://localhost:3000/h', setDataH);
      fetchData('http://localhost:3000/l', setDataL);
      fetchData('http://localhost:3000/b', setDataB);

      fetchData('http://localhost:3000/c', setDataO);
      convertAndSetDataO(newDataC); // Aplica a conversão e atualiza os dados de Oxigênio após receber novos dados de CO2
      setDataC(newDataC);
    }, 5000); // Atualize a cada 5 segundos (ajuste conforme necessário)

    // Lembre-se de limpar o intervalo quando o componente for desmontado para evitar vazamentos de memória
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    convertAndSetDataO(dataC); // Aplica a conversão e atualiza os dados de Oxigênio sempre que os dados de CO2 mudam.
  }, [dataC]);

  const chartOptions = {
    chart: {
      id: 'basic-line-chart',
      toolbar: {
        show: true, // Exibir a barra de ferramentas do gráfico
        tools: {
          zoom: true, // Habilitar a ferramenta de zoom
          pan: true, // Habilitar a ferramenta de pan
          reset: true, // Habilitar a ferramenta de reset (voltar ao estado inicial)
        },
      },
      zoom: {
        enabled: true, // Habilitar o zoom
      },
    },
    xaxis: {
      type: 'datetime',
    },
    stroke: {
      curve: 'smooth' // Adicione esta opção para suavizar as linhas do gráfico
    },
  };

  return (
    <div className="chart-container">

      <h1 className='titulo'>Quadro de Gráficos</h1>
      <button className='botaoVoltar'><Link to="/">Home</Link></button>

      <div className='toptop-row'>
        <div className="chart">
          <div className="chart-label">Oxigênio</div>
          <ReactApexChart options={chartOptions} series={[{ name: 'Oxigênio', data: dataO }]} type="line" height={350} />
        </div>
      </div>

      <div className="top-row">
        <div className="chart">
          <div className="chart-label">CO2</div>
          <ReactApexChart options={chartOptions} series={[{ name: 'CO2', data: dataC }]} type="line" height={350} />
        </div>
        <div className="chart">
          <div className="chart-label">TVOC</div>
          <ReactApexChart options={chartOptions} series={[{ name: 'TVOC', data: dataV }]} type="line" height={350} />
        </div>
      </div>

      <div className="bottom-row">
        <div className="chart">
          <div className="chart-label">Temperatura</div>
          <ReactApexChart options={chartOptions} series={[{ name: 'Temperatura', data: dataT }]} type="line" height={350} />
        </div>
        <div className="chart">
          <div className="chart-label">Umidade</div>
          <ReactApexChart options={chartOptions} series={[{ name: 'Umidade', data: dataH }]} type="line" height={350} />
        </div>
      </div>

      <div className="chart-bottom">
        <div className="chart-label">Luminosidade</div>
        <ReactApexChart options={chartOptions} series={[{ name: 'Luminosidade', data: dataL }]} type="line" height={350} />
      </div>
      <div className="chart-bottom">
        <div className="chart-label">Boia</div>
        <ReactApexChart options={chartOptions} series={[{ name: 'Boia', data: dataB }]} type="bar" height={350} />
      </div>
    </div>
  );
}

export default ChartComponent;