export function StatisticElementActivity({ name, valueCurrent, valuePrev, percent }) {
  const roundPercent = Math.round(percent);
  return (
    <div className="statistic_activity">
      <div className="statistic_activity-name-count">
        <div className="statistic_activity-name" style={{ color: percent > 0 ? '#000' : ' #FF6A67' }}>
          {name}
        </div>
        <span className="statistic_activity-count" style={{ background: percent > 0 ? '#8bc34a' : ' #FF6A67' }}>
          {roundPercent > 0 ? `+${roundPercent}%` : `${roundPercent}%`}
        </span>
      </div>
      <div className="statistic_activity-wrapper">
        <div className="statistic_activity-now-count">{valueCurrent.toLocaleString('ru-RU')}</div>
        <div className="statistic_activity-now-text">{'Yesterday'}</div>
        <div className="statistic_activity-past-count">{valuePrev.toLocaleString('ru-RU')}</div>
        <div className="statistic_activity-past-text">{'Last Friday'}</div>
      </div>
    </div>
  );
}
