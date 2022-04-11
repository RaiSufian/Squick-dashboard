import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';

const DemoLine = () => {


    const Demodatas = [
       
        {
          "month": "1",
          "value": 0,
          "category": "Marketing Sales"
        },
        {
          "month": "1",
          "value": 0,
          "category": "Online"
        },

        {
            "month": "2",
            "value": 26,
            "category": "Marketing Sales"
          },
          {
            "month": "2",
            "value": 73,
            "category": "Online"
          },
          {
            "month": "3",
            "value": 124,
            "category": "Marketing Sales"
          },
          {
            "month": "3",
            "value": 237,
            "category": "Online"
          },
          {
            "month": "4",
            "value": 178,
            "category": "Marketing Sales"
          },
          {
            "month": "4",
            "value": 324,
            "category": "Online"
          },
          {
            "month": "5",
            "value": null,
            "category": "Marketing Sales"
          },
          {
            "month": "5",
            "value": null,
            "category": "Online"
          },
          {
            "month": "6",
            "value": null,
            "category": "Marketing Sales"
          },
          {
            "month": "6",
            "value": null,
            "category": "Online"
          },
          {
            "month": "7",
            "value": null,
            "category": "Marketing Sales"
          },
          {
            "month": "7",
            "value": null,
            "category": "Online"
          },
          {
            "month": "8",
            "value": null,
            "category": "Marketing Sales"
          },
          {
            "month": "8",
            "value": null,
            "category": "Online"
          },
          {
            "month": "9",
            "value": null,
            "category": "Marketing Sales"
          },
          {
            "month": "9",
            "value": null,
            "category": "Online"
          },
          {
            "month": "10",
            "value": null,
            "category": "Marketing Sales"
          },
          {
            "month": "10",
            "value": null,
            "category": "Online"
          },
          {
            "month": "11",
            "value": null,
            "category": "Marketing Sales"
          },
          {
            "month": "11",
            "value": null,
            "category": "Online"
          },
          {
            "month": "12",
            "value": null,
            "category": "Marketing Sales"
          },
          {
            "month": "12",
            "value": null,
            "category": "Online"
          },
        
       
      ];
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Demodatas);
  }, []);

 
  const config = {
    data,
    xField: 'month',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time',
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
  };

  return <Line {...config} />;
};


export default DemoLine;