import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function generateHEX() {
  const chart = '0123456789ABCDEF';
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += chart[Math.floor(Math.random() * 16)];
  }
  return hex;
}

export const StatisticsList = ({ stats }) => {
  return (
    <ul className={s.statList}>
      {stats.map(item => (
        <li
          className={s.item}
          style={{ backgroundColor: generateHEX() }}
          key={item.id}
        >
          <span className={s.label}>{item.label}</span>
          <span className={s.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.array,
};
