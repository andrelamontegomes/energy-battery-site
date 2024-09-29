'use client';

import { Canvas } from '@react-three/fiber';

import Megapack from '@/components/ui/models/Megapack';
import Powerpack from '@/components/ui/models/Powerpack';
import Transformer from '@/components/ui/models/Transformer';

import Environment from './Environment';

export default function SystemGraphic() {
  return (
    <div className='h-full w-full'>
      <div className='h-full w-full px-10 pb-5 rounded-xl bg-gray-100'>
        <Canvas
          shadows
          camera={{ position: [-15, 10, 15], fov: 25 }}
        >
          <color
            attach='background'
            args={['green']}
          />
          <Megapack />
          <Powerpack position={[5, 0, 0]} />
          <Transformer position={[0, 0, 5]} />
          <Environment />
        </Canvas>
      </div>
    </div>
  );
}
