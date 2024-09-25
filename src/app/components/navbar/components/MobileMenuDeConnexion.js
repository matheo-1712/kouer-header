/* Component MobileMenuDeConnexion  */

"use client"; // composant de type "client"

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function MobileMenuDeConnexion({ isMenuOpen }) {
  const [menuContainer, setMenuContainer] = useState(null);

  /* Hook d'effet pour trouver l'élément du menu mobile */
  useEffect(() => {
    const container = document.getElementById('MobileMenuDeConnexion');
    setMenuContainer(container);
  }, []);

 /* Si l'élément du menu mobile n'est pas trouvé, retourner null */
  if (!menuContainer) {
    return null;
  }

  /* Créer le portail pour le menu mobile pour le placer après la navbar */
  return createPortal(
    isMenuOpen && (
      <div className="fixed left-0 bg-white shadow-lg z-50 lg:hidden h-full w-64 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col w-full p-4">
          <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Se connecter</a>
          <a href="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">S'inscrire</a>
        </div>
      </div>
    ),
    menuContainer
  );
}

