'use client';

import { useContext, useEffect } from 'react';

import { Canvas } from '@react-three/fiber';

import { SystemContext } from '@/providers/SystemProvider';
import Megapack from '@/components/ui/models/Megapack';
import Powerpack from '@/components/ui/models/Powerpack';
import Transformer from '@/components/ui/models/Transformer';

import Environment from './Environment';

export default function SystemCanvas() {
  const { system } = useContext(SystemContext);
  let objects = [];

  useEffect(() => {
    console.log(system);
  }, [system]);

  return (
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
  );
}
