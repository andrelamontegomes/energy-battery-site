import { ComponentProps } from 'react';

interface NumberInputProps extends ComponentProps<'input'> {
  label?: string;
}

export default function NumberInput({ label, value, onChange, ...props }: NumberInputProps) {
  return (
    <div className='form-control flex flex-row justify-between items-center'>
      {label && <label className='text-gray-700 font-bold'>{label}</label>}
      <input
        className='input bordered input-sm w-20 bg-gray-100'
        inputMode='numeric'
        pattern='[0-9]*'
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
