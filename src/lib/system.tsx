import type { SystemConfig } from '@/types';

import { COST, DIMENSION, ENERGY } from '@/data/devices';

export function calcTotalEnergy(system: SystemConfig): number {
  return Object.entries(system).reduce(
    (acc, [key, val]) => acc + Number(val) * Number(ENERGY[key]),
    0
  );
}

export function calcTotalCost(system: SystemConfig): number {
  return Object.entries(system).reduce(
    (acc, [key, val]) => acc + Number(val) * Number(COST[key]),
    0
  );
}

export function calcTotalDimension(system: SystemConfig): number {
  return Object.entries(system).reduce(
    (acc, [key, val]) => acc + Number(val) * Number(DIMENSION[key]),
    0
  );
}
