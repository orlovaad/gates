import StatisticElement from './StatisticElement';

function StatisticBlock({ serverData, helpData }) {
  return (
    <div className="statistic-block">
      {[0, 1, 2].map((value) => {
        return <StatisticElement serverData={serverData} id={value} helpData={helpData} />;
      })}
    </div>
  );
}

export default StatisticBlock;
