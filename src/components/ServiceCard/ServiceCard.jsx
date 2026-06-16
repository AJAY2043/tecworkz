import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import './ServiceCard.css';

function ServiceCard({ icon, title, short, id, compact = false }) {
  return (
    <article className={`service-card ${compact ? 'service-card--compact' : ''}`}>
      <div className="service-card__icon">
        <Icon name={icon} />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__text">{short}</p>
      {!compact && (
        <Link to={`/services#${id}`} className="service-card__link">
          Learn more <Icon name="arrow" />
        </Link>
      )}
    </article>
  );
}

export default ServiceCard;