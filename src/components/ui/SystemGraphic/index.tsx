import Box from './Box';

export default function SystemGraphic() {
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full px-10 pb-5 rounded-xl bg-gray-400'>
        <div className='flex flex-row space-x-3'>
          <Box />
        </div>
      </div>
    </div>
  );
}
