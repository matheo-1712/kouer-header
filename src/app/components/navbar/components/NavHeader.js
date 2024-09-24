// components/NavHeader.js

export default function NavHeader() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 mt-6">
            {/* Logo */}
            <div className="flex items-center mb-4 md:mb-0">
                <a href="/">
                    <img src="/logo.svg" alt="Kouer" className="h-10" />
                </a>
            </div>

            {/* Barre de recherche */}
            <div className="flex-grow w-full max-w-xs md:max-w-md lg:max-w-lg px-2 md:px-0">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Quel produit recherchez-vous ?"
                        className="w-full border rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="absolute right-2 top-2" aria-label="Rechercher">
                        <img src="/icons/search.svg" alt="Rechercher" className="h-5 w-5 text-green-600" />
                    </button>
                </div>
            </div>

            {/* Icons (Identifiez-vous, Panier, etc.) */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <a href="/" className="flex items-center space-x-2">
                    <img src="/icons/authentification.svg" alt="Identifiez-vous" className="h-12 w-12" /> 
                    <span className="text-sm text-gray-600">Identifiez-vous</span>
                    <img src="/icons/barre.svg" alt="Dérouler" className="h-5 w-5" /> 
                </a>
                <a href="/" className="relative">
                    <img src="/icons/favoris.svg" alt="Favoris" className="h-8 w-8" />
                </a>
                <a href="/" className="relative flex items-center space-x-1">
                    <img src="/icons/panier.svg" alt="Panier" className="h-8 w-8" />
                    <span className="text-sm text-gray-600">3</span>
                </a>
            </div>
        </div>    
    );
}
