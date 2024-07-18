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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCB5ZWFyTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVhckxhYmVsJyk7XG5jb25zdCB5ZWFyU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3llYXJTbGlkZXInKTtcblxuLy/kurrlj6Pjg4fjg7zjgr9cbmNvbnN0IHBvcHVsYXRpb25EYXRhID0ge1xuICAxOTUwOiBbNTU0Ljc2LCAzNTcuNTYsIDE1Ny44MSwgODMuNjIsIDQxLjgyLCAyOC4wMF0sXG4gIDE5NzU6IFs5MjcuODAsIDYyMC43MCwgMjIwLjE2LCAxMTEuNTIsIDUyLjY5LCAzNS41OV0sXG4gIDIwMDA6IFsxMjczLjk3LCAxMDIxLjA4LCAyODQuMTUsIDEyNy4wMywgNTkuMjcsIDQwLjcxXSxcbiAgMjAyNTogWzE0NDEuNDIsIDEzOTUuNDksIDM1MC4xMCwgMTI0LjgxLCA2My40MCwgNDQuMjRdLFxuICAyMDUwOiBbMTM5Mi4zMCwgMTU5Mi43MCwgMTk0Ljk3LCAxMTIuMTksIDY0LjExLCA0Mi41NF1cbn07XG5cblxuY29uc3QgY2hhcnRDb25maWcgPSB7XG4gIHR5cGU6ICdiYXInLFxuICBkYXRhOiB7XG4gICAgbGFiZWxzOiBbJ0NoaW5hJywgJ0luZGlhJywgJ1VTQScsICdKYXBhbicsICdGcmFuY2UnLCAnU3BhaW4nXSxcbiAgICBkYXRhc2V0czogW3tcbiAgICAgIGxhYmVsOiBgcG9wdWxhdGlvbiAxOTUw5bm0YCxcbiAgICAgIGRhdGE6IHBvcHVsYXRpb25EYXRhWzE5NTBdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC41KScsXG4gICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMC41KScsXG4gICAgICAgICdyZ2JhKDI1NSwgMjA1LCA4NiwgMC41KScsXG4gICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC41KScsXG4gICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC41KScsXG4gICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuNSknXG4gICAgICBdLFxuICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICB9XVxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgc2NhbGVzOiB7XG4gICAgICB5OiB7XG4gICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICBtYXg6IDE2MDAsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICB0ZXh0OiAnKG1pbGxpb24pJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbmNvbnN0IGNyZWF0ZUNoYXJ0ID0gKGRhdGEsIHllYXIpID0+IHtcbiAgY2hhcnRDb25maWcuZGF0YS5kYXRhc2V0c1swXS5sYWJlbCA9IGAke3llYXJ95bm0YDtcbiAgY2hhcnRDb25maWcuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gZGF0YTtcbiAgcmV0dXJuIG5ldyBDaGFydChjdHgsIGNoYXJ0Q29uZmlnKTtcbn07XG5cblxubGV0IG15Q2hhcnQgPSBjcmVhdGVDaGFydChwb3B1bGF0aW9uRGF0YVsxOTUwXSwgMTk1MCk7XG5cblxueWVhclNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRZZWFyID0gcGFyc2VJbnQoeWVhclNsaWRlci52YWx1ZSk7XG4gIHllYXJMYWJlbC50ZXh0Q29udGVudCA9IHNlbGVjdGVkWWVhcjtcbiAgbXlDaGFydC5kZXN0cm95KCk7XG4gIG15Q2hhcnQgPSBjcmVhdGVDaGFydChwb3B1bGF0aW9uRGF0YVtzZWxlY3RlZFllYXJdLCBzZWxlY3RlZFllYXIpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=