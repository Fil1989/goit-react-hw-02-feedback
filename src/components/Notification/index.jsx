import notecss from './notification.module.scss';

const Notifications = ({ message }) => {
  return <div className={notecss.nice_message}>{message}</div>;
};
export default Notifications;
