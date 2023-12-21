import { programingLangulageData } from '../stub/data/programingLanguage.js';
import { libraryFrameworkData } from '../stub/data/libraryFramework.js';
import { developmentToolData } from '../stub/data/developmentTool.js';
import { databaseData } from '../stub/data/database.js';

// データセット
const programingSection = {
  data: programingLangulageData,
  graphId: 'donut-chart-programing-language',
  legendId: 'legend-programing-language',
};
const libraryFrameworkSection = {
  data: libraryFrameworkData,
  graphId: 'donut-chart-library-framework',
  legendId: 'legend-library-framework',
};
const developmentTooloSection = {
  data: developmentToolData,
  graphId: 'donut-chart-development-tool',
  legendId: 'legend-development-tool',
};
const databaseSection = {
  data: databaseData,
  graphId: 'donut-chart-database',
  legendId: 'legend-database',
};

const dataMap = new Map();
dataMap.set(programingSection.data[0].part, programingSection);
dataMap.set(libraryFrameworkSection.data[0].part, libraryFrameworkSection);
dataMap.set(developmentTooloSection.data[0].part, developmentTooloSection);
dataMap.set(databaseSection.data[0].part, databaseSection);

DonutChart.drawDonutChart(programingSection.data, programingSection.graphId);
DonutChart.drawDonutChart(libraryFrameworkSection.data, libraryFrameworkSection.graphId);
DonutChart.drawDonutChart(developmentTooloSection.data, developmentTooloSection.graphId);
DonutChart.drawDonutChart(databaseSection.data, databaseSection.graphId);

DonutChart.mouseOverDonutChart(mouseOverDonutChartCb);
DonutChart.mouseOutDonutChart(mouseOutDonutChartCb);

// 表を作成
createTable(programingSection);
createTable(libraryFrameworkSection);
createTable(developmentTooloSection);
createTable(databaseSection);

function mouseOverDonutChartCb(data) {
  const sectionObj = dataMap.get(data.part);
  const element = document.getElementById(sectionObj.legendId);
  element.childNodes.forEach((childNode) => {
    childNode.childNodes[2].innerText === String(data.key)
      ? (childNode.style.opacity = '1')
      : (childNode.style.opacity = '0.1');
  });
}

function mouseOutDonutChartCb(data) {
  const sectionObj = dataMap.get(data.part);
  const element = document.getElementById(sectionObj.legendId);
  element.childNodes.forEach((childNode) => {
    childNode.style.opacity = '1';
  });
}

function createTable(section) {
  const sortedSectionData = section.data.sort((a, b) => {
    const valueA = a.value;
    const valueB = b.value;
    if (valueA > valueB) return -1;
    if (valueA < valueB) return 1;
    return 0;
  });
  const idParentEl = document.getElementById(section.legendId);
  sortedSectionData.forEach((data) => {
    const childDivEl = document.createElement('div');
    childDivEl.setAttribute('class', 'list');
    childDivEl.addEventListener('mouseover', (e) => {
      const mouseOverKey = childDivEl.childNodes[2].innerText;
      const mouseOverData = section.data.find((record) => record.key === Number(mouseOverKey));
      childDivEl.parentElement.childNodes.forEach((childNode) => {
        childNode.childNodes[2].innerHTML === mouseOverKey
          ? (childNode.style.opacity = '1')
          : (childNode.style.opacity = '0.1');
      });
      DonutChart.mouseOverLegend(section.graphId, mouseOverData);
    });
    childDivEl.addEventListener('mouseout', (e) => {
      childDivEl.parentElement.childNodes.forEach((childNode) => {
        childNode.style.opacity = '1';
      });
      DonutChart.mouseOutLegend(section.graphId);
    });

    const childColorSpanEl = document.createElement('span');
    childColorSpanEl.innerHTML = '⚫︎';
    childColorSpanEl.style.color = `${data.color}`;

    const childNameSpanEl = document.createElement('span');
    childNameSpanEl.innerHTML = `${data.name}`;

    const childKeySpanHiddenEl = document.createElement('span');
    childKeySpanHiddenEl.hidden = true;
    childKeySpanHiddenEl.innerHTML = `${data.key}`;

    idParentEl.appendChild(childDivEl);
    childDivEl.appendChild(childColorSpanEl);
    childDivEl.appendChild(childNameSpanEl);
    childDivEl.appendChild(childKeySpanHiddenEl);
  });
}
