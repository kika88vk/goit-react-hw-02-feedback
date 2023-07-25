import css from './Counting.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={css.heading}>{title}</h1>
      {children}
    </>
  );
};
