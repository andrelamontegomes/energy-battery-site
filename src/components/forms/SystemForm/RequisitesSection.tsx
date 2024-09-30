'use client';

import { useContext } from 'react';

import { calcTotalCost, calcTotalDimension, calcTotalEnergy } from '@/lib/system';
import { RequisitesContext } from '@/providers/RequisitesProvider';
import { SystemContext } from '@/providers/SystemProvider';
import Alert from '@/components/ui/Alert';
import NumberInput from '@/components/ui/NumberInput';

export default function RequisitesSection() {
  const { requisites, handleChange } = useContext(RequisitesContext);
  const { system } = useContext(SystemContext);
  const totalEnergy = calcTotalEnergy(system);
  const totalCost = calcTotalCost(system);
  const totalDimension = calcTotalDimension(system);

  return (
    <>
      <Alert
        icon
        text='Error in form'
      />
      <div className='space-y-5'>
        <NumberInput
          error={totalDimension > Number(requisites.dimensions) && 'System has a larger footprint'}
          name='dimensions'
          label='Land Dimension (Sq Ft)'
          value={requisites.dimensions}
          onChange={handleChange}
        />
        <NumberInput
          error={totalCost > Number(requisites.budget)}
          name='budget'
          label='Budget ($)'
          value={requisites.budget}
          onChange={handleChange}
        />
        <NumberInput
          error={totalEnergy > Number(requisites.energy)}
          name='energy'
          label='Energy Goal (MW)'
          value={requisites.energy}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
