import {
  LASTHOUR_FILTER_TYPE,
  // TODAY_FILTER_TYPE,
  YESTERDAY_FILTER_TYPE,
  LASTDAYS_FILTER_TYPE,
} from './constsFilterTiming';
import FilterTimingElement from './FilterTimingElement';
import './FilterTiming.css';

const FILTER_LABELS = {
  [LASTHOUR_FILTER_TYPE]: 'Last hour',
  // [TODAY_FILTER_TYPE]: 'Today',
  [YESTERDAY_FILTER_TYPE]: 'Yesterday',
  [LASTDAYS_FILTER_TYPE]: 'Last 3 days',
};

function FilterTiming({ filterTiming, setFilterTiming }) {
  // Замыкание
  const handleClickFilterTimingElement = (filterType) => {
    return () => {
      setFilterTiming(filterType);
    };
  };

  return (
    <div className="filter-timing">
      {Object.entries(FILTER_LABELS).map(([type, label]) => (
        <FilterTimingElement
          text={label}
          callback={handleClickFilterTimingElement(type)}
          isActive={filterTiming === type}
        />
      ))}
    </div>
  );
}

export default FilterTiming;
