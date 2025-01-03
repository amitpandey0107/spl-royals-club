import Link from 'next/link';
import './header.css';
import Image from 'next/image';
export default function Header() {
    return (
        <header className='header'>
            <div className='header__logo'>
                <Image
                    src="/img/spl_logo.png"
                    alt='SPL Royals Logo'
                    height={100}
                    width={100}
                />
            </div>
            <nav className='header__navigation'>
                <ul className='header__menu'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/tournaments">Tournaments</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}