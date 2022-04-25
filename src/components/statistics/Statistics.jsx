import PropTypes from 'prop-types';
export const Statistics = ({ title, children }) => {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      {children}
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
