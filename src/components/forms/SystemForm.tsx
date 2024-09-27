import NumberInput from '@/components/ui/NumberInput';

export default function SystemForm() {
  return (
    <div className='prose flex flex-col pb-3 pr-5'>
      <div className=''>
        <h1>Design Your System</h1>

        <p>
          Megapack enables low-cost, high-density commercial and utility projects at large scale. It
          ships ready to install with fully integrated battery modules, inverters, and thermal
          systems.
        </p>

        <a>View Product Details</a>
      </div>
      <div className='space-y-5'>
        <NumberInput
          name='userDimensions'
          label='Land Size (sq ft)'
          onChange={(event) => setUserDimensions(event.target.value)}
        />
        <NumberInput
          name='userBudget'
          label='Budget'
        />

        <NumberInput label='Energy needs' />
      </div>
      <div className='flex flex-row justify-around'>
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
        <NumberInput label='Megapack 2XL' />
        <NumberInput label='Megapack 2' />
        <NumberInput label='Megapack' />
        <NumberInput label='Powerpack' />
      </div>
      <div className='flex flex-col space-y-5'>
        <div className='flex flex-row justify-between'>
          <h3>Estimated Price</h3>
          <p>$12,000,000</p>
        </div>
        <div className='flex flex-row justify-between'>
          <h3>Est Annual Maintenance</h3>
          <p>$8,200</p>
        </div>
        <div className='flex flex-row justify-between'>
          <h3>Due Today</h3>
          <p>$1,000</p>
        </div>
      </div>
    </div>
  );
}
