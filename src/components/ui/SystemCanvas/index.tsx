'use client';

import { useContext } from 'react';

import { SystemConfig } from '@/types';
import { Canvas } from '@react-three/fiber';

import { SystemContext } from '@/providers/SystemProvider';
import Megapack from '@/components/ui/models/Megapack';
import Powerpack from '@/components/ui/models/Powerpack';
import Transformer from '@/components/ui/models/Transformer';

import Environment from './Environment';

function constructSystem(system: SystemConfig) {
  let currentX: number = 0;
  let currentY: number = 0;
  const layout = [];
  let totalDevices = Object.values(system).reduce((acc, val) => Number(acc) + Number(val));
  const systemMap = new Map(Object.entries(system));

  while (totalDevices > 0) {
    if (currentX > 10) {
      currentX = 0;
      currentY += 1.1;
    }

    if (systemMap.get('megapack2xls') > 0) {
      layout.push(['megapack2xls', currentX, currentY]);
      systemMap.set('megapack2xls', systemMap.get('megapack2xls') - 1);
      currentX += 3;
    } else if (systemMap.get('megapack2s') > 0) {
      layout.push(['megapack2s', currentX, currentY]);
      systemMap.set('megapack2s', systemMap.get('megapack2s') - 1);
      currentX += 2;
    } else if (systemMap.get('megapacks') > 0) {
      layout.push(['megapacks', currentX, currentY]);
      systemMap.set('megapacks', systemMap.get('megapacks') - 1);
      currentX += 2;
    } else if (systemMap.get('powerpacks') > 0) {
      layout.push(['powerpacks', currentX, currentY]);
      systemMap.set('powerpacks', systemMap.get('powerpacks') - 1);
      currentX += 1;
    } else if (systemMap.get('transformers') > 0) {
      layout.push(['transformers', currentX, currentY]);
      systemMap.set('transformers', systemMap.get('transformers') - 1);
      currentX += 1;
    }
    totalDevices -= 1;
  }

  return layout;
}

export default function SystemCanvas() {
  const { system } = useContext(SystemContext);
  const systemLayout = constructSystem(system);

  return (
    <Canvas
      shadows
      camera={{ position: [-25, 20, 25], fov: 25 }}
    >
      {systemLayout.map((model) => {
        switch (model[0]) {
          case 'megapack2xls':
            return <Megapack position={[model[1], 0, model[2]]} />;
            break;
          case 'megapack2s':
            return <Megapack position={[model[1], 0, model[2]]} />;
            break;
          case 'megapacks':
            return <Megapack position={[model[1], 0, model[2]]} />;
            break;
          case 'powerpacks':
            return <Powerpack position={[model[1], 0, model[2]]} />;
            break;
          case 'transformers':
            return <Transformer position={[model[1], 0, model[2]]} />;
            break;
        }
      })}
      <Environment />
    </Canvas>
  );
}
