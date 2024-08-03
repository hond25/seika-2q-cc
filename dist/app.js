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
// 何か新しい機能を入れる　再生や他のデータとの組みあわせなど　今のやつはデフォルト少し触っただけに感じる
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSwwQ0FBMEMsS0FBSztBQUMvQztBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxhQUFhO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteUNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IHllYXJMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyTGFiZWwnKTtcbmNvbnN0IHllYXJTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgneWVhclNsaWRlcicpO1xuXG4vL+S6uuWPo+ODh+ODvOOCv1xuY29uc3QgcG9wdWxhdGlvbkRhdGEgPSB7XG4gIDE5NTA6IFs1NTQuNzYsIDM1Ny41NiwgMTU3LjgxLCA4My42MiwgNzkuNTMsIDQ5LjgxICwgNDEuODIsIDI4LjAwXSxcbiAgMTk3NTogWzkyNy44MCwgNjIwLjcwLCAyMjAuMTYsIDExMS41MiwgMTM0LjM5ICwgNTUuNDIsIDUyLjY5LCAzNS41OV0sXG4gIDIwMDA6IFsxMjczLjk3LCAxMDIxLjA4LCAyODQuMTUsIDEyNy4wMywgMjA5LjE3ICwgNTguNjcsIDU5LjI3LCA0MC43MV0sXG4gIDIwMjU6IFsxNDQxLjQyLCAxMzk1LjQ5LCAzNTAuMTAsIDEyNC44MSwgMjYzLjc0ICwgNjMsNjYsIDYzLjQwLCA0NC4yNF0sXG4gIDIwNTA6IFsxMzkyLjMwLCAxNTkyLjcwLCAzOTQuOTcsIDExMi4xOSwgMjg0LjY0ICwgNjcuMTQgLCA2My4xMSwgNDIuNTRdXG59O1xuXG5cbmNvbnN0IGNoYXJ0Q29uZmlnID0ge1xuICB0eXBlOiAnYmFyJyxcbiAgZGF0YToge1xuICAgIGxhYmVsczogWydDaGluYScsICdJbmRpYScsICdVU0EnLCAnSmFwYW4nLCAnSW5kb25lc2lhJyAsICdVSycsICdGcmFuY2UnLCAnU3BhaW4nXSxcbiAgICBkYXRhc2V0czogW3tcbiAgICAgIGxhYmVsOiBgcG9wdWxhdGlvbiAxOTUw5bm0YCxcbiAgICAgIGRhdGE6IHBvcHVsYXRpb25EYXRhWzE5NTBdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMC41KScsXG4gICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMC41KScsXG4gICAgICAgICdyZ2JhKDI1NSwgMjA1LCA4NiwgMC41KScsXG4gICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMC41KScsXG4gICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMC41KScsXG4gICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDAuNSknXG4gICAgICBdLFxuICAgICAgYm9yZGVyV2lkdGg6IDFcbiAgICB9XVxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgc2NhbGVzOiB7XG4gICAgICB5OiB7XG4gICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICBtYXg6IDE2MDAsXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICB0ZXh0OiAnKG1pbGxpb24pJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbmNvbnN0IGNyZWF0ZUNoYXJ0ID0gKGRhdGEsIHllYXIpID0+IHtcbiAgY2hhcnRDb25maWcuZGF0YS5kYXRhc2V0c1swXS5sYWJlbCA9IGAke3llYXJ95bm0YDtcbiAgY2hhcnRDb25maWcuZGF0YS5kYXRhc2V0c1swXS5kYXRhID0gZGF0YTtcbiAgcmV0dXJuIG5ldyBDaGFydChjdHgsIGNoYXJ0Q29uZmlnKTtcbn07XG5cblxubGV0IG15Q2hhcnQgPSBjcmVhdGVDaGFydChwb3B1bGF0aW9uRGF0YVsxOTUwXSwgMTk1MCk7XG5cblxueWVhclNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWRZZWFyID0gcGFyc2VJbnQoeWVhclNsaWRlci52YWx1ZSk7XG4gIHllYXJMYWJlbC50ZXh0Q29udGVudCA9IHNlbGVjdGVkWWVhcjtcbiAgLy8gY29uc29sZS5sb2cobXlDaGFydC5kYXRhPy5kYXRhc2V0cywgcG9wdWxhdGlvbkRhdGFbc2VsZWN0ZWRZZWFyXSlcbiAgY2hhcnRDb25maWcuZGF0YS5kYXRhc2V0c1swXS5sYWJlbCA9IGAke3NlbGVjdGVkWWVhcn3lubRgO1xuICBjaGFydENvbmZpZy5kYXRhLmRhdGFzZXRzWzBdLmRhdGEgPSBwb3B1bGF0aW9uRGF0YVtzZWxlY3RlZFllYXJdO1xuICBteUNoYXJ0LnVwZGF0ZSgpO1xuICAvLyBteUNoYXJ0LmRlc3Ryb3koKTtcbiAgLy8gbXlDaGFydCA9IGNyZWF0ZUNoYXJ0KHBvcHVsYXRpb25EYXRhW3NlbGVjdGVkWWVhcl0sIHNlbGVjdGVkWWVhcik7XG59KTtcbi8vIOS9leOBi+aWsOOBl+OBhOapn+iDveOCkuWFpeOCjOOCi+OAgOWGjeeUn+OChOS7luOBruODh+ODvOOCv+OBqOOBrue1hOOBv+OBguOCj+OBm+OBquOBqeOAgOS7iuOBruOChOOBpOOBr+ODh+ODleOCqeODq+ODiOWwkeOBl+inpuOBo+OBn+OBoOOBkeOBq+aEn+OBmOOCiyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==