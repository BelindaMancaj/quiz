import {createContext, Dispatch, SetStateAction} from 'react';

interface QuizContextType {
    gameState: string,
    setGameState: Dispatch<SetStateAction<string>>,
  }

export const QuizContext = createContext<QuizContextType | null>(null);