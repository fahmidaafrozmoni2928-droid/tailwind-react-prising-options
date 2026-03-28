import React from "react";
import { BarChart, Line, LineChart, XAxis, YAxis } from "recharts";
const resultData = [
    {
      "id": 1,
      "name": "Student 1",
      "physics": 78,
      "chemistry": 82,
      "math": 88
    },
    {
      "id": 2,
      "name": "Student 2",
      "physics": 85,
      "chemistry": 79,
      "math": 91
    },
    {
      "id": 3,
      "name": "Student 3",
      "physics": 92,
      "chemistry": 88,
      "math": 95
    },
    {
      "id": 4,
      "name": "Student 4",
      "physics": 67,
      "chemistry": 70,
      "math": 65
    },
    {
      "id": 5,
      "name": "Student 5",
      "physics": 74,
      "chemistry": 76,
      "math": 80
    },
    {
      "id": 6,
      "name": "Student 6",
      "physics": 88,
      "chemistry": 84,
      "math": 90
    },
    {
      "id": 7,
      "name": "Student 7",
      "physics": 59,
      "chemistry": 63,
      "math": 58
    },
    {
      "id": 8,
      "name": "Student 8",
      "physics": 81,
      "chemistry": 85,
      "math": 83
    },
    {
      "id": 9,
      "name": "Student 9",
      "physics": 90,
      "chemistry": 87,
      "math": 93
    },
    {
      "id": 10,
      "name": "Student 10",
      "physics": 72,
      "chemistry": 75,
      "math": 78
    }
  ]
const ResultCharts = () => {
    return (
        <div>
           <LineChart width={1100} height={500} data={resultData}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Line dataKey="math"></Line>
            <Line dataKey={'chemistry'} stroke="red"></Line>
           </LineChart>
        </div>
    )
}
export default ResultCharts;