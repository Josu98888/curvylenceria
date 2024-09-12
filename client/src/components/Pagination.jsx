import React from "react";

const Pagination = ({
    productsPerPage,
    totalProducts,
    currentPage,
    setCurrentPage,
}) => {
    const numberPage = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        numberPage.push(i);
    }
    const onPreviusPage = () => {
        setCurrentPage(currentPage - 1);
    };
    const onNextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    const onSpecificPage = (n) => {
        setCurrentPage(n);
    };
    return (
        <nav className="d-flex justify-content-center" aria-label="Page navigation example">
            <ul className="pagination">
                <li
                    className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                    }`}
                >
                    <button
                        className="page-link"
                        aria-label="Previous"
                        onClick={onPreviusPage}
                        disabled={currentPage === 1} 
                        style={{ color: 'white', backgroundColor: 'rgb(227, 11, 235)' }}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                {numberPage.map((noPage) => (
                    <li
                        className={`page-item ${
                            noPage === currentPage ? "active" : ""
                        }`}
                        aria-current="page"
                        key={noPage}
                        onClick={() => onSpecificPage(noPage)}
                    >
                        <button className="page-link"
                        style={noPage === currentPage ? { backgroundColor: 'rgb(227, 11, 235)', color: 'white',borderColor: 'white', filter:'drop-shadow(5px 5px 10px rgb(227, 11, 235))' } : { color: 'white', backgroundColor: 'rgb(248, 215, 248)' }}>{noPage}</button>
                    </li>
                ))}
                <li
                    className={`page-item ${
                        currentPage >= numberPage.length ? "disabled" : ""
                    } `}
                >
                    <button
                        className="page-link"
                        aria-label="Next"
                        onClick={onNextPage}
                        disabled={currentPage >= numberPage.length} 
                        style={{ color: 'white', backgroundColor: 'rgb(227, 11, 235)' }}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
