import RequisitesProvider from '@/providers/RequisitesProvider';
import SystemProvider from '@/providers/SystemProvider';
import SystemGraphic from '@/components/ui/SystemGraphic';
import SystemForm from '@/components/forms/SystemForm';

export default function Home() {
  return (
    <RequisitesProvider>
      <SystemProvider>
        <div className='flex w-full flex-row'>
          <div className='w-2/3 px-10'>
            <SystemGraphic />
          </div>
          <div className='w-1/3'>
            <SystemForm />
          </div>
        </div>
      </SystemProvider>
    </RequisitesProvider>
  );
}
