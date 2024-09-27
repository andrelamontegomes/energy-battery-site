type DeviceType = 'megapack2xls' | 'megapack2s' | 'megapacks' | 'powerpacks' | 'transformers';

export const ENERGY: { [key in DeviceType]: string } = {
  megapack2xls: '4',
  megapack2s: '3',
  megapacks: '2',
  powerpacks: '1',
  transformers: '-0.25',
};

export const COST: { [key in DeviceType]: string } = {
  megapack2xls: '120000',
  megapack2s: '80000',
  megapacks: '50000',
  powerpacks: '20000',
  transformers: '10000',
};

// Dimension is only including width
// as all devices have same length of 10ft
// i.e. Megapack is 400sq ft from 40ft x 10ft
export const DIMENSION: { [key in DeviceType]: string } = {
  megapack2xls: '40',
  megapack2s: '30',
  megapacks: '30',
  powerpacks: '10',
  transformers: '10',
};
