'use client';

import { useContext } from 'react';

import { RequisitesContext } from '@/providers/RequisitesProvider';
import NumberInput from '@/components/ui/NumberInput';

export default function RequisitesSection() {
  const { requisites, handleChange } = useContext(RequisitesContext);

  return (
    <div className='space-y-5'>
      <NumberInput
        name='dimensions'
        label='Land Dimension (Sq Ft)'
        value={requisites.dimensions}
        onChange={handleChange}
      />
      <NumberInput
        name='budget'
        label='Budget ($)'
        value={requisites.budget}
        onChange={handleChange}
      />
      <NumberInput
        name='energy'
        label='Energy Goal (MW)'
        value={requisites.energy}
        onChange={handleChange}
      />
    </div>
  );
}
