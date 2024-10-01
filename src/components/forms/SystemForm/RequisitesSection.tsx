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

  const dimensionError = totalDimension > Number(requisites.dimensions);
  const costError = totalCost > Number(requisites.budget);
  const energyError = totalEnergy > Number(requisites.energy);

  return (
    <>
      <div className='space-y-5'>
        <NumberInput
          error={dimensionError}
          name='dimensions'
          label='Land Dimension Sq Ft'
          value={requisites.dimensions}
          onChange={handleChange}
        />
        <NumberInput
          error={costError}
          name='budget'
          label='Budget $'
          value={requisites.budget}
          onChange={handleChange}
        />
        <NumberInput
          error={energyError}
          name='energy'
          label='Energy Goal MW'
          value={requisites.energy}
          onChange={handleChange}
        />
        {(dimensionError || costError || energyError) && (
          <Alert
            icon
            text='The current design does not meet your requirements'
          />
        )}
      </div>
    </>
  );
}
