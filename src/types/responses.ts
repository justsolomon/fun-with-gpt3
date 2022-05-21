export interface ErrorResponse {
  error: {
    code: string;
    message: string;
    param: string | null;
    type: string;
  };
}

interface Choice {
  finish_reason: string;
  index: number;
  logprobs: string | null;
  text: string;
}

export interface PromptResponse {
  choices: Choice[];
  created: number;
  id: string;
  model: string;
  object: string;
}
