// NavBarMenu.js
import React from 'react';

/* Props à passer à NavBarMenu.js            
navItems={navItems}
subMenuItems={subMenuItems}
subMenuTitle={subMenuTitle}
isDropdownOpen={isDropdownOpen}
setIsDropdownOpen={setIsDropdownOpen}
activeId={activeId}
setActiveId={setActiveId}
SubMenuToggle={SubMenuToggle}
filteredSubMenu={filteredSubMenu}
*/

export default function NavBarMenu({ navItems, subMenuItems, subMenuTitle, isDropdownOpen, setIsDropdownOpen, activeId, setActiveId, SubMenuToggle, filteredSubMenu }) {
    return (
        <div className="relative">
            <div
                className="flex flex-col w-full hidden md:flex"
                onMouseLeave={() => {
                    setIsDropdownOpen(false);
                }}
            >
                {/* Menu de navigation */}
                <div className="flex justify-between items-center py-2 relative">
                    <div className="flex flex-wrap justify-between w-full">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                className={`flex flex-col items-center text-center text-gray-600 hover:text-green-600 border-b-2 border-transparent hover:border-green-600 transition-colors duration-400`}
                                style={{ flex: `1 1 calc(100% / ${navItems.length})`, minWidth: '200px' }}
                                onMouseEnter={() => {
                                    setActiveId(item.id);
                                    const hasProducts = subMenuItems.some((menuItem) => menuItem.id.startsWith(`${item.id}`));
                                    if (hasProducts) {
                                        setIsDropdownOpen(true);
                                    } else {
                                        setIsDropdownOpen(false);
                                    }
                                }}
                            >
                                <img src={item.img} alt={item.title} className="h-12 w-12 mb-0" />
                                <span className="text-lg whitespace-nowrap">{item.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {/* Sous-menu affiché juste en dessous du menu principal */}
            {isDropdownOpen && activeId && (
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-[90%] bg-white shadow-lg p-6 border rounded-md z-50 mt-0"
                    onMouseEnter={() => setIsDropdownOpen(true)} // Garde le sous-menu ouvert quand la souris sur la div du menu et du sous-menu
                    onMouseLeave={() => setIsDropdownOpen(false)} // Ferme le sous-menu quand la souris quitte la div du menu et du sous-menu
                >
                    <ul className="flex justify-start space-x-8">
                        {filteredSubMenu.map((subMenu) => (
                            <li key={subMenu.id} className="mb-4 w-full">
                                <a href={subMenu.link} className="text-gray-700 text-2xl hover:underline block mb-2">
                                    {subMenu.title}
                                </a>
                                <ul className="grid grid-cols-1 gap-2 mt-4">
                                    {subMenuItems.find((productItem) => productItem.id === subMenu.id)?.produits.map((product, index) => (
                                        <li key={product} className="text-gray-700 text-lg text-left">
                                            {product}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

