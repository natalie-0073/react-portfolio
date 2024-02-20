import './Header.css';
import { NavLink } from 'react-router-dom';

function Header(){
    return(
        <header className='header'>
            <h3 className='header-initials accent underlined'><NavLink to='/' className='header-initials__link'>NC.</NavLink></h3>
        <nav>
<ul className="nav__list">
    <li className="nav__list-item"><NavLink to='projects' className='nav__list-link underlined'>projects</NavLink></li>
    <li className="nav__list-item"><NavLink to='skills' className='nav__list-link underlined'>skills</NavLink></li>
    <li className="nav__list-item"><NavLink to='contact' className='nav__list-link underlined'>contact</NavLink></li>
</ul>
        </nav>
        </header>
    );
    }
    export default Header;