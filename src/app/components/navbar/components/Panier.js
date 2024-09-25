// components/Panier.js
import { useEffect, useState } from 'react';

export default function Panier() {
    const [cart, setCart] = useState([]); // État pour stocker les articles du panier
    const [itemCount, setItemCount] = useState(0); // État pour le nombre d'articles
    const [totalPrice, setTotalPrice] = useState(0); // État pour le prix total

    useEffect(() => {
        // Fonction pour récupérer le panier du localStorage
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            const cartItems = JSON.parse(savedCart);
            setCart(cartItems); // Mettre à jour l'état du panier avec les articles récupérés
        }
    }, []);

    useEffect(() => {
        // Calculer le nombre d'articles et le prix total
        const count = cart.length;
        const price = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

        setItemCount(count);
        setTotalPrice(price);
    }, [cart]); /* Cette fonction s'exécute chaque fois que le panier change */

    return (
        /* Panier */
        <div id='Panier'>
            {/* Lien pour accéder au panier */}
            <a href="/panier" className="relative flex items-center space-x-1 transition-opacity hover:opacity-75">
                <div className="relative flex items-center">
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
    );
}
