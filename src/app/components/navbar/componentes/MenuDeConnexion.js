
export default function MenuDeConnexion() {

    return (
        <div className="relative inline-block text-left">
            {/* Bouton de connexion */}
            <div
                className="flex items-center space-x-2 cursor-pointer transition-opacity hover:opacity-75"
            >
                {/* Icône utilisateur */}
                <img src="/icons/user.svg" alt="Utilisateur" className="h-6 w-6 md:h-8 md:w-8" />

                {/* Texte et chevron */}
                <div className="hidden md:flex flex-col items-start">
                    <div className="flex items-center space-x-2">
                        <div>
                            <p className="text-green-600 text-xl font-bold transition-all duration-400">Identifiez-vous</p>
                            <p className="text-gray-600 transition-all duration-400">Compte et commandes</p>
                        </div>
                        <img src="/icons/chevron_down.svg" alt="Chevron" className="h-6 w-6 md:h-8 md:w-8" />
                    </div>
                </div>
            </div>

            {/* Sous-menu de connexion */}
            <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                <div className="py-1">
                    <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Se connecter</a>
                    <a href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">S'inscrire</a>
                </div>
            </div>

        </div>
    );
};
