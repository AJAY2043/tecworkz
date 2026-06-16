import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faHeadset,
  faNetworkWired,
  faShieldHalved,
  faCheck,
  faArrowRight,
  faBullseye,
  faUsers,
  faStar,
  faLocationDot,
  faEnvelope,
  faPhone,
  faClock,
  faBars,
  faXmark,
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
  faPaperPlane,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

// Maps short keys to Font Awesome icons so components can do <Icon name="code" />
// Add new icons here as the site grows — keep keys lowercase and short.
const ICON_MAP = {
  code: faCode,
  support: faHeadset,
  network: faNetworkWired,
  shield: faShieldHalved,
  check: faCheck,
  arrow: faArrowRight,
  target: faBullseye,
  team: faUsers,
  value: faStar,
  pin: faLocationDot,
  mail: faEnvelope,
  phone: faPhone,
  clock: faClock,
  menu: faBars,
  close: faXmark,
  quote: faQuoteLeft,
  chevronLeft: faChevronLeft,
  chevronRight: faChevronRight,
  send: faPaperPlane,
  success: faCircleCheck,
};

function Icon({ name, className = '' }) {
  const icon = ICON_MAP[name];
  if (!icon) return null;
  return <FontAwesomeIcon icon={icon} className={className} />;
}

export default Icon;