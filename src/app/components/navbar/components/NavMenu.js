"use client";

import { useState, useRef } from 'react';

/* Tableau des données du menu de navigation */
const navItems = [
    { id: 1, title: 'Tous les produits', link: '/tous-les-produits', img: '/icons/tous_les_produits.svg' },
    { id: 2, title: 'Viandes & Charcuterie', link: '/viande-et-charcuterie', img: '/icons/viandes__charcuteries.svg' },
    { id: 3, title: 'Poissons & Fruits de Mer', link: '/poissons-et-fruits-de-mer', img: '/icons/poissons__fruits_de_mer.svg' },
    { id: 4, title: 'Fruits & Légumes', link: '/fruits-et-legumes', img: '/icons/fruits__legumes.svg' },
    { id: 5, title: 'Boissons', link: '/boissons', img: '/icons/boissons__alcools.svg' },
    { id: 6, title: 'Épicerie Salée', link: '/epicerie-salee', img: '/icons/epicerie_salee.svg' },
    { id: 7, title: 'Épicerie Sucrée', link: '/epicerie-sucrée', img: '/icons/epicerie_sucree.svg' },
    { id: 8, title: 'Fromagerie & Produits laitiers', link: '/fromagerie-et-produits-laitiers', img: '/icons/laits__fromages.svg' },
    { id: 9, title: 'Plats traiteur', link: '/plats-traiteur', img: '/icons/plats_traiteur.svg' },
];

/* Tableau des données des sous-menus */
const subMenuTitle = [
    { id_item: 2, id: '2-1', title: 'Viandes', link: '/viandes' },
    { id_item: 2, id: '2-2', title: 'Charcuterie', link: '/charcuterie' },
    { id_item: 2, id: '2-3', title: 'Patés et Rillettes', link: '/pates-et-rillettes' },
    { id_item: 2, id: '2-4', title: 'Autres', link: '/autres' },
    { id_item: 3, id: '3-1', title: 'Poissons frais', link: '/poissons-frais' },
    { id_item: 3, id: '3-2', title: 'Poissons fumés', link: '/poissons-fumés' },
    { id_item: 3, id: '3-3', title: 'Fruits de Mer', link: '/fruits-de-mer' },
    { id_item: 3, id: '3-4', title: 'Autres', link: '/autres' },
    { id_item: 4, id: '4-1', title: 'Fruits', link: '/fruits' },
    { id_item: 4, id: '4-2', title: 'Légumes', link: '/legumes' },
    { id_item: 4, id: '4-3', title: 'Fruits secs', link: '/fruits-secs' },
    { id_item: 4, id: '4-4', title: 'Autres', link: '/autres' },
    { id_item: 5, id: '5-1', title: 'Boissons', link: '/boissons' },
    { id_item: 5, id: '5-2', title: 'Alcools', link: '/alcools' },
    { id_item: 5, id: '5-3', title: 'Jus de fruits', link: '/jus-de-fruits' },
    { id_item: 5, id: '5-4', title: 'Autres', link: '/autres' },
    { id_item: 6, id: '6-1', title: 'Épicerie Salée', link: '/epicerie-salee' },
    { id_item: 6, id: '6-2', title: 'Condiments', link: '/condiments' },
    { id_item: 6, id: '6-3', title: 'Conserves', link: '/conserves' },
    { id_item: 6, id: '6-4', title: 'Autres', link: '/autres' },
    { id_item: 7, id: '7-1', title: 'Épicerie Sucrée', link: '/epicerie-sucree' },
    { id_item: 7, id: '7-2', title: 'Confiseries', link: '/confiseries' },
    { id_item: 7, id: '7-3', title: 'Chocolats', link: '/chocolats' },
    { id_item: 7, id: '7-4', title: 'Autres', link: '/autres' },
    { id_item: 8, id: '8-1', title: 'Fromagerie', link: '/fromagerie' },
    { id_item: 8, id: '8-2', title: 'Produits laitiers', link: '/produits-laitiers' },
    { id_item: 9, id: '9-1', title: 'Plats', link: '/plats' },
    { id_item: 9, id: '9-2', title: 'Traiteur', link: '/traiteur' }
];

