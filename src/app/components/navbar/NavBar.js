// components/NavBar.js

import NavMenu from './components/NavMenu';
import NavHeader from './components/NavHeader';

export default function Navbar() {

    return (
        <nav className="flex flex-col p-0 m-0">
            {/* Header de la navbar */}
            <NavHeader />

            {/* Menu de navigation */}
            <NavMenu />
        </nav>
    );
}

