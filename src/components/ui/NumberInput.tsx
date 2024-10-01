import { ComponentProps } from 'react';

interface NumberInputProps extends ComponentProps<'input'> {
  label?: string;
  error?: boolean;
  dotStyle?: string;
}

export default function NumberInput({
  dotStyle,
  error,
  label,
  value,
  onChange,
  ...props
}: NumberInputProps) {
  return (
    <div className='form-control flex flex-row justify-between items-center'>
      {label && (
        <label className='flex flex-row items-center text-gray-700 font-bold md:text-sm'>
          {dotStyle && (
            <div className={'mr-4 w-5 h-5 rounded-full border shadow-md ' + dotStyle}></div>
          )}
          {label}
        </label>
      )}
      <input
        className={
          'input bordered text-right input-sm md:input-xs w-20 md:w-16 p-2 bg-gray-100' +
          (error ? ' bg-red-200' : '')
        }
        inputMode='numeric'
        pattern='[0-9]*'
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
