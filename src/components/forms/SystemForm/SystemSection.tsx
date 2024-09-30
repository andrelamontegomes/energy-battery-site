'use client';

import { useContext } from 'react';

import { numberWithCommas } from '@/lib/pipes';
import { calcTotalCost, calcTotalDimension, calcTotalEnergy } from '@/lib/system';
import { SystemContext } from '@/providers/SystemProvider';
import NumberInput from '@/components/ui/NumberInput';

export default function SystemSection() {
  const { system, handleChange } = useContext(SystemContext);
  const totalEnergy = calcTotalEnergy(system);
  const totalCost = calcTotalCost(system);
  const totalDimension = calcTotalDimension(system);

  return (
    <>
      <div className='flex flex-row justify-around py-10'>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-medium'>{numberWithCommas(totalEnergy)} MW</h2>
          <span className='font-bold text-gray-400'>Energy</span>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-medium'>{numberWithCommas(totalDimension)} sq ft</h2>
          <span className='font-bold text-gray-400'>Sq Ft</span>
        </div>
      </div>
      <div className='space-y-5'>
        <NumberInput
          name='megapack2xls'
          label='Megapack 2XL'
          value={system.megapack2xls}
          onChange={handleChange}
        />
        <NumberInput
          name='megapack2s'
          label='Megapack 2'
          value={system.megapack2s}
          onChange={handleChange}
        />
        <NumberInput
          name='megapacks'
          label='Megapack'
          value={system.megapacks}
          onChange={handleChange}
        />
        <NumberInput
          name='powerpacks'
          label='Powerpacks'
          value={system.powerpacks}
          onChange={handleChange}
        />
        <NumberInput
          disabled
          label='Transformers'
          value={system.transformers}
        />
      </div>
      <div className='flex flex-col space-y-5 py-10 text-gray-500 font-bold'>
        <div className='flex flex-row justify-between items-center'>
          <h3>Estimated Price</h3>
          <p>${numberWithCommas(totalCost)}</p>
        </div>
        <div className='flex flex-row justify-between text-gray-700 text-xl'>
          <h3>Due Today</h3>
          <p>$1,000</p>
        </div>
      </div>
    </>
  );
}
