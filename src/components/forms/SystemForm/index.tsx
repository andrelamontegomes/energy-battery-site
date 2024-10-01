'use client';

import Button from '@/components/ui/Button';

import RequisitesSection from './RequisitesSection';
import SystemSection from './SystemSection';

export default function SystemForm() {
  return (
    <div className='h-full flex flex-col pb-3 px-10'>
      <div className='prose-sm mb-10'>
        <h1 className='font-semibold md:text-2xl'>Design Your System</h1>

        <p>
          Megapack enables low-cost, high-density commercial and utility projects at large scale.
        </p>
      </div>
      <RequisitesSection />
      <SystemSection />
      <Button
        icon
        text='Share Design'
      />
    </div>
  );
}
