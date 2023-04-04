import { useState, useEffect } from 'react';
import './App.css';
import FilterTiming from './FilterTiming/FilterTiming';
import StackedBar from './StackedBar/StackedBar';
import StatisticBlock from './StatisticBlock/StatisticBlock';
import { LASTHOUR_FILTER_TYPE } from './FilterTiming/constsFilterTiming';
import { serverResponse } from './api/API';
import StatisticHeader from './StatisticHeader/StatisticHeader';

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
    return <h1>Wait...</h1>;
  }
}

export default App;
