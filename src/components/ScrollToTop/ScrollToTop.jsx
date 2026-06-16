import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Resets scroll position to top whenever the route changes
// (without this, navigating to a new page keeps you scrolled where you were)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;