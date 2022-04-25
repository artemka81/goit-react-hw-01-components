import PropTypes from 'prop-types';

export const Friend = ({ status, name, avatar }) => {
  return (
    <div>
      <span class="status">{status ? 'Online' : 'Offline'}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </div>
  );
};

Friend.propTypes = {
  status: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
