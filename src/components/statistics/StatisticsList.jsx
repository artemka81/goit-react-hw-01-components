import PropTypes from 'prop-types';

export const StatisticsList = ({ stats }) => {
  return (
    <ul class="stat-list">
      {stats.map(item => (
        <li class="item" key={item.id}>
          <span class="label">{item.label}</span>
          <span class="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.array,
};
