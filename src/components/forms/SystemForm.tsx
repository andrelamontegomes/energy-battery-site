'use client';

import { useContext } from 'react';

import { SystemContext } from '@/providers/SystemProvider';
import NumberInput from '@/components/ui/NumberInput';

export default function SystemForm() {
  const { system, setSystem, userRequisites, setUserRequisites } = useContext(SystemContext);
  const estimatedPower: number = userRequisites.dimensions * 2;
  const estimatedEnergy: number = userRequisites.energy * 5;
  const estimatedPrice: number = userRequisites.dimensions * 5;
  const estimatedMaintenance: number = userRequisites.dimensions * 5;
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
          label='Land Size (sq ft)'
          value={userRequisites.dimensions}
          onChange={(e) => setUserRequisites({ ...userRequisites, dimensions: e.target.value })}
        />
        <NumberInput
          label='Budget'
          value={userRequisites.budget}
          onChange={(e) => setUserRequisites({ ...userRequisites, budget: e.target.value })}
        />
        <NumberInput
          label='Energy needsbudget'
          value={userRequisites.energy}
          onChange={(e) => setUserRequisites({ ...userRequisites, energy: e.target.value })}
        />
      </div>
      <div className='flex flex-row justify-around'>
        <div className='flex flex-col'>
          <h2>{estimatedPower} MW</h2>
          <span>Power</span>
        </div>
        <div className='flex flex-col'>
          <h2>{estimatedEnergy} MWh</h2>
          <span>Energy</span>
        </div>
      </div>
      <div className='space-y-5'>
        <NumberInput
          label='Megapack 2XL'
          value={system.megapack2xls}
          onChange={(e) => setSystem({ ...system, megapack2xls: e.target.value })}
        />
        <NumberInput
          label='Megapack 2'
          value={system.megapack2s}
          onChange={(e) => setSystem({ ...system, megapack2s: e.target.value })}
        />
        <NumberInput
          label='Megapack'
          value={system.megapacks}
          onChange={(e) => setSystem({ ...system, megapacks: e.target.value })}
        />
        <NumberInput
          label='Powerpacks'
          value={system.powerpacks}
          onChange={(e) => setSystem({ ...system, powerpacks: e.target.value })}
        />
        <NumberInput
          disabled
          label='Transformers'
          value={system.transformers}
          onChange={(e) => setSystem({ ...system, transformers: e.target.value })}
        />
      </div>
      <div className='flex flex-col space-y-5'>
        <div className='flex flex-row justify-between items-center'>
          <h3 className=''>Estimated Price</h3>
          <p className=''>${estimatedPrice}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <h3>Est Annual Maintenance</h3>
          <p>${estimatedMaintenance}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <h3>Due Today</h3>
          <p>$1,000</p>
        </div>
      </div>
    </div>
  );
}
