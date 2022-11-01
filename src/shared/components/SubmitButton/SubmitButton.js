import styles from './styles.module.scss';

export default function SubmitButton({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}
