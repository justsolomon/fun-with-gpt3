import { useEffect, useState } from 'react';
import { Prompt } from 'types/global';
import { ErrorResponse, PromptResponse } from 'types/responses';
import useStorage from 'hooks/useStorage';
import Layout from 'components/global/Layout';
import PromptForm from 'components/home/PromptForm';
import PromptResponseList from 'components/home/PromptResponseList';
import 'styles/main.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const { addStorageValue, getStorageValue } = useStorage();

  useEffect(() => {
    const storedPrompts = getStorageValue<Prompt[]>('prompts');

    if (storedPrompts?.length) setPrompts(storedPrompts);
  }, [getStorageValue]);

  const processPrompt = async (prompt: string) => {
    const data = {
      prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    setIsLoading(true);
    setIsSuccess(false);
    setError('');
    const response = await fetch(
      'https://api.openai.com/v1/engines/text-curie-001/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(data),
      },
    );

    const responseData: PromptResponse | ErrorResponse = await response.json();
    setIsLoading(false);

    if (response.ok) {
      const { id, choices } = responseData as PromptResponse;
      const updatedPrompts = [
        { id, prompt, response: choices[0].text },
        ...prompts,
      ];

      setIsSuccess(true);
      setPrompts(updatedPrompts);
      addStorageValue('prompts', updatedPrompts);
    } else {
      setError((responseData as ErrorResponse).error.message);
    }
  };

  return (
    <Layout>
      <PromptForm
        isLoading={isLoading}
        isSuccess={isSuccess}
        error={error}
        submit={processPrompt}
      />
      <PromptResponseList prompts={prompts} />
    </Layout>
  );
};

export default App;
