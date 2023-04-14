import './StatisticElement.css';
import { StatisticElementActivity } from './StatisticElement/StatisticElementActivity';
import { StatisticElementAnalytics } from './StatisticElement/StatisticElementAnalytics';
import { StatisticElementLogo } from './StatisticElement/StatisticElementLogo';

function StatisticElement({ serverData, id, helpData }) {
  const activityNames = ['Searches', 'Clicks', 'Bookings'];
  const activityCurrentValues = [
    Number(serverData.searches_current),
    Number(serverData.clicks_current),
    Number(serverData.bookings_current),
  ];
  const activityPrevValues = [
    Number(serverData.searches_previous),
    Number(serverData.clicks_previous),
    Number(serverData.bookings_previous),
  ];
  const percent = [
    ((activityCurrentValues[0] - activityPrevValues[0]) / activityPrevValues[0]) * 100,
    ((activityCurrentValues[1] - activityPrevValues[1]) / activityPrevValues[1]) * 100,
    ((activityCurrentValues[2] - activityPrevValues[2]) / activityPrevValues[2]) * 100,
  ];
  const analyticNames = [['Mobile traffic:', 'Web traffic:'], ['CTR:'], ['STR:', 'Avg. Check:']];
  const analyticValues = [
    [Number(serverData.mobile_traffic), Number(serverData.web_traffic)],
    [Number(serverData.ctr).toFixed(2)],
    [Number(serverData.str).toFixed(1), Number(Math.round(serverData.avg_price))],
  ];
  const analyticInfo = [
    'You get 100% traffic on mobile and desktop devices.',
    'Conversion from searches  to clicks on all devices.',
    'Conversion from cliks  to bookings on all devices.',
  ];

  return (
    <div>
      <div className="statistic-element">
        <StatisticElementLogo percent={percent[id]} />
        <StatisticElementActivity
          name={activityNames[id]}
          valueCurrent={activityCurrentValues[id]}
          valuePrev={activityPrevValues[id]}
          percent={percent[id]}
        />
        <StatisticElementAnalytics
          names={analyticNames[id]}
          values={analyticValues[id]}
          info={analyticInfo[id]}
          percent={percent[id]}
          helpData={helpData[id]}
        />
      </div>
    </div>
  );
}

export default StatisticElement;
