import React from "react";
import SuperCard from "../../components/SuperCard/SuperCard";
import GenreCard from "../../components/GenreCard/GenreCard";

class Genres extends React.Component {
    constructor() {
        super();
        this.state = {
            genresList: [],
            color: ""
        }
    }

    componentDidMount() {

        fetch('http://localhost:3000/api/products')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(genres => {
                this.setState({ genresList: genres.products })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <SuperCard title="Genres in Data Base" >
                {
                    Array.isArray(this.state.genresList) && this.state.genresList.map((genre, i) => <GenreCard key={genre.name + i} name={genre.name} />)
                }
            </SuperCard>
        )
    }

}

export default Genres;