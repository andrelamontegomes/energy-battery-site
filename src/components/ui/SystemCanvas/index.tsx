'use client';

import { useContext } from 'react';

import { SystemConfig } from '@/types';
import { Canvas } from '@react-three/fiber';

import { SystemContext } from '@/providers/SystemProvider';
import Megapack from '@/components/ui/models/Megapack';
import Megapack2 from '@/components/ui/models/Megapack2';
import Megapack2xl from '@/components/ui/models/Megapack2xl';
import Powerpack from '@/components/ui/models/Powerpack';
import Transformer from '@/components/ui/models/Transformer';

import Environment from './Environment';

const INITAL_X = -4;
const INITAL_Y = -6;

function constructSystem(system: SystemConfig) {
  const systemMap = new Map(Object.entries(system));
  const layout = [];
  let currentX = INITAL_X;
  let currentY = INITAL_Y;
  let totalDevices: number = Object.values(system).reduce((acc, val) => Number(acc) + Number(val));

  while (totalDevices > 0) {
    const prevLayout = layout.length;

    if (Number(systemMap.get('megapack2xls')) > 0 && currentX < INITAL_X + 8) {
      layout.push(['megapack2xls', currentX, currentY]);
      systemMap.set('megapack2xls', Number(systemMap.get('megapack2xls')) - 1);
      currentX += 3;
    } else if (Number(systemMap.get('megapack2s')) > 0 && currentX < INITAL_X + 9) {
      layout.push(['megapack2s', currentX, currentY]);
      systemMap.set('megapack2s', Number(systemMap.get('megapack2s')) - 1);
      currentX += 2;
    } else if (Number(systemMap.get('megapacks')) > 0 && currentX < INITAL_X + 9) {
      layout.push(['megapacks', currentX, currentY]);
      systemMap.set('megapacks', Number(systemMap.get('megapacks')) - 1);
      currentX += 2;
    } else if (Number(systemMap.get('powerpacks')) > 0 && currentX < INITAL_X + 10) {
      layout.push(['powerpacks', currentX, currentY]);
      systemMap.set('powerpacks', Number(systemMap.get('powerpacks')) - 1);
      currentX += 1;
    } else if (Number(systemMap.get('transformers')) > 0 && currentX < INITAL_X + 10) {
      layout.push(['transformers', currentX, currentY]);
      systemMap.set('transformers', Number(systemMap.get('transformers')) - 1);
      currentX += 1;
    }

    if (prevLayout === layout.length) {
      currentX = INITAL_X;
      currentY += 1.5;
    } else {
      totalDevices -= 1;
    }
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
      {systemLayout.map((model, index) => {
        switch (model[0]) {
          case 'megapack2xls':
            return (
              <Megapack2xl
                key={index}
                position={[model[1], 0, model[2]]}
              />
            );
            break;
          case 'megapack2s':
            return (
              <Megapack2
                key={index}
                position={[model[1], 0, model[2]]}
              />
            );
            break;
          case 'megapacks':
            return (
              <Megapack
                key={index}
                position={[model[1], 0, model[2]]}
              />
            );
            break;
          case 'powerpacks':
            return (
              <Powerpack
                key={index}
                position={[model[1], 0, model[2]]}
              />
            );
            break;
          case 'transformers':
            return (
              <Transformer
                key={index}
                position={[model[1], 0, model[2]]}
              />
            );
            break;
        }
      })}
      <Environment />
    </Canvas>
  );
}
