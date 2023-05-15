import React from "react";
import Table from "../../components/Table/Table";

class MoviesList extends React.Component {

    constructor() {
        super();
        this.state = {
            arrayData: [],
            columns: { title: "Titulo", length: "Duracion", rating: "Rating", genre: "Genero", awards: "Premios" }
        }
    }

    async componentDidMount() {
        const response = await fetch("http://localhost:3001/api/movies");
        const data = await response.json();
        this.setState({ arrayData: data.data })
    }

    render() {
        return (
            <Table data={this.state.arrayData} columns={this.state.columns} />
        )
    }
}

export default MoviesList;