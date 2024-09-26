export default function NumberInput({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div className='form-control flex flex-row justify-items-center'>
      <label className='label'>{label}</label>
      <input
        className='input input-sm w-20'
        type='number'
        placeholder={placeholder}
      />
    </div>
  );
}
