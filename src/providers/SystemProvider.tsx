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

  // Battery Options
  const [system, setSystem] = useState<SystemConfig>({
    megapack2xls: '3',
    megapack2s: '1',
    megapacks: '2',
    powerpacks: '0',
    transformers: '1',
  });

  return (
    <SystemContext.Provider value={{ system, setSystem, userRequisites, setUserRequisites }}>
      {children}
    </SystemContext.Provider>
  );
}
