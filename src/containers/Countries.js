import React from 'react';
import Country from '../components/Country';
import Controls from '../components/Controls';
import { List, Pagination } from '../styled/styled';
import FilterNav from '../components/FilterNav';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { selectPagination, setCurrentPage, } from "../store/paginationSlice";

export const Countries = ({ countries, handleSearchName, handleFilter, toggleTheme, theme }) => {
    const currentPage = useSelector(selectPagination);
    const dispatch = useDispatch();
    const PER_PAGE = 10;
    let pageCount = null;
    let showContries = null;
    let showedContries = null;

    if(countries !== []) {
        const offset = currentPage * PER_PAGE;
        const getCountries = [...countries];
        pageCount = Math.ceil(getCountries.length / PER_PAGE);
        showedContries = getCountries
          .slice(offset, offset + PER_PAGE)
          .map(country => <Country key={country.name} country={country} />);
        showContries = countries.map(country => <Country key={country.name} country={country} />);
    }

    const handlePageClick = ({ selected: selectedPage }) => {
        dispatch(setCurrentPage(selectedPage));
    }

    return (
        <List>
            <Controls toggleTheme={toggleTheme} handleSearchName={handleSearchName} theme={theme} />
            <FilterNav handleFilter={handleFilter} />
            {showedContries}
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