import css from './Options.module.css';

export default function Options() {
  return (
    <div className={css.option_btn}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </div>
  );
}
