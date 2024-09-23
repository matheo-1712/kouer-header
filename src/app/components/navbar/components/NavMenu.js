// components/NavMenu.js

/* Tableau des données du menu de navigation */
const navItems = [
    { id: 1, title: 'Tous les produtis', link: '/tous-les-produits', img: '/icons/tous_les_produits.svg' },
    { id: 2, title: 'Viandes & Charcuterie', link: '/viande-et-charcuterie', img: '/icons/viandes__charcuteries.svg' },
    { id: 3, title: 'Poissons & Fruits de Mer', link: '/poissons-et-fruits-de-mer', img: '/icons/poissons__fruits_de_mer.svg' },
    { id: 4, title: 'Fruits & Légumes', link: '/fruits-et-legumes', img: '/icons/fruits__legumes.svg' },
    { id: 5, title: 'Boissons', link: '/boissons', img: '/icons/boissons__alcools.svg' },
    { id: 6, title: 'Epicerie Salée', link: '/epicerie-salée', img: '/icons/epicerie_salee.svg' },
    { id: 7, title: 'Epicerie Sucrée', link: '/epicerie-sucrée', img: '/icons/epicerie_sucree.svg' },
    { id: 8, title: 'Fromagerie & Produits laitiers', link: '/fromagerie-et-produits-laitiers', img: '/icons/laits__fromages.svg' },
    { id: 9, title: 'Plats traiteur', link: '/plats-traiteur', img: '/icons/plats_traiteur.svg' },
];

export default function NavMenu() {

    <div className="flex justify-between items-center py-2 px-6">
        <div className="container mx-auto flex justify-around">
            {navItems.map((item) => (
                <a
                    key={item.id}
                    href={item.link}
                    className="flex flex-col items-center text-center text-gray-600 hover:text-green-600"
                >
                    <img src={item.img} alt={item.title} className="h-10 w-10 mb-2" />
                    <span className="text-sm">{item.title}</span>
                    {/* Ligne verte sous l'élément actif */}
                    <div className="h-1 w-12 bg-green-500 mt-2"></div>
                </a>
            ))}
        </div>
    </div>

}