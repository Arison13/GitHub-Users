import React, {useState} from "react";
import './SearchBar.css';


const SearchBar = ({data}) => {
    const [state, setState] = useState({search:""})

    const onchange = (e) => {
        setState({...state, [e.target.name]:e.target.value })
        console.log(state)
    }
    // const Submit = e => {
    //     e.preventDefault();
    //     const newdata = data.filter((search, idx) => 
    //         search !== data[idx].login
    //     )
    //     console.log(newdata)
    // }

return(
    <div>
        <form>
            <input
            placeholder="Search"
            name="search"
            value={state.search}
            onChange={onchange}
            />
        </form>
    </div>
  ) 
}

export default SearchBar