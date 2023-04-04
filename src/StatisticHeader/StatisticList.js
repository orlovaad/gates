function StatisticList({ name, value }) {
  return (
    <li className="bar-header-wrapper">
      <div className="bar-header-options">
        <div className="bar-header-options-text">{name}</div>
        <div className="bar-header-options-count">{`${value}%`}</div>
      </div>
      <div className="bar-header-average">
        <div className="bar-header-average-text">{'Average: '}</div>
        <div className="bar-header-average-count">{'0,11%'}</div>
      </div>
    </li>
  );
}

export default StatisticList;
