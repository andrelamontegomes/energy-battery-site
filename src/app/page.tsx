'use client';

import { useState } from 'react';

import type { SystemConfig, UserRequisites } from '@/types';

import SystemVisual from '@/components/containers/SystemVisual';
import SystemForm from '@/components/forms/SystemForm';

export default function Home() {
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

  const handleUserChange = (event) => {
    // { name, value } = event.target

    setUserRequisites({ ...userRequisites, [name]: value });
  };

  //const [recommendation, setRecommendation] = useState<type | null>("");
  // const [calculation, setCalculation] = useState<CalculationType>({});

  // const [errors, setErrors] = useState<string[]>([]);

  return (
    <div className='flex w-full flex-row'>
      <div className='w-2/3 px-10 pb-5'>
        <SystemVisual system={system} />
      </div>
      <div className='w-1/3'>
        <SystemForm />
      </div>
    </div>
  );
}
