'use client';

import { useContext, useEffect } from 'react';

import { SystemConfig } from '@/types';
import { Canvas } from '@react-three/fiber';

import { SystemContext } from '@/providers/SystemProvider';
import Megapack from '@/components/ui/models/Megapack';
import Powerpack from '@/components/ui/models/Powerpack';
import Transformer from '@/components/ui/models/Transformer';

import Environment from './Environment';

function constructSystem(system: SystemConfig) {
  return [
    [<Megapack />, <Megapack />, <Megapack />, <Transformer />],
    [<Megapack />, <Megapack />, <Megapack />, <Transformer />],
    [<Megapack />, <Megapack />, <Megapack />, <Transformer />],
    [<Powerpack />],
  ];
}

function postioning() {
  return [];
}

export default function SystemCanvas() {
  const { system } = useContext(SystemContext);
  const systemLayout = constructSystem(system);

  return (
    <Canvas
      shadows
      camera={{ position: [-25, 20, 25], fov: 25 }}
    >
      <Megapack position={[0, 0, 0]} />
      <Megapack position={[3.1, 0, 0]} />
      <Megapack position={[6.2, 0, 0]} />
      <Powerpack position={[8.3, 0, 0]} />
      <Megapack position={[0, 0, 1.1]} />
      <Megapack position={[3, 0, 1.1]} />
      <Megapack position={[6, 0, 1.1]} />
      <Powerpack position={[8, 0, 1.1]} />
      <Transformer position={[-2, 0, 0]} />
      <Environment />
    </Canvas>
  );
}
