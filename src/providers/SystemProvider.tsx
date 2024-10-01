'use client';

import { createContext, useContext, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import type { SystemConfig } from '@/types';

import { RequisitesContext } from '@/providers/RequisitesProvider';

interface SystemContextType {
  system: SystemConfig;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SystemContext = createContext<SystemContextType>({} as SystemContextType);

export default function SystemProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { requisites } = useContext(RequisitesContext);

  let initialState = {
    megapack2xls: '20',
    megapack2s: '10',
    megapacks: '2',
    powerpacks: '5',
    transformers: '9',
  };

  if (searchParams.get('design')) {
    const decodedSearch = JSON.parse(atob(searchParams.get('design')));
    initialState = decodedSearch.system;
  }

  const [system, setSystem] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isNaN(Number(e.target.value))) {
      setSystem((prevState) => {
        let newState = {
          ...prevState,
          [e.target.name]: e.target.value,
        };

        let totalBatteries = 0;
        for (const device in newState) {
          if (device !== 'transformers') {
            totalBatteries += Number(newState[device]);
          }
        }

        newState = {
          ...newState,
          transformers: Math.floor(totalBatteries / 4),
        };

        const encodedState = btoa(JSON.stringify({ system: newState, requisites }));
        router.replace(pathname + '?design=' + encodedState);

        return newState;
      });
    }
  };

  return (
    <SystemContext.Provider value={{ system, handleChange }}>{children}</SystemContext.Provider>
  );
}
