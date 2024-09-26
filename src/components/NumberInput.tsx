interface NumberInputProps {
  label?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function NumberInput({ label, value, onChange }: NumberInputProps) {
  return (
    <div className='form-control flex flex-row justify-items-center'>
      {label && <label className='label'>{label}</label>}
      <input
        className='input input-sm w-20'
        inputMode='numeric'
        pattern='[0-9]*'
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
