import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "../../style/dashboard.scss";

const handleLogout = () => {
  sessionStorage.removeItem("token-user");
  sessionStorage.removeItem("data-user");
  window.location.href = "/login";
};

function ChartComponent() {
  const [dataC, setDataC] = useState([]);
  const [dataO, setDataO] = useState([]);
  const [dataV, setDataV] = useState([]);
  const [dataT, setDataT] = useState([]);
  const [dataH, setDataH] = useState([]);
  const [dataL, setDataL] = useState([]);
  const [dataB, setDataB] = useState([]);

  const fetchData = (url, setData, isCO2 = false) => {
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        if (Array.isArray(responseData.contextResponses)) {
          const attributes =
            responseData.contextResponses[0].contextElement.attributes;
          if (Array.isArray(attributes) && attributes.length > 0) {
            const chartData = attributes[0].values.map((item) => ({
              x: new Date(item.recvTime).getTime(),
              y: item.attrValue,
            }));
            setData(chartData);

            if (isCO2) {
              // Aplicar conversão de CO2 para O2 somente se isCO2 for true
              const oxygenData = chartData.map((item) => ({
                x: item.x,
                y: (item.y / 10000) * 6.75,
              }));
              setDataO(oxygenData);
            }
          } else {
            console.error(
              "A matriz de atributos está vazia ou não é uma matriz."
            );
          }
        } else {
          console.error(
            "A resposta da API não contém a matriz contextResponses."
          );
        }
      })
      .catch((error) => {
        console.error("Erro ao acessar a API: " + error);
      });
  };

  useEffect(() => {
    fetchData("http://localhost:3000/c", setDataC, true); // Defina isCO2 como true para CO2
    fetchData("http://localhost:3000/v", setDataV);
    fetchData("http://localhost:3000/t", setDataT);
    fetchData("http://localhost:3000/h", setDataH);
    fetchData("http://localhost:3000/l", setDataL);
    fetchData("http://localhost:3000/b", setDataB);

    const interval = setInterval(() => {
      fetchData("http://localhost:3000/c", setDataC, true); // Defina isCO2 como true para CO2
      fetchData("http://localhost:3000/v", setDataV);
      fetchData("http://localhost:3000/t", setDataT);
      fetchData("http://localhost:3000/h", setDataH);
      fetchData("http://localhost:3000/l", setDataL);
      fetchData("http://localhost:3000/b", setDataB);
    }, 6000);

    // Lembre-se de limpar o intervalo quando o componente for desmontado para evitar vazamentos de memória
    return () => clearInterval(interval);
  }, []);

  const chartOptions = {
    chart: {
      id: "basic-line-chart",
      toolbar: {
        show: true,
        tools: {
          zoom: true,
          pan: true,
          reset: true,
        },
      },
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      forceNiceScale: false,
      labels: {
        formatter: (value) => value.toFixed(2),
      },
    },
    stroke: {
      curve: "smooth",
    },
  };

  return (
    <div className="chart-container">
      <h1 className="titulo">Quadro de Gráficos</h1>
      <button onClick={handleLogout} className="botaoVoltar">
        LogOut{/* <Link to="/">LogOut</Link> */}
      </button>

      <div className="toptop-row">
        <div className="chart">
          <div className="chart-label">Oxigênio</div>
          <ReactApexChart
            options={chartOptions}
            series={[{ name: "Oxigênio", data: dataO }]}
            type="line"
            height={350}
          />
        </div>
      </div>

      <div className="top-row">
        <div className="chart">
          <div className="chart-label">CO2</div>
          <ReactApexChart
            options={chartOptions}
            series={[{ name: "CO2", data: dataC }]}
            type="line"
            height={350}
          />
        </div>
        <div className="chart">
          <div className="chart-label">TVOC</div>
          <ReactApexChart
            options={chartOptions}
            series={[{ name: "TVOC", data: dataV }]}
            type="line"
            height={350}
          />
        </div>
      </div>

      <div className="bottom-row">
        <div className="chart">
          <div className="chart-label">Temperatura</div>
          <ReactApexChart
            options={chartOptions}
            series={[{ name: "Temperatura", data: dataT }]}
            type="line"
            height={350}
          />
        </div>
        <div className="chart">
          <div className="chart-label">Umidade</div>
          <ReactApexChart
            options={chartOptions}
            series={[{ name: "Umidade", data: dataH }]}
            type="line"
            height={350}
          />
        </div>
      </div>

      <div className="chart-bottom">
        <div className="chart-label">Luminosidade</div>
        <ReactApexChart
          options={chartOptions}
          series={[{ name: "Luminosidade", data: dataL }]}
          type="line"
          height={350}
        />
      </div>
      <div className="chart-bottom">
        <div className="chart-label">Boia</div>
        <ReactApexChart
          options={chartOptions}
          series={[{ name: "Boia", data: dataB }]}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
}

export default ChartComponent;
