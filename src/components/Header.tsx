import Image from 'next/image';
export default function Header() {
  return (
    <header className='navbar'>
      <Image width='140' height='40' src='logo.svg' alt='Tesla Logo' />
    </header>
  );
}
