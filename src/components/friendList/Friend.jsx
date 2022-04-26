import PropTypes from 'prop-types';
import s from './Friends.module.css';

export const Friend = ({ status, name, avatar }) => {
  const isOnline = status ? s.statusRed : s.statusGreen;
  return (
    <div>
      <span className={isOnline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
};

Friend.propTypes = {
  status: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
