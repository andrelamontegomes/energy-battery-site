'use client';

import { Canvas } from '@react-three/fiber';

import Box from './Box';

export default function SystemGraphic() {
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full px-10 pb-5 rounded-xl bg-gray-400'>
        <div className='flex flex-row space-x-3'>
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              decay={0}
              intensity={Math.PI}
            />
            <pointLight
              position={[-10, -10, -10]}
              decay={0}
              intensity={Math.PI}
            />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}
