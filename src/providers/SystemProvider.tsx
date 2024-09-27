'use client';

import { createContext, useState } from 'react';

import type { SystemConfig, UserRequisites } from '@/types';

export const SystemContext = createContext({});

export default function SystemProvider({ children }: { children: React.ReactNode }) {
  //TODO: base64 url to share url
  
  //const [recommendation, setRecommendation] = useState<type | null>("");
  // const [errors, setErrors] = useState<string[]>([]);
  // const [calculation, setCalculation] = useState<CalculationType>({});
  // User input
  const [userRequisites, setUserRequisites] = useState<UserRequisites>({
    dimensions: 0,
    budget: 0,
    energy: 0,
  });

  // Battery Options
  const [system, setSystem] = useState<SystemConfig>({
    megapack2xls: 0,
    megapack2s: 0,
    megapacks: 0,
    powerpacks: 0,
    transformers: 0,
  });

  return <SystemContext.Provider value={system}>{children}</SystemContext.Provider>;
}
