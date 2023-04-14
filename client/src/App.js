import { useState, useEffect } from 'react';
import './App.css';
import FilterTiming from './components/FilterTiming/FilterTiming';
import StackedBar from './components/StackedBar/StackedBar';
import StatisticBlock from './components/StatisticBlock/StatisticBlock';
import StatisticHeader from './components/StatisticHeader/StatisticHeader';
import { LASTHOUR_FILTER_TYPE } from './components/FilterTiming/constsFilterTiming';
import { serverResponse } from './api/API';
import { InertiaProgress } from '@inertiajs/progress';

function App() {
  const [filterTiming, setFilterTiming] = useState(LASTHOUR_FILTER_TYPE);
  const [serverData, setServerData] = useState();

  useEffect(() => {
    serverResponse().then((res) => {
      setServerData(res);
    });
  }, []);

  if (serverData) {
    const filteredData = serverData.data.find((el) => el.id === filterTiming);
    const helpData = serverData.help;
    const errorsData = serverData.errors.find((el) => el.id === filterTiming);

    return (
      <div className="App">
        <header className="App-header">Main metrics</header>
        <FilterTiming filterTiming={filterTiming} setFilterTiming={setFilterTiming} />
        <StatisticHeader serverData={filteredData} />
        <StackedBar errorsData={errorsData} />
        <StatisticBlock serverData={filteredData} helpData={helpData} />
      </div>
    );
  } else {
    return InertiaProgress.init({
      delay: 0,
      color: '#29d',
      includeCSS: true,
      showSpinner: false,
    });
  }
}

export default App;
