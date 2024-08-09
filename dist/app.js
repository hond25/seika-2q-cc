/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
const ctx = document.getElementById('myChart').getContext('2d');
const yearLabel = document.getElementById('yearLabel');
const yearSlider = document.getElementById('yearSlider');

//人口データ
const populationData = {
  1950: [554.76, 357.56, 157.81, 83.62, 79.53, 49.81 , 41.82, 28.00],
  1975: [927.80, 620.70, 220.16, 111.52, 134.39 , 55.42, 52.69, 35.59],
  2000: [1273.97, 1021.08, 284.15, 127.03, 209.17 , 58.67, 59.27, 40.71],
  2025: [1441.42, 1395.49, 350.10, 124.81, 263.74 , 63,66, 63.40, 44.24],
  2050: [1392.30, 1592.70, 394.97, 112.19, 284.64 , 67.14 , 63.11, 42.54]
};


const chartConfig = {
  type: 'bar',
  data: {
    labels: ['China', 'India', 'USA', 'Japan', 'Indonesia' , 'UK', 'France', 'Spain'],
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
  // console.log(myChart.data?.datasets, populationData[selectedYear])
  chartConfig.data.datasets[0].label = `${selectedYear}年`;
  chartConfig.data.datasets[0].data = populationData[selectedYear];
  myChart.update();
  // myChart.destroy();
  // myChart = createChart(populationData[selectedYear], selectedYear);
});

let isPlaying = false;
let interval;
const playButton = document.getElementById('playButton')
const pauseButton = document.getElementById('pauseButton')

const updateChartYear = (year) => {
  yearLabel.textContent = year;
  yearSlider.value = year;
  chartConfig.data.datasets[0].label = '${year}年';
  chartConfig.data.datasets[0].data = populationData[year];
  myChart.update();
};

const startPlaying = () => {
  if (true) {
    isPlaying = true;
    interval = setInterval(() => {
      let currentYear = parseInt(yearSlider.value);
      currentYear += 25;
      if (currentYear > 2050) currentYear = 1950;
      updateChartYear(currentYear);
    }, 800);
  }
};

const stopPlaying = () => {
  if (isPlaying) {
    isPlaying = false;
    clearInterval(interval);
  }
};

playButton.addEventListener('click', startPlaying);
pauseButton.addEventListener('click', stopPlaying);

