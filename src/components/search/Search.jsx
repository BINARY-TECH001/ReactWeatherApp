import React from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import { useState } from 'react'
import { GEO_API_URL, geoApiOptions } from '../../api'

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null)

    const loadOptions = (inputValue) =>{
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
          .then((response) => response.json())
            .then((response) => {
                return {
                options: response.data.map((city) => {
                    return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                    };
                }),
                };
            });
        };

    const handleOnChange = (searchData) =>{
        setSearch(searchData)
        onSearchChange(searchData)
    }

  return (
    <>
    <AsyncPaginate 
        placeholder="search for cities..."
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
    />

   { !search && <span className='info'> Enter City Name to see Weather</span>}
    </>
  )
}

export default Search