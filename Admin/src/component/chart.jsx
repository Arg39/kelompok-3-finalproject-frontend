import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ data }) => {
  const labels = data.map(item => item.month);
  const rentalCounts = data.map(item => item.count);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Jumlah Penyewaan',
        data: rentalCounts,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Statistik Penyewaan Per Bulan',
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '500px', height: '400px', margin: '0 auto' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Chart;