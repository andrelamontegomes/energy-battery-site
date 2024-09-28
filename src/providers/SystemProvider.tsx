'use client';

import { createContext, useState } from 'react';

import type { SystemConfig } from '@/types';

interface SystemContextType {
  system: SystemConfig;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SystemContext = createContext<SystemContextType>({} as SystemContextType);

export default function SystemProvider({ children }: { children: React.ReactNode }) {
  const [system, setSystem] = useState({
    megapack2xls: '1',
    megapack2s: '3',
    megapacks: '2',
    powerpacks: '1',
    transformers: '1',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isNaN(Number(e.target.value))) {
      setSystem((prevState) => ({ ...prevState, [e.target.name]: [e.target.value] }));
    }
  };

  return (
    <SystemContext.Provider value={{ system, handleChange }}>{children}</SystemContext.Provider>
  );
}
