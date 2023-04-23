export function StatisticElementAnalytics({ names, values, info, percent, helpData }) {
  return (
    <div className="statistic_analytics">
      {names.map((elem, i) => {
        return (
          <div className="statistic_analytics-wrapper" style={{ color: percent > 0 ? '#000' : ' #FF6A67' }}>
            <div className="statistic_analytics-mobile-text">{elem}</div>
            <div className="statistic_analytics-mobile-count">
              {elem === 'Avg. Check:' ? `${values[i].toLocaleString('ru-RU')}` : `${values[i]}%`}
            </div>
          </div>
        );
      })}
      <div className="statistic_analytics-info">{info}</div>
      <div className="statistic_analytics-link-wrapper">
        <div className="statistic_analytics-link-text">{'Help:'}</div>
        {Object.entries(helpData).map(([key, value], index, array) => {
          return (
            <a className="statistic_analytics-link" href={value}>
              {array.length - 1 === index ? `${key}` : `${key},`}
            </a>
          );
        })}
      </div>
    </div>
  );
}
