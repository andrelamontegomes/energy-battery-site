export default function Home() {
  return (
    <div className='flex w-full flex-row'>
      <div className='w-2/3 px-10 pb-5'>
        <div className='h-full w-full rounded-xl bg-blue-100'></div>
      </div>
      <div className='w-1/3'>
        <div className='flex flex-col px-10 pb-3'>
          <div>
            <h1>Design Battery Site</h1>
            <p>
              Megapack enables low-cost, high-density commercial and utility projects at large
              scale. It ships ready to install with fully integrated battery modules, inverters, and
              thermal systems.
            </p>
            <p>View Product Details</p>
          </div>
          <div>
            <label>Power</label>
            <label>Energy</label>
          </div>
          <div>
            <div>
              <label>Megapack 2XL</label>
              <label>6</label>
            </div>
            <div>
              <label>Estimated Price</label>
              <label>$6</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
