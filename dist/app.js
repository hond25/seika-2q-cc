/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
const ctx = document.getElementById('myChart').getContext('2d');
const yearLabel = document.getElementById('yearLabel');
const yearSlider = document.getElementById('yearSlider');

// 初期の人口データ
const populationData = {
  1950: [554.76, 357.56, 157.81, 83.62, 41.82, 28.00],
  1975: [927.80, 620.70, 220.16, 111.52, 52.69, 35.59],
  2000: [1273.97, 1021.08, 284.15, 127.03, 59.27, 40.71],
  2025: [1441.42, 1395.49, 350.10, 124.81, 63.40, 44.24],
  2050: [1392.30, 1592.70, 194.97, 112.19, 64.11, 42.54]
};

// チャートの初期設定
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQTBDLEtBQUs7QUFDL0M7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgeWVhckxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llYXJMYWJlbCcpO1xuY29uc3QgeWVhclNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyU2xpZGVyJyk7XG5cbi8vIOWIneacn+OBruS6uuWPo+ODh+ODvOOCv1xuY29uc3QgcG9wdWxhdGlvbkRhdGEgPSB7XG4gIDE5NTA6IFs1NTQuNzYsIDM1Ny41NiwgMTU3LjgxLCA4My42MiwgNDEuODIsIDI4LjAwXSxcbiAgMTk3NTogWzkyNy44MCwgNjIwLjcwLCAyMjAuMTYsIDExMS41MiwgNTIuNjksIDM1LjU5XSxcbiAgMjAwMDogWzEyNzMuOTcsIDEwMjEuMDgsIDI4NC4xNSwgMTI3LjAzLCA1OS4yNywgNDAuNzFdLFxuICAyMDI1OiBbMTQ0MS40MiwgMTM5NS40OSwgMzUwLjEwLCAxMjQuODEsIDYzLjQwLCA0NC4yNF0sXG4gIDIwNTA6IFsxMzkyLjMwLCAxNTkyLjcwLCAxOTQuOTcsIDExMi4xOSwgNjQuMTEsIDQyLjU0XVxufTtcblxuLy8g44OB44Oj44O844OI44Gu5Yid5pyf6Kit5a6aXG5jb25zdCBjaGFydENvbmZpZyA9IHtcbiAgdHlwZTogJ2JhcicsXG4gIGRhdGE6IHtcbiAgICBsYWJlbHM6IFsnQ2hpbmEnLCAnSW5kaWEnLCAnVVNBJywgJ0phcGFuJywgJ0ZyYW5jZScsICdTcGFpbiddLFxuICAgIGRhdGFzZXRzOiBbe1xuICAgICAgbGFiZWw6IGBwb3B1bGF0aW9uIDE5NTDlubRgLFxuICAgICAgZGF0YTogcG9wdWxhdGlvbkRhdGFbMTk1MF0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAwLjUpJyxcbiAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAwLjUpJyxcbiAgICAgICAgJ3JnYmEoMjU1LCAyMDUsIDg2LCAwLjUpJyxcbiAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAwLjUpJyxcbiAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAwLjUpJyxcbiAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMC41KSdcbiAgICAgIF0sXG4gICAgICBib3JkZXJXaWR0aDogMVxuICAgIH1dXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBzY2FsZXM6IHtcbiAgICAgIHk6IHtcbiAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgIG1heDogMTYwMCxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIHRleHQ6ICcobWlsbGlvbiknXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuY29uc3QgY3JlYXRlQ2hhcnQgPSAoZGF0YSwgeWVhcikgPT4ge1xuICBjaGFydENvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmxhYmVsID0gYCR7eWVhcn3lubRgO1xuICBjaGFydENvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBkYXRhO1xuICByZXR1cm4gbmV3IENoYXJ0KGN0eCwgY2hhcnRDb25maWcpO1xufTtcblxuXG5sZXQgbXlDaGFydCA9IGNyZWF0ZUNoYXJ0KHBvcHVsYXRpb25EYXRhWzE5NTBdLCAxOTUwKTtcblxuXG55ZWFyU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICBjb25zdCBzZWxlY3RlZFllYXIgPSBwYXJzZUludCh5ZWFyU2xpZGVyLnZhbHVlKTtcbiAgeWVhckxhYmVsLnRleHRDb250ZW50ID0gc2VsZWN0ZWRZZWFyO1xuICBteUNoYXJ0LmRlc3Ryb3koKTtcbiAgbXlDaGFydCA9IGNyZWF0ZUNoYXJ0KHBvcHVsYXRpb25EYXRhW3NlbGVjdGVkWWVhcl0sIHNlbGVjdGVkWWVhcik7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==