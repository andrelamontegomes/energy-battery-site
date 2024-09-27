'use client';

import { useContext } from 'react';

import { numberWithCommas } from '@/lib/pipes';
import { calcTotalCost, calcTotalDimension, calcTotalEnergy } from '@/lib/system';
import { SystemContext } from '@/providers/SystemProvider';
import NumberInput from '@/components/ui/NumberInput';

export default function SystemForm() {
  const { systemConfig, handleSystemChange, userRequisites, handleRequisitesChange } =
    useContext(SystemContext);
  const totalEnergy = calcTotalEnergy(systemConfig);
  const totalCost = calcTotalCost(systemConfig);
  const totalDimension = calcTotalDimension(systemConfig);

  return (
    <div className='flex flex-col pb-3 pr-5'>
      <div className=''>
        <h1>Design Your System</h1>

        <p>
          Megapack enables low-cost, high-density commercial and utility projects at large scale. It
          ships ready to install with fully integrated battery modules, inverters, and thermal
          systems.
        </p>

        <a>View Product Details</a>
      </div>
      <div className='space-y-5'>
        <NumberInput
          name='dimensions'
          label='Land Size (sq ft)'
          value={userRequisites.dimensions}
          onChange={handleRequisitesChange}
        />
        <NumberInput
          name='budget'
          label='Budget'
          value={userRequisites.budget}
          onChange={handleRequisitesChange}
        />
        <NumberInput
          name='energy'
          label='Energy Goal'
          value={userRequisites.energy}
          onChange={handleRequisitesChange}
        />
      </div>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
          <h2>{numberWithCommas(totalEnergy)} MW</h2>
          <span>Energy</span>
        </div>
        <div className='flex flex-col'>
          <h2>{numberWithCommas(totalDimension)} sq ft</h2>
          <span>Floor Dimension</span>
        </div>
      </div>
      <div className='space-y-5'>
        <NumberInput
          name='megapack2xls'
          label='Megapack 2XL'
          value={systemConfig.megapack2xls}
          onChange={handleSystemChange}
        />
        <NumberInput
          name='megapack2s'
          label='Megapack 2'
          value={systemConfig.megapack2s}
          onChange={handleSystemChange}
        />
        <NumberInput
          name='megapacks'
          label='Megapack'
          value={systemConfig.megapacks}
          onChange={handleSystemChange}
        />
        <NumberInput
          name='powerpacks'
          label='Powerpacks'
          value={systemConfig.powerpacks}
          onChange={handleSystemChange}
        />
        <NumberInput
          disabled
          label='Transformers'
          value={systemConfig.transformers}
        />
      </div>
      <div className='flex flex-col space-y-5'>
        <div className='flex flex-row justify-between items-center'>
          <h3 className=''>Estimated Price</h3>
          <p className=''>${numberWithCommas(totalCost)}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <h3>Est Annual Maintenance</h3>
          <p>${numberWithCommas(totalCost)}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <h3>Due Today</h3>
          <p>$1,000</p>
        </div>
      </div>
    </div>
  );
}
