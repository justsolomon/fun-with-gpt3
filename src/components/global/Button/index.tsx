import Spinner from '../Spinner';
import styles from './button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  children: React.ReactNode;
}

function Button({ children, isLoading, ...rest }: ButtonProps) {
  return (
    <button
      className={styles['button']}
      disabled={rest.disabled || isLoading}
      {...rest}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
}

export default Button;
