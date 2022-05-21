import { Prompt } from 'types/global';
import PromptResponse from '../PromptResponse';
import styles from './promptResponseList.module.scss';

interface PromptResponseListProps {
  prompts: Prompt[];
}

const PromptResponseList = ({ prompts }: PromptResponseListProps) => {
  return (
    <div className={styles['response-list']}>
      <h2 className={styles['response-list__header']}>Responses</h2>

      {prompts.length ? (
        <ul className={styles['response-list__items']}>
          {prompts.map((prompt) => (
            <PromptResponse {...prompt} key={prompt.id} />
          ))}
        </ul>
      ) : (
        <p>Your prompt responses will appear here</p>
      )}
    </div>
  );
};

export default PromptResponseList;
