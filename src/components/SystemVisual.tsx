'use client';

import { useContext } from 'react';

import { SystemContext } from '@/providers/SystemProvider';

export default function SystemVisual() {
  const { system } = useContext(SystemContext);
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full px-10 pb-5 rounded-xl bg-blue-100'>
        {Array.from({ length: system.megapack2xls }, (_, i) => (
          <div
            className='w-20 h-20 rounded-full bg-red-300'
            key={i}
          ></div>
        ))}
      </div>
    </div>
  );
}
