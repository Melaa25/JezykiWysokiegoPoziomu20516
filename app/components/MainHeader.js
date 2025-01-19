import NavLink from './NavLink';
import Link from 'next/link';
import classes from './main-header.module.css';
import MainHeaderBackground from './MainHeaderBackground';
import logoImg from '@/assets/logo.png';
export default function MainHeader() {
  return (
    <header className={classes.header}>
        <Link className={classes.logo} href="/">
            <img src={logoImg.src} alt="A plate with food on it" />
            NextLevel Food
        </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href = "/meals">Browse Meals</NavLink> 
          </li>
          <li>
          <NavLink href = "/community">Foodies Community</NavLink> 
          </li>
        </ul>
      </nav>
    </header>
  );
}
