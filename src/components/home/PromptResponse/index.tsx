import { Prompt } from 'types/global';
import styles from './promptResponse.module.scss';

const PromptResponse = ({ prompt, response }: Prompt) => {
  return (
    <li className={styles['prompt-response']}>
      <div className={styles['prompt-response__section']}>
        <h3 className={styles['prompt-response__section__label']}>Prompt:</h3>
        <p className={styles['prompt-response__section__value']}>{prompt}</p>
      </div>

      <div className={styles['prompt-response__section']}>
        <h3 className={styles['prompt-response__section__label']}>Response:</h3>
        <p className={styles['prompt-response__section__value']}>{response}</p>
      </div>
    </li>
  );
};

export default PromptResponse;
