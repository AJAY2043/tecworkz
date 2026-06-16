import './PageHero.css';

function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageHero;