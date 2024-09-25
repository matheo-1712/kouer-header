export default function FormulaireLogin() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100"
            style={{ backgroundImage: "url('https://fbnjznanxacfwrzlkhxl.supabase.co/storage/v1/object/public/category_images/all_produits.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="w-full max-w-lg p-10 bg-white rounded-lg shadow-lg">

                {/* Logo avec texte */}
                <div className="flex flex-col items-center mb-6 p-6">
                    <img src="./logo.svg" alt="Logo" width={150} height={150} />
                    <p className="mt-2 text-xl text-green-600">Content de vous voir</p>
                </div>

                {/* Formulaire de connexion */}
                <form>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-gray-300 font-bold">Adresse mail</label>
                        <input type="email" id="email" className="bg-gray-100 rounded-2xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-300" required />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="block mb-2 text-gray-300 font-bold">Mot de passe</label>
                        <input type="password" id="password" className="bg-gray-100 rounded-2xl p-2 w-full focus:outline-none focus:ring-2 focus:ring-gray-300" required />
                    </div>
                    <button type="submit" className="mt-10 bg-green-500 text-white rounded-2xl p-2 w-full hover:bg-green-600 transition duration-200">Se connecter</button>
                </form>

                {/* Lien pour s'inscrire */}
                <a href="/register">
                    <button className="border border-green-500 mt-10 bg-white text-green-500 rounded-2xl p-2 w-full hover:bg-green-600 hover:text-white transition duration-200">
                        Inscription
                    </button>

                </a>
            </div>
        </div>
    )
}