'use client';

import { Canvas } from '@react-three/fiber';

import Box from './Box';
import Environment from './Environment';

export default function SystemGraphic() {
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full px-10 pb-5 rounded-xl bg-gray-100'>
        <Canvas
          shadows
          camera={{ position: [-15, 10, 15], fov: 25 }}
        >
          <color attach="background" args={['green']}/>
          <Box />
          <Environment />
        </Canvas>
      </div>
    </div>
  );
}
