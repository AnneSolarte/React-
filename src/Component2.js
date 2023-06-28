import React from "react";

const Component2 = () => {
    const movies = [
        {
            name : "Harry Potter",
            year : "2001",
        },
        {
            name : "Barbie",
            year : "2012",
        },
        {
            name : "Frozen",
            year : "2008",
        },
    ] 
    return (
        <div className="box">
            <hr/>
            <h2>Movies</h2>

            {movies.length >=1 ? 
            (<div>
                {
                    movies.map((movie, indice) => {
                        return (
                            <div key={indice}>
                                <li>Name: {movie.name}</li>
                                <li>Year: {movie.year}</li>
                            </div>
                        )
                    })
                } 
            </div>
            ): <p>There is not movies</p>
            }
            
        </div>
    )

}
export default Component2