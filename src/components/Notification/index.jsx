import notecss from './notification.module.scss';
import PropTypes from 'prop-types';

const Notifications = ({ message }) => {
  return <div className={notecss.nice_message}>{message}</div>;
};
Notifications.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notifications;
