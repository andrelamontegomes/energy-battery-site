import { useState } from 'react';

import NumberInput from '@/components/NumberInput';

export default function Home() {
  const [userLandSize, setUserLandSize] = useState(100);
  const handleChange = () => {};

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
              placeholder='100'
            />

            <NumberInput
              label='Budget'
              placeholder='100'
            />

            <NumberInput
              label='Energy needs'
              placeholder='100'
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
              placeholder='100'
            />
            <NumberInput
              label='Megapack 2'
              placeholder='100'
            />
            <NumberInput
              label='Megapack'
              placeholder='100'
            />
            <NumberInput
              label='Powerpack'
              placeholder='100'
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
