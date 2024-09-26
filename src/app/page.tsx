'use client';

import { useState } from 'react';

import NumberInput from '@/components/NumberInput';

export default function Home() {
  // User input
  const [userDimensions, setUserDimensions] = useState<string>('100');
  const [userBudget, setUserBudget] = useState<string>('100');
  const [userEnergyNeeds, setUserEnergyNeeds] = useState<string>('100');

  // Battery Options
  const [megapack2xls, setMegapack2xls] = useState<string>('5');
  const [megapack2s, setMegapack2s] = useState<string>('5');
  const [megapacks, setMegapacks] = useState<string>('5');
  const [powerpacks, setPowerpacks] = useState<string>('5');
  const [transformers, setTransformers] = useState<string>('5');

  //const [recommendation, setRecommendation] = useState<type | null>("");
  // const [calculation, setCalculation] = useState<CalculationType>({});

  const [errors, setErrors] = useState<string[]>([]);

  return (
    <div className='flex w-full flex-row'>
      <div className='w-2/3 px-10 pb-5'>
        <div className='h-full w-full rounded-xl bg-blue-100'></div>
      </div>
      <div className='w-1/3'>
        <div className='flex flex-col pb-3 pr-5'>
          <div className='prose'>
            <h1>Desgn Your System</h1>

            <p>
              Megapack enables low-cost, high-density commercial and utility projects at large
              scale. It ships ready to install with fully integrated battery modules, inverters, and
              thermal systems.
            </p>

            <a>View Product Details</a>
          </div>
          <div className='space-y-5'>
            <NumberInput
              label='Land Size (sq ft)'
              value={userDimensions}
              onChange={setUserDimensions}
            />

            <NumberInput
              label='Budget'
              value={userBudget}
            />

            <NumberInput
              label='Energy needs'
              value={userBudget}
            />
          </div>
          <div className='prose flex flex-row justify-around'>
            <div className='flex flex-col'>
              <h2>25.1MW</h2>
              <span>Power</span>
            </div>
            <div className='flex flex-col'>
              <h2>38.3MWh</h2>
              <span>Energy</span>
            </div>
          </div>
          <div className='space-y-5'>
            <NumberInput
              label='Megapack 2XL'
              value={userBudget}
            />
            <NumberInput
              label='Megapack 2'
              value={userBudget}
            />
            <NumberInput
              label='Megapack'
              value={userBudget}
            />
            <NumberInput
              label='Powerpack'
              value={userBudget}
            />
          </div>
          <div className='flex flex-col space-y-5'>
            <div className='flex flex-row'>
              <h3>Estimated Price</h3>
              <p>$12,000,000</p>
            </div>
            <div className='flex flex-row'>
              <h3>Est Annual Maintenance</h3>
              <p>$8,200</p>
            </div>
            <div className='flex flex-row'>
              <h3>Due Today</h3>
              <p>$1,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
