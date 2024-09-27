'use client';

import { createContext, useState } from 'react';

import type { SystemConfig, UserRequisites } from '@/types';

export const SystemContext = createContext({});

export default function SystemProvider({ children }: { children: React.ReactNode }) {
  // User input
  const [userRequisites, setUserRequisites] = useState<UserRequisites>({
    dimensions: '100',
    budget: '10000',
    energy: '50',
  });

  const handleRequisitesChange = (e) => {
    if (!isNaN(e.target.value)) {
      setUserRequisites((prevState) => ({ ...prevState, [e.target.name]: [e.target.value] }));
    }
  };

  // Devices Options
  const [systemConfig, setSystemConfig] = useState<SystemConfig>({
    megapack2xls: '1',
    megapack2s: '3',
    megapacks: '2',
    powerpacks: '1',
    transformers: '1',
  });

  const handleSystemChange = (e) => {
    if (!isNaN(e.target.value)) {
      setSystemConfig((prevState) => ({ ...prevState, [e.target.name]: [e.target.value] }));
    }
  };

  return (
    <SystemContext.Provider
      value={{ systemConfig, handleSystemChange, userRequisites, handleRequisitesChange }}
    >
      {children}
    </SystemContext.Provider>
  );
}
