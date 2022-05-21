import { useEffect, useState } from 'react';
import Button from 'components/global/Button';
import styles from './promptForm.module.scss';

interface PromptFormProps {
  isLoading: boolean;
  isSuccess: boolean;
  error: string;
  submit: (prompt: string) => void;
}

const PromptForm = ({
  isLoading,
  isSuccess,
  error,
  submit,
}: PromptFormProps) => {
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    if (isSuccess) {
      setPrompt('');
    }
  }, [isSuccess]);

  return (
    <>
      {error ? <p className={styles['prompt-form__error']}>{error}</p> : null}

      <form
        className={styles['prompt-form']}
        onSubmit={(e) => {
          e.preventDefault();
          submit(prompt);
        }}
      >
        <label htmlFor="prompt" className={styles['prompt-form__label']}>
          Enter prompt
        </label>
        <textarea
          name="prompt"
          id="prompt"
          className={styles['prompt-form__textarea']}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          required
        />

        <Button isLoading={isLoading}>Submit</Button>
      </form>
    </>
  );
};

export default PromptForm;
