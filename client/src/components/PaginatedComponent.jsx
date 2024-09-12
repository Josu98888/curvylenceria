import React, { useState } from 'react';
import Pagination from './Pagination'; // El componente de paginación que ya tienes

const PaginatedComponent = ({ items, itemsPerPage, render }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Cálculos de la paginación
  const totalItems = items.length;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = items.slice(firstIndex, lastIndex); // Los elementos a mostrar en la página actual

  return (
    <>
      {/* Renderizar los elementos actuales usando la función render */}
      {render(currentItems)}

      {/* Componente de paginación */}
      <Pagination
        productsPerPage={itemsPerPage}
        totalProducts={totalItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default PaginatedComponent;