/* Tableau des données des produits */
const subMenuItems = [
    { id: '2-1', produits: ['Boeuf Angus', 'Poulet fermier', 'Côtes de porc'] },
    { id: '2-2', produits: ['Saucisson sec', 'Jambon cru', 'Rosette de Lyon'] },
    { id: '2-3', produits: ['Paté de campagne', 'Rillettes de canard', 'Paté de foie'] },
    { id: '2-4', produits: ['Saucisses diverses', 'Viandes marinées'] },
    { id: '3-1', produits: ['Saumon frais', 'Bar de ligne', 'Dorade royale'] },
    { id: '3-2', produits: ['Saumon fumé', 'Truite fumée', 'Hareng fumé'] },
    { id: '3-3', produits: ['Crevettes', 'Coquilles Saint-Jacques', 'Langoustines'] },
    { id: '3-4', produits: ['Moules', 'Crabes'] },
    { id: '4-1', produits: ['Pommes', 'Bananes', 'Oranges'] },
    { id: '4-2', produits: ['Carottes', 'Pommes de terre', 'Tomates'] },
    { id: '4-3', produits: ['Amandes', 'Noisettes', 'Raisins secs'] },
    { id: '4-4', produits: ['Légumes exotiques'] },
    { id: '5-1', produits: ['Eau minérale', 'Soda', 'Thé glacé'] },
    { id: '5-2', produits: ['Vin rouge', 'Whisky', 'Bière artisanale'] },
    { id: '5-3', produits: ['Jus d\'orange', 'Jus de pomme', 'Jus de raisin'] },
    { id: '5-4', produits: ['Boissons énergétiques'] },
    { id: '6-1', produits: ['Pâtes', 'Riz', 'Lentilles'] },
    { id: '6-2', produits: ['Moutarde', 'Ketchup', 'Vinaigre balsamique'] },
    { id: '6-3', produits: ['Maïs en conserve', 'Haricots verts en boîte'] },
    { id: '6-4', produits: ['Épices variées'] },
    { id: '7-1', produits: ['Biscuits', 'Miel', 'Confiture'] },
    { id: '7-2', produits: ['Bonbons', 'Sucettes'] },
    { id: '7-3', produits: ['Chocolat noir', 'Chocolat au lait', 'Pralines'] },
    { id: '7-4', produits: ['Cakes', 'Gâteaux secs'] },
    { id: '8-1', produits: ['Brie', 'Camembert', 'Roquefort'] },
    { id: '8-2', produits: ['Lait frais', 'Yaourts', 'Crème fraîche'] },
    { id: '9-1', produits: ['Lasagnes', 'Quiche lorraine', 'Gratin dauphinois'] },
    { id: '9-2', produits: ['Salades composées', 'Terrines', 'Plateaux de fruits de mer'] }
];

export default function NavMenu() {
    const [activeId, setActiveId] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const submenuRef = useRef(null);
    const menuRef = useRef(null);

    const filteredSubMenu = subMenuTitle.filter(item => item.id_item === activeId);

    return (
        <div className="relative">
            {/* Menu de navigation et Sous-menu dans la même div */}
            <div
                ref={menuRef}
                className="flex flex-col w-full"
                onMouseLeave={() => {
                    setIsDropdownOpen(false); // Ferme le sous-menu quand la souris quitte le menu principal
                }}
            >
                {/* Menu de navigation */}
                <div className="flex justify-between items-center py-2 relative">
                    <div className="flex flex-wrap justify-between w-full">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                className={`flex flex-col items-center text-center text-gray-600 border-b-2 border-transparent hover:border-green-600 hover:text-green-600 transition-all duration-400`}
                                style={{ flex: '1 1 calc(100% / 9)', minWidth: '200px' }} // Ajustez le calc() selon le nombre d'éléments par ligne
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
                    ref={submenuRef}
                    className="absolute left-1/2 transform -translate-x-1/2 w-[90%] bg-white shadow-lg p-6 border rounded-md z-50 mt-0"
                    onMouseEnter={() => setIsDropdownOpen(true)} // Garde le sous-menu ouvert quand la souris est sur le sous-menu
                    onMouseLeave={() => setIsDropdownOpen(false)} // Ferme le sous-menu quand la souris quitte
                >
                    <ul className="flex justify-start space-x-8">
                        {filteredSubMenu.map((subMenu) => (
                            <li key={subMenu.id} className="mb-4 w-full">
                                <a href={subMenu.link} className="text-gray-700 text-2xl hover:underline block mb-2">
                                    {subMenu.title}
                                </a>

                                <ul className="grid grid-cols-1 gap-2 mt-4">
                                    {subMenuItems.find((productItem) => productItem.id === subMenu.id)?.produits.map((product, index) => (
                                        <li key={index} className="text-gray-700 text-lg text-left">
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
}
