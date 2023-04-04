import StatisticList from './StatisticList';
import './StatisticList.css';

function StatisticHeader({ serverData }) {
  const barHeaderNames = ['Errors:', 'Zeroes:', 'Timeouts:'];
  const barHeaderValues = [
    Number(serverData.errors).toFixed(2),
    Number(serverData.zeroes).toFixed(2),
    Number(serverData.timeout).toFixed(2),
  ];

  return (
    <div className="stacked-bar">
      <ul className="bar-header-list">
        {barHeaderNames.map((element, id) => {
          return <StatisticList name={element} value={barHeaderValues[id]} />;
        })}
      </ul>
    </div>
  );
}

export default StatisticHeader;
