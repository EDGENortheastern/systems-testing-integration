import { useState, useEffect } from 'react';
import './Pets.css';
import Filter from '../Filter/Filter';
import Cards from '../Cards/Cards';
import axios from "axios";

const Pets = () => {

    const [dogs, setDogs] = useState([]);
    const [filteredDogs, setFilteredDogs] = useState([]);
    const [filters, setFilters] = useState({
        sex: "any",
    })

    const fetchDogs = async() => {
        const response = await axios.get("http://localhost:4000/dogs");
        setDogs(response.data);
        setFilteredDogs(response.data);
    }

    useEffect(() => {
        fetchDogs();
    }, []);

    useEffect(() => {
        let dogsFiltered = [...dogs];
        if(filters.sex !== "any"){
            dogsFiltered = dogsFiltered.filter(dog =>  dog.sex === filters.sex)
        }
        setFilteredDogs(dogsFiltered)
    }, [filters, dogs])

    return(
        <div className = "container">
            <div className = "app-container">
                <Filter filters={filters} setFilters={setFilters}/>
                <Cards dogs = { filteredDogs }/>
            </div>
        </div>
    )
}

export default Pets;