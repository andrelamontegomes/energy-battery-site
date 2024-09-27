'use client';

import { useContext } from 'react';

import { SystemContext } from '@/providers/SystemProvider';

export default function SystemVisual() {
  const { systemConfig } = useContext(SystemContext);
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full px-10 pb-5 rounded-xl bg-gray-400'>
        <div className='flex flex-row space-x-3'>
          {Array.from({ length: systemConfig.megapack2xls }, (_, i) => (
            <div
              className='w-40 h-10 rounded bg-red-300'
              key={i}
            ></div>
          ))}
          {Array.from({ length: systemConfig.megapack2s }, (_, i) => (
            <div
              className='w-20 h-10 rounded bg-yellow-300'
              key={i}
            ></div>
          ))}
          {Array.from({ length: systemConfig.megapacks }, (_, i) => (
            <div
              className='w-20 h-10 rounded bg-blue-300'
              key={i}
            ></div>
          ))}
          {Array.from({ length: systemConfig.powerpacks }, (_, i) => (
            <div
              className='w-10 h-10 rounded bg-green-300'
              key={i}
            ></div>
          ))}
          {Array.from({ length: systemConfig.transformers }, (_, i) => (
            <div
              className='w-10 h-10 rounded bg-black'
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
