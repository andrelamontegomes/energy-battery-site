import SystemProvider from '@/providers/SystemProvider';
import SystemForm from '@/components/forms/SystemForm';
import SystemVisual from '@/components/SystemVisual';

export default function Home() {
  return (
    <div className='flex w-full flex-row'>
      <SystemProvider>
        <div className='w-2/3'>
          <SystemVisual />
        </div>
        <div className='w-1/3'>
          <SystemForm />
        </div>
      </SystemProvider>
    </div>
  );
}
