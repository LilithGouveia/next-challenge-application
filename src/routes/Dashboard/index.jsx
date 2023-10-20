// import '../../style/dashboard.scss';

// export default function Dashboard() {
//   return (
//     <>
//       <div className='container'>
//         <h1>oi dash</h1>
//       </div>
//     </>
//   );
// }

import {useState, useEffect} from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';
const  App =()=> {
  const [category, setCategory] = useState([])
  const [data, setData] = useState([])
  useEffect(() => {
    const age = [];
    const salary = [];

    axios.get("http://46.17.108.113:8666/STH/v1/contextEntities/type/Lamp/id/urn:ngsi-ld:Lamp:171/attributes/temperature?hLimit=10&hOffset=0").then(response =>{
        console.log("response", response)
        response.data.data.map(item => {
          console.log("item", item)
            age.push(item.employee_age);
            salary.push(item.employee_salary)
        })
        setCategory(salary)
        setData(age)
        // setObject({
        //   chart: {
        //     id: 'apexchart-example'
        //   },
        //   xaxis: {
        //     categories: salary
        //   }
        // })
        // setSeries([{
        //   name: 'series-1',
        //   data: age
        // }])
        console.log("age", age, salary)
    }).catch(e => {
        alert(e);
    })
}, [])

  return (
    <Chart options={{
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: category
      }
    }} 
    series={[{
      name: 'series-1',
      data: data
    }]} type="line" width={800} height={500} />
  )
}

export default App
