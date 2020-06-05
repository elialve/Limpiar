import React from 'react';
import ReactDOM from 'react-dom';

import { Chart, Axis, Series, Tooltip, Cursor, Pie } from "react-charts";

const lineChart = (
  <Chart
    data={[
      {
        label: "Lenguajes Bakend",
        data: [[10, 4],[20,2]]
      }
    ]}
>
    <Axis type="pie" />
    <Series type={Pie} showPoints={false} />
    <Tooltip />
  </Chart>
);


ReactDOM.render(lineChart, document.getElementById('app'));
