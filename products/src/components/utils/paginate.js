import Pagination from 'react-bootstrap/Pagination';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Paginate = ({totalRecords, recordsPerPage = 10, siblingPageCount = 5, loadProducts}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentSiblingPageSet, setCurrentSiblingPageSet] = useState(1);
    const pages = Math.ceil(totalRecords / recordsPerPage);
    const siblingPageSets = Math.ceil(pages / siblingPageCount);

    const handlePageClick = page => {
        if(currentPage !== page) {
            setCurrentPage(page);
            loadProducts(page);
        }
    }

    const nextPage = () => {
        if((currentPage + 1) <= pages) {
            setCurrentPage(currentPage + 1);
            if((currentPage + 1) > (currentSiblingPageSet * siblingPageCount)) {
                setCurrentSiblingPageSet(currentSiblingPageSet + 1);
            }
            loadProducts(currentPage + 1);
        }
    }

    const prevPage = () => {
        if((currentPage - 1) >= 1) {
            setCurrentPage(currentPage - 1);
            if((currentPage - 1) < (currentSiblingPageSet * siblingPageCount) - siblingPageCount + 1) {
                setCurrentSiblingPageSet(currentSiblingPageSet - 1);
            }
            loadProducts(currentPage - 1);
        }
    }

    const firstPage = () => {
        setCurrentPage(1);
        setCurrentSiblingPageSet(1);
        loadProducts(1);
    }

    const lastPage = () => {
        setCurrentPage(pages);
        setCurrentSiblingPageSet(siblingPageSets);
        loadProducts(pages);
    }

    useEffect(() => {}, [currentPage, currentSiblingPageSet]);

    let pageItems = [];
    for(let page = ((currentSiblingPageSet * siblingPageCount) - siblingPageCount) + 1; 
        page <= ((currentSiblingPageSet * siblingPageCount) > pages ? pages : (currentSiblingPageSet * siblingPageCount)); page++) {
        pageItems.push(
            <Pagination.Item key={page} active={currentPage === page} onClick={() => handlePageClick(page)}> {page} </Pagination.Item>
        )
    }
    return(
        <>
            <Pagination className='paginate-center-align'>
                <Pagination.First onClick={() => firstPage()}></Pagination.First>
                <Pagination.Prev onClick={() => prevPage()}></Pagination.Prev>
                {currentSiblingPageSet > 1 ? <Pagination.Ellipsis></Pagination.Ellipsis> : null}
                    { pageItems }
                {currentSiblingPageSet < siblingPageSets ? <Pagination.Ellipsis></Pagination.Ellipsis> : null}
                <Pagination.Next onClick={() => nextPage()}></Pagination.Next>
                <Pagination.Last onClick={() => lastPage()}></Pagination.Last>                
            </Pagination>
        </>
    )
}

Paginate.propTypes = {
    totalRecords: PropTypes.number.isRequired,
    recordsPerPage: PropTypes.number,
    siblingPageCount: PropTypes.number,
    loadProducts: PropTypes.func
}

export default Paginate;