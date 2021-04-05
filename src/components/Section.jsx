import countcss from '../styles.module.scss';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={countcss.title}>{title}</h2>
      {children}
    </>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
