import Image from 'next/image';
export default function Header() {
  return (
    <header className='navbar'>
      <Image
        className='ml-5'
        width={140}
        height={20}
        src='logo.svg'
        alt='Tesla Logo'
      />
    </header>
  );
}
