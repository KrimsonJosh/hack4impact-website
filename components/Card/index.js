import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import Button from '../Button';
import DotShadow from '../DotShadow';

function Card({ title, subtitle, description, href, buttonTitle, children }) {
  return (
    <div className={styles.card_root}>
      <DotShadow height={320} width={250} className={styles.shadow} />
      <div className={styles.card_column}>
        <div className={styles.card_content}>
          <small>{subtitle}</small>
          <h3 style={{ marginTop: 12 }}>{title}</h3>
          <p>{description}</p>
        </div>
        <Button href={href} className={styles.card_button}>
          {buttonTitle}
        </Button>
      </div>
      <div className={styles.card_icon}>{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Card;
