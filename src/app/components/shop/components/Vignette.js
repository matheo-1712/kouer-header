// components/Vignette.js
export default function Vignette({ product, onAddToCart }) {
    /* Fonction pour ajouter un produit au panier */
    const handleAddToCart = () => {
        onAddToCart(product.id);
    };

    return (
        /* Vignette d'un produit */
        <div className="flex-none w-64 bg-white rounded-lg shadow-md overflow-hidden">
            <form className="p-6" onSubmit={handleAddToCart}>
                <div className="flex flex-wrap mb-2">

                    {/* Nom du produit */}
                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {product.name}
                    </h1>

                    {/* Prix du produit */}
                    <div className="text-lg font-semibold text-slate-500">
                        {product.price.toFixed(2)}€
                    </div>

                </div>
                {/* Description du produit */}
                <div className="flex space-x-4 mb-6 text-sm font-medium">

                    {/* Bouton pour "ajouter au panier" */}
                    <div className="flex-auto flex space-x-4">
                        <button className="h-10 px-4 font-semibold rounded-md bg-black text-white" type="submit">
                            Mettre dans le panier
                        </button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
}
