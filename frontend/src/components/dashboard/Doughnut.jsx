import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register necessary components in ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutGraph = () =>{

    const data = {
        labels: ['Finished on Time', 'Past the deadline', 'Not yet started'],
        datasets: [
            {
                label: 'Tasks',
                data: [12, 19, 3],
                backgroundColor: [
                'rgba(144, 238, 144, 0.2)',
                'rgba(255, 182, 193, 0.2)',
                'rgba(211, 211, 211, 0.2)'
                ],
                borderColor: [
                'rgba(144, 238, 144, 1)',
                'rgba(255, 182, 193, 1)',
                'rgba(211, 211, 211, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };
        const options = {
            maintainAspectRatio: false, // Allows custom size
        };

    return(
        <Doughnut
        data={data}
        options={options}
        width={250}  // Set width in pixels
        height={250} // Set height in pixels
        />
    );
}
export default DoughnutGraph;