import React from 'react';
import Country from '../components/Country';
import Controls from '../components/Controls';
import { List, Pagination } from '../styled/styled';
import FilterNav from '../components/FilterNav';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { selectPagination, setCurrentPage, } from "../store/paginationSlice";
import { selectCountries } from '../store/countriesSlice';
import { selectUpdatedCountries } from '../store/operationSlice';

export const Countries = ({ handleSearchName, handleFilter }) => {
    const countries = useSelector(selectCountries);
    const updatedCountries = useSelector(selectUpdatedCountries);
    const currentPage = useSelector(selectPagination);
    const dispatch = useDispatch();
    const PER_PAGE = 10;
    let pageCount = null;
    let showCountries = null;

    if(countries !== [] && updatedCountries.length === 0) {
        const offset = currentPage * PER_PAGE;
        pageCount = Math.ceil(countries.length / PER_PAGE);
        showCountries = countries
          .slice(offset, offset + PER_PAGE)
          .map(country => <Country key={country.name} country={country} />);
    }

    const handlePageClick = ({ selected: selectedPage }) => {
        dispatch(setCurrentPage(selectedPage));
    }

    return (
        <List>
            <Controls handleSearchName={handleSearchName} />
            <FilterNav handleFilter={handleFilter} />
            {showCountries}
            <Pagination>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                />
            </Pagination>
        </List>
    )
}

export default Countries;