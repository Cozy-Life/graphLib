import { lineGraphData } from '../stub/data/lineGraphData.js';

// データセット
const lineGraphObj = {
  data: lineGraphData,
  graphId: 'line-chart',
  legendId: 'legend-line-chart',
};

const checkedMap = new Map();
lineGraphObj.data.forEach((data) => {
  checkedMap.set(data.key, true);
});

LineChart.drawLineChart(lineGraphObj.data, lineGraphObj.graphId, checkedMap, 400, 400);

// 表を作成
createTable(lineGraphObj);

function createTable(lineGraphObj) {
  const idParentEl = document.getElementById(lineGraphObj.legendId);
  lineGraphObj.data.forEach((data) => {
    const childDivEl = document.createElement('div');
    childDivEl.setAttribute('class', 'list');

    const childInputEl = document.createElement('input');
    childInputEl.setAttribute('type', 'checkbox');
    childInputEl.setAttribute('id', data.key);
    childInputEl.checked = checkedMap.get(data.key);
    childInputEl.addEventListener('click', (e) => {
      checkedMap.set(data.key, !checkedMap.get(data.key));
      LineChart.drawLineChart(lineGraphObj.data, lineGraphObj.graphId, checkedMap, 400, 400);
    });

    const childLabelEl = document.createElement('label');
    childLabelEl.setAttribute('for', data.key);

    const childColorSpanEl = document.createElement('span');
    childColorSpanEl.innerHTML = '⚫︎';
    childColorSpanEl.style.color = `${data.color}`;

    const childNameSpanEl = document.createElement('span');
    childNameSpanEl.innerHTML = `${data.title}`;

    const childKeySpanHiddenEl = document.createElement('span');
    childKeySpanHiddenEl.hidden = true;
    childKeySpanHiddenEl.innerHTML = `${data.key}`;

    idParentEl.appendChild(childDivEl);
    childDivEl.appendChild(childInputEl);
    childDivEl.appendChild(childLabelEl);
    childLabelEl.appendChild(childColorSpanEl);
    childLabelEl.appendChild(childNameSpanEl);
    childLabelEl.appendChild(childKeySpanHiddenEl);
  });
}
