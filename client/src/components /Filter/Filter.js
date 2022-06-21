import "./Filter.css";

const Filter = ({ filters, setFilters }) => {
    return(
        <div className="pet-filter-container">
            <div className='filter-container'>
                <label htmlFor="sex">Sex</label>
                <select
                    name="sex"
                    id="sex"
                    className="form-select"
                    onChange={(e) => {
                        setFilters({
                            ...filters,
                            sex: e.target.value,
                        });
                    }}
                >
                    <option value="any">Any</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        </div>
    ) 
}

export default Filter;