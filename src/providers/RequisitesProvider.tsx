'use client';

import { createContext, useContext, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import type { UserRequisites } from '@/types';

import { SystemContext } from '@/providers/SystemProvider';

interface RequisitesContextType {
  requisites: UserRequisites;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RequisitesContext = createContext<RequisitesContextType>({} as RequisitesContextType);

export default function RequisitesProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { system } = useContext(SystemContext);

  let initialState = {
    dimensions: '2000',
    budget: '5000000',
    energy: '150',
  };

  if (searchParams.get('design')) {
    const decodedSearch = JSON.parse(atob(searchParams.get('design')));
    initialState = decodedSearch.requisites;
  }

  const [requisites, setRequisites] = useState<UserRequisites>(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isNaN(Number(e.target.value))) {
      setRequisites((prevState) => {
        const newState = { ...prevState, [e.target.name]: [e.target.value] };
        const encodedState = btoa(JSON.stringify({ requisites: newState, system }));
        router.replace(pathname + '?design=' + encodedState);
        return newState;
      });
    }
  };

  return (
    <RequisitesContext.Provider value={{ requisites, handleChange }}>
      {children}
    </RequisitesContext.Provider>
  );
}
