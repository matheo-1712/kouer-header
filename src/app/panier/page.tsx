'use client';
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
        const price = parseFloat(cart.reduce((total, item) => total + item.price, 0).toFixed(2));

        setItemCount(count);
        setTotalPrice(price);
    }, [cart]); // Cette fonction s'exécute chaque fois que le panier change

    // Fonction pour regrouper les articles par ID
    const groupById = (items: { id: number; price: number; name: string }[]) => {
        return items.reduce((acc, item) => {
            const found = acc.find(i => i.id === item.id);
            if (found) {
                found.quantity += 1; // Incrémenter la quantité
            } else {
                acc.push({ ...item, quantity: 1 }); // Ajouter le nouvel article
            }
            return acc;
        }, []);
    };

    const groupedItems = groupById(cart); // Regrouper les articles par ID

    // Fonction pour vider le panier
    const clearCart = () => {
        setCart([]); // Mettre à jour l'état du panier
        localStorage.removeItem('cart'); // Supprimer le panier du localStorage
    };

    return (
        <div className="flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold mb-4">Panier</h1>
            <p className="text-lg mb-4">Nombre d'articles: {itemCount}</p>
            <p className="text-lg mb-6">Prix total: {totalPrice.toFixed(2)} €</p>
            <ul className="w-full max-w-md bg-white rounded-lg shadow-md divide-y divide-gray-200 mb-4">
                {groupedItems.map((item) => (
                    <li key={item.id} className="flex justify-between items-center p-4 hover:bg-gray-100">
                        <span>{item.name} (x{item.quantity})</span>
                        <span>{(item.price * item.quantity).toFixed(2)} €</span>
                    </li>
                ))}
            </ul>
            <button 
                onClick={clearCart} 
                className="h-10 px-4 font-semibold rounded-md bg-red-600 text-white transition-colors hover:bg-red-500">
                Vider le panier
            </button>
        </div>
    );
}
