import searcher from '../../images/searcher.png';
import arrow from '../../images/arrow.png';
import ovalGreen from '../../images/oval-green.png';
import ovalRed from '../../images/oval-red.png';

export function StatisticElementLogo({ percent }) {
  return (
    <div className="statistic__logo-wrapper">
      <img className="statistic__logo-oval" src={percent > 0 ? ovalGreen : ovalRed} alt={'Searcher'} />
      <div className="statistic__logo-round">
        <img src={searcher} alt={'Circle'} />
        <img className="statistic__logo-arrow" src={arrow} alt={'Arrow'} />
      </div>
    </div>
  );
}
