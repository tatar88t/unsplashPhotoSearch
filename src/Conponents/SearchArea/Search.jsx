import React, {useState} from "react";
import {unSplashAPI} from "../api/PhotoReq";
const ACCESS_KEY = "CjpdSYrOLRzcHFUxRtusBFumy9WaAVNpAXPlOPBEDuA";
const Search = () => {
    const [query, setQuery] = useState('');
    const [imgRecieved, setImgRecieved] = useState([])
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            console.log(query)
        console.log(ACCESS_KEY)
        unSplashAPI.searchReq(query, ACCESS_KEY).then(response => {
            console.log(response)
            setImgRecieved(response.data.results)
        })
    }
    return(
        <div>
            <h1>Photo Search</h1>
            <form onSubmit = {handleSubmit} >
                <input onChange = {handleChange} type = 'text' name = 'query' placeholder = 'Search images...'/>
                <button >Search</button>
            </form>
            <div>
                {imgRecieved.map(img => (
                    <img src = {img.urls.small} alt = 'img' key = {img.id}/>
                    )
                )}
            </div>
        </div>
    )
}

export default Search