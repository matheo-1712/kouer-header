
export default function Panier() {

    // Données par défaut du panier
    const itemCount = 2;

    // Données par défaut du prix du panier
    const totalPrice = 25.99;


    return (
        <div id='Panier'>
            <a href="/" className="relative flex items-center space-x-1 transition-opacity hover:opacity-75">
                <div className="relative flex items-center ">
                    <img src="/icons/panier.svg" alt="Panier" className="h-6 md:h-8 w-6 md:w-8" />
                    {itemCount > 0 && (
                        <span className="absolute -top-2 -right-2 flex items-center justify-center h-6 w-6 bg-green-600 text-white rounded-full text-sm">
                            {itemCount}
                        </span>
                    )}
                </div>
                <span className='p-3 text-green-600'>{totalPrice}€</span>
            </a>
        </div>
    )
}