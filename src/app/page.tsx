import RequisitesProvider from '@/providers/RequisitesProvider';
import SystemProvider from '@/providers/SystemProvider';
import SystemCanvas from '@/components/ui/SystemCanvas';
import SystemForm from '@/components/forms/SystemForm';

export default function Home() {
  return (
    <RequisitesProvider>
      <SystemProvider>
        <div className='flex w-full flex-row'>
          <div className='w-2/3 px-10'>
            <div className='h-full w-full rounded-xl bg-gray-100'>
              <SystemCanvas />
            </div>
          </div>
          <div className='w-1/3'>
            <SystemForm />
          </div>
        </div>
      </SystemProvider>
    </RequisitesProvider>
  );
}
