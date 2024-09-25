"use client"

import { useState, useEffect } from "react";
import Vignette from "./components/Vignette";

export default function Brand() {
    const [cart, setCart] = useState([]);

    /* Liste des produits pour les vignettes */
    const products = [
        { id: 1, name: "Jambon", price: 25.99, description: "Un très bon jambon" },
        { id: 2, name: "Bacon", price: 39.99, description: "Un très bon bacon" },
        { id: 3, name: "Sorbet Abricot", price: 15.49, description: "Un très bon sorbet" },
        { id: 4, name: "Panier Cancalais", price: 59.99, description: "Un très bon panier" },
        { id: 5, name: "Boisson Détox", price: 99.99, description: "Une très bonne boisson" }
    ];

    /* Fonction pour ajouter un produit au panier */
    const handleAddToCart = (productId) => {
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            const updatedCart = [...cart, productToAdd];
            setCart(updatedCart);
            localStorage.setItem("cart", JSON.stringify(updatedCart)); // Enregistre le panier dans le local storage pour le garder en mémoire pour tester le panier du site
        }
    };

    /* Récupère le panier du local storage */
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart)); /* Met à jour l'état du panier avec les données du local storage */
        }
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-4 p-4">
            {products.map(product => (
                <Vignette key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
        </div>
    );
}