yearSlider.addEventListener('input', () => {
  stopPlaying();
});
// 連続で再生ボタンを押すとバグる
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxhQUFhO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLElBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRCxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCB5ZWFyTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVhckxhYmVsJyk7XG5jb25zdCB5ZWFyU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llYXJTbGlkZXInKTtcblxuLy/kurrlj6Pjg4fjg7zjgr9cbmNvbnN0IHBvcHVsYXRpb25EYXRhID0ge1xuICAxOTUwOiBbNTU0Ljc2LCAzNTcuNTYsIDE1Ny44MSwgODMuNjIsIDc5LjUzLCA0OS44MSAsIDQxLjgyLCAyOC4wMF0sXG4gIDE5NzU6IFs5MjcuODAsIDYyMC43MCwgMjIwLjE2LCAxMTEuNTIsIDEzNC4zOSAsIDU1LjQyLCA1Mi42OSwgMzUuNTldLFxuICAyMDAwOiBbMTI3My45NywgMTAyMS4wOCwgMjg0LjE1LCAxMjcuMDMsIDIwOS4xNyAsIDU4LjY3LCA1OS4yNywgNDAuNzFdLFxuICAyMDI1OiBbMTQ0MS40MiwgMTM5NS40OSwgMzUwLjEwLCAxMjQuODEsIDI2My43NCAsIDYzLDY2LCA2My40MCwgNDQuMjRdLFxuICAyMDUwOiBbMTM5Mi4zMCwgMTU5Mi43MCwgMzk0Ljk3LCAxMTIuMTksIDI4NC42NCAsIDY3LjE0ICwgNjMuMTEsIDQyLjU0XVxufTtcblxuXG5jb25zdCBjaGFydENvbmZpZyA9IHtcbiAgdHlwZTogJ2JhcicsXG4gIGRhdGE6IHtcbiAgICBsYWJlbHM6IFsnQ2hpbmEnLCAnSW5kaWEnLCAnVVNBJywgJ0phcGFuJywgJ0luZG9uZXNpYScgLCAnVUsnLCAnRnJhbmNlJywgJ1NwYWluJ10sXG4gICAgZGF0YXNldHM6IFt7XG4gICAgICBsYWJlbDogYHBvcHVsYXRpb24gMTk1MOW5tGAsXG4gICAgICBkYXRhOiBwb3B1bGF0aW9uRGF0YVsxOTUwXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDAuNSknLFxuICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDAuNSknLFxuICAgICAgICAncmdiYSgyNTUsIDIwNSwgODYsIDAuNSknLFxuICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDAuNSknLFxuICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDAuNSknLFxuICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAwLjUpJ1xuICAgICAgXSxcbiAgICAgIGJvcmRlcldpZHRoOiAxXG4gICAgfV1cbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIHNjYWxlczoge1xuICAgICAgeToge1xuICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgICAgbWF4OiAxNjAwLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgdGV4dDogJyhtaWxsaW9uKSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG5jb25zdCBjcmVhdGVDaGFydCA9IChkYXRhLCB5ZWFyKSA9PiB7XG4gIGNoYXJ0Q29uZmlnLmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBgJHt5ZWFyfeW5tGA7XG4gIGNoYXJ0Q29uZmlnLmRhdGEuZGF0YXNldHNbMF0uZGF0YSA9IGRhdGE7XG4gIHJldHVybiBuZXcgQ2hhcnQoY3R4LCBjaGFydENvbmZpZyk7XG59O1xuXG5cbmxldCBteUNoYXJ0ID0gY3JlYXRlQ2hhcnQocG9wdWxhdGlvbkRhdGFbMTk1MF0sIDE5NTApO1xuXG5cbnllYXJTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkWWVhciA9IHBhcnNlSW50KHllYXJTbGlkZXIudmFsdWUpO1xuICB5ZWFyTGFiZWwudGV4dENvbnRlbnQgPSBzZWxlY3RlZFllYXI7XG4gIC8vIGNvbnNvbGUubG9nKG15Q2hhcnQuZGF0YT8uZGF0YXNldHMsIHBvcHVsYXRpb25EYXRhW3NlbGVjdGVkWWVhcl0pXG4gIGNoYXJ0Q29uZmlnLmRhdGEuZGF0YXNldHNbMF0ubGFiZWwgPSBgJHtzZWxlY3RlZFllYXJ95bm0YDtcbiAgY2hhcnRDb25maWcuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gcG9wdWxhdGlvbkRhdGFbc2VsZWN0ZWRZZWFyXTtcbiAgbXlDaGFydC51cGRhdGUoKTtcbiAgLy8gbXlDaGFydC5kZXN0cm95KCk7XG4gIC8vIG15Q2hhcnQgPSBjcmVhdGVDaGFydChwb3B1bGF0aW9uRGF0YVtzZWxlY3RlZFllYXJdLCBzZWxlY3RlZFllYXIpO1xufSk7XG5cbmxldCBpc1BsYXlpbmcgPSBmYWxzZTtcbmxldCBpbnRlcnZhbDtcbmNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheUJ1dHRvbicpXG5jb25zdCBwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXVzZUJ1dHRvbicpXG5cbmNvbnN0IHVwZGF0ZUNoYXJ0WWVhciA9ICh5ZWFyKSA9PiB7XG4gIHllYXJMYWJlbC50ZXh0Q29udGVudCA9IHllYXI7XG4gIHllYXJTbGlkZXIudmFsdWUgPSB5ZWFyO1xuICBjaGFydENvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gJyR7eWVhcn3lubQnO1xuICBjaGFydENvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBwb3B1bGF0aW9uRGF0YVt5ZWFyXTtcbiAgbXlDaGFydC51cGRhdGUoKTtcbn07XG5cbmNvbnN0IHN0YXJ0UGxheWluZyA9ICgpID0+IHtcbiAgaWYgKFwiaXNQbGF5aW5nXCIpIHtcbiAgICBpc1BsYXlpbmcgPSB0cnVlO1xuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgbGV0IGN1cnJlbnRZZWFyID0gcGFyc2VJbnQoeWVhclNsaWRlci52YWx1ZSk7XG4gICAgICBjdXJyZW50WWVhciArPSAyNTtcbiAgICAgIGlmIChjdXJyZW50WWVhciA+IDIwNTApIGN1cnJlbnRZZWFyID0gMTk1MDtcbiAgICAgIHVwZGF0ZUNoYXJ0WWVhcihjdXJyZW50WWVhcik7XG4gICAgfSwgODAwKTtcbiAgfVxufTtcblxuY29uc3Qgc3RvcFBsYXlpbmcgPSAoKSA9PiB7XG4gIGlmIChpc1BsYXlpbmcpIHtcbiAgICBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfVxufTtcblxucGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0UGxheWluZyk7XG5wYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0b3BQbGF5aW5nKTtcblxueWVhclNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgc3RvcFBsYXlpbmcoKTtcbn0pO1xuLy8g6YCj57aa44Gn5YaN55Sf44Oc44K/44Oz44KS5oq844GZ44Go44OQ44Kw44KLIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9