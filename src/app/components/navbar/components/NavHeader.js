// components/NavHeader.js

export default function NavHeader() {
    return (
        <div className="flex justify-between items-center py-4 px-6">
            <div className="flex items-center">
                {/* Logo */}
                <a href="/">
                    <img src="/logo.svg" alt="Kouer" className="h-10" />
                </a>
            </div>

            {/* Barre de recherche */}
            <div className="flex-1 px-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Quel produit recherchez-vous ?"
                        className="w-full border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button className="absolute right-2 top-2" aria-label="Rechercher">
                        <img src="/icons/search.svg" alt="Rechercher" className="h-5 w-5 text-green-600" />
                    </button>
                </div>
            </div>

            {/* Icons (Identifiez-vous, Panier, etc.) */}
            <div className="flex items-center space-x-6">
                <a href="/" className="flex items-center space-x-2">
                    <img src="/icons/authentification.svg" alt="Identifiez-vous" className="h-6" />
                    <span className="text-sm text-gray-600">Identifiez-vous</span>
                </a>
                <a href="/" className="relative">
                    <img src="/icons/favoris.svg" alt="Favoris" className="h-6" />
                </a>
                <a href="/" className="relative flex items-center space-x-1">
                    <img src="/icons/panier.svg" alt="Panier" className="h-6" />
                    <span className="text-sm text-gray-600">3</span>
                </a>
            </div>
        </div>
    );
}

