import Button from '@/components/ui/Button';

import RequisitesSection from './RequisitesSection';
import SystemSection from './SystemSection';

export default function SystemForm() {
  return (
    <div className='flex flex-col pb-3 px-5'>
      <div className='prose mb-10'>
        <h1>Design Your System</h1>

        <p>
          Megapack enables low-cost, high-density commercial and utility projects at large scale. It
          ships ready to install with fully integrated battery modules, inverters, and thermal
          systems. <br />
          <a>View Product Details</a>
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
