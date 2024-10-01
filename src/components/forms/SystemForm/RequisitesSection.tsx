'use client';

import { useContext } from 'react';

import { calcTotalCost, calcTotalDimension, calcTotalEnergy } from '@/lib/system';
import { RequisitesContext } from '@/providers/RequisitesProvider';
import { SystemContext } from '@/providers/SystemProvider';
import Alert from '@/components/ui/Alert';
import Card from '@/components/ui/Card';
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

  const handleOptimize = (e: MouseEventHandler<HTMLButtonElement>) => {
    console.log(e.target.name);
  };

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
      <div className='w-full flex flex-col space-y-2 mt-5'>
        <Card
          name='optimizeLand'
          onClick={handleOptimize}
          text='Optimize Land'
        />
        <Card
          name='optimizeBudget'
          onClick={handleOptimize}
          text='Optimize Budget'
        />
        <Card
          name='optimizeEnergy'
          onClick={handleOptimize}
          text='Optimize Energy Goal'
        />
      </div>
    </>
  );
}
