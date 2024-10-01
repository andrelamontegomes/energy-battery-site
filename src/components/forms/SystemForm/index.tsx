'use client';

import Button from '@/components/ui/Button';

import RequisitesSection from './RequisitesSection';
import SystemSection from './SystemSection';

export default function SystemForm() {
  return (
    <div className='h-screen flex flex-col pb-3 px-10'>
      <div className='prose mb-8'>
        <h1 className='font-semibold'>Design Your System</h1>

        <p>
          Megapack enables low-cost, high-density commercial and utility projects at large scale. It ships ready to install with fully integrated battery modules, inverters, and thermal systems.
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
