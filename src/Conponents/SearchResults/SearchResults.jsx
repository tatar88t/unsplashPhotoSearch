import React from 'react'

const SearchResults = (props) => {
    return (
            <div>
                {props.imgRecieved.map(img => (
                    <>
                        <img src = {img.urls.small} alt = 'img' key = {img.id}/>
                        <div>{img.user.username}</div>
                        <div><a href = {img.user.portfolio_url} target = "_blank" rel="noopener noreferrer"> Portfolio</a></div>
                    </>
                    )
                )}
            </div>
    )
}

export default SearchResults;
