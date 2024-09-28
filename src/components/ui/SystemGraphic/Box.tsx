'use client';

import { useContext } from 'react';

import { SystemContext } from '@/providers/SystemProvider';

export default function Box() {
  const { system } = useContext(SystemContext);

  return (
    <>
      {Array.from({ length: system.megapack2xls }, (_, i) => (
        <div
          className='w-40 h-10 rounded bg-red-300'
          key={i}
        ></div>
      ))}
      {Array.from({ length: system.megapack2s }, (_, i) => (
        <div
          className='w-20 h-10 rounded bg-yellow-300'
          key={i}
        ></div>
      ))}
      {Array.from({ length: system.megapacks }, (_, i) => (
        <div
          className='w-20 h-10 rounded bg-blue-300'
          key={i}
        ></div>
      ))}
      {Array.from({ length: system.powerpacks }, (_, i) => (
        <div
          className='w-10 h-10 rounded bg-green-300'
          key={i}
        ></div>
      ))}
      {Array.from({ length: system.transformers }, (_, i) => (
        <div
          className='w-10 h-10 rounded bg-black'
          key={i}
        ></div>
      ))}
    </>
  );
}
