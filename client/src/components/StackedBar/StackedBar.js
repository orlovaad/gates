import { CanvasJSChart } from 'canvasjs-react-charts';

function options(error) {
  const i = 0;
  return {
    title: {
      text: '',
    },
    toolTip: {
      shared: true,
    },
    height: 120,
    width: 700,
    axisY: {
      suffix: '%',
    },
    data: [
      {
        type: 'stackedBar100',
        color: '#FFCC00',
        name: 'Error 500',
        showInLegend: true,
        indexLabel: '{y}',
        indexLabelFontColor: 'white',
        dataPoints: [{ label: 'Amount', y: error[i].count }],
      },
      {
        type: 'stackedBar100',
        color: '#5856D5',
        name: 'Error 501',
        showInLegend: true,
        indexLabel: '{y}',
        indexLabelFontColor: 'white',
        dataPoints: [{ y: error[i + 1].count }],
      },
      {
        type: 'stackedBar100',
        color: '#2196F3',
        name: 'Error 502',
        showInLegend: true,
        indexLabel: '{y}',
        indexLabelFontColor: 'white',
        dataPoints: [{ y: error[i + 2].count }],
      },
      {
        type: 'stackedBar100',
        color: '#A0B0B9',
        name: 'Other',
        showInLegend: true,
        indexLabel: '{y}',
        indexLabelFontColor: 'white',
        dataPoints: [{ y: error[i + 3].count + error[i + 4].count }],
      },
    ],
  };
}

function StackedBar({ errorsData }) {
  return (
    <div>
      <CanvasJSChart options={options(errorsData.data)} />
    </div>
  );
}

export default StackedBar;
