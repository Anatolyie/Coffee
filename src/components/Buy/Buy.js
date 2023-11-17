import React, { useState } from 'react';
import Card from '../Card/Card';

function Buy({ products }) {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <section className='buy'>
            <div className="buy-cards">
                {currentProducts.map((product, index) => (
                    <Card
                        key={index}
                        img={product.img}
                        text={product.name}
                        price={product.price}
                        country={product.country}
                        showExtraDiv={true}
                        styles={{
                            border: '1px solid rgba(0, 0, 0, 0.2)',
                            marginBottom: '30px',
                            minHeight: '260px',
                            boxShadow: '0px 0px 16px -2px #000000',
                        }}
                    />
                ))}
            </div>
            {totalPages > 1 && (
                <div className="pagination">
                    {[...Array(totalPages).keys()].map((pageNumber) => (
                        <span
                            key={pageNumber + 1}
                            onClick={() => handlePageChange(pageNumber + 1)}
                            className={pageNumber + 1 === currentPage ? 'active' : ''}
                        >
                            {pageNumber + 1}
                        </span>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Buy;
