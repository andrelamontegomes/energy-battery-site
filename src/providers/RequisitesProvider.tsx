'use client';

import { createContext, useState } from 'react';

import type { UserRequisites } from '@/types';

interface RequisitesContextType {
  requisites: UserRequisites;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RequisitesContext = createContext<RequisitesContextType>({} as RequisitesContextType);

export default function RequisitesProvider({ children }: { children: React.ReactNode }) {
  const [requisites, setRequisites] = useState<UserRequisites>({
    dimensions: '500',
    budget: '100000',
    energy: '50',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isNaN(Number(e.target.value))) {
      setRequisites((prevState) => ({ ...prevState, [e.target.name]: [e.target.value] }));
    }
  };

  return (
    <RequisitesContext.Provider value={{ requisites, handleChange }}>
      {children}
    </RequisitesContext.Provider>
  );
}
