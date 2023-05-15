import "./assets/css/app.css";
import SideBar from "./components/SideBar/SideBar";
import ContentWrapper from "./views/ContentWrapper/ContentWrapper";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import './App.css';
import TopBar from "./components/TopBar/TopBar";
import LastMovieInDB from "./components/ContentRowTop/subcomponents/LastMovieInDB/LastMovieInDB";
import Genres from "./views/Genres/Genres";
import MoviesList from "./views/MoviesList/MoviesList";
import NotFound from "./views/404/NotFound";
import SearchMovies from "./components/SearchMovies";

function App() {
	return (
		<div id="wrapper">
			{/* <!-- Sidebar --> */}
			<SideBar />
			{/* <!-- End of Sidebar --> */}

			<div id="content-wrapper" className="d-flex flex-column">
				<TopBar />

				<Routes>
					<Route path="/" element={<ContentWrapper />} />
					<Route path="/products" element={<Genres />} />
					<Route path="/last-movie" element={<LastMovieInDB />} />
					<Route path="/listado" element={<MoviesList />} />
					<Route path="/bucar" element={<SearchMovies />} />
					<Route path="*" element={<NotFound />} />
				</Routes>

				<Footer />
			</div>
		</div>
	);
}

export default App;
