// components/NavBar.js
import NavMenu from './components/NavMenu';
import NavHeader from './components/NavHeader';

export default function Navbar() {

    return (
            <nav className="container mx-auto flex flex-col">
                {/* Header de la navbar */}
                    <NavHeader />

                {/* Menu de navigation */}
                    <NavMenu />
            </nav>
    );
}

    