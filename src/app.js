const ctx = document.getElementById('myChart').getContext('2d');
const yearLabel = document.getElementById('yearLabel');
const yearSlider = document.getElementById('yearSlider');

//人口データ
const populationData = {
  1950: [554.76, 357.56, 157.81, 83.62, 41.82, 28.00],
  1975: [927.80, 620.70, 220.16, 111.52, 52.69, 35.59],
  2000: [1273.97, 1021.08, 284.15, 127.03, 59.27, 40.71],
  2025: [1441.42, 1395.49, 350.10, 124.81, 63.40, 44.24],
  2050: [1392.30, 1592.70, 194.97, 112.19, 64.11, 42.54]
};


const chartConfig = {
  type: 'bar',
  data: {
    labels: ['China', 'India', 'USA', 'Japan', 'France', 'Spain'],
    datasets: [{
      label: `population 1950年`,
      data: populationData[1950],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 205, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(153, 102, 255, 0.5)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 1600,
        title: {
          display: true,
          text: '(million)'
        }
      }
    }
  }
};


const createChart = (data, year) => {
  chartConfig.data.datasets[0].label = `${year}年`;
  chartConfig.data.datasets[0].data = data;
  return new Chart(ctx, chartConfig);
};


let myChart = createChart(populationData[1950], 1950);


yearSlider.addEventListener('input', () => {
  const selectedYear = parseInt(yearSlider.value);
  yearLabel.textContent = selectedYear;
  myChart.destroy();
  myChart = createChart(populationData[selectedYear], selectedYear);
});
