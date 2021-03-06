import Header from "./Header";
import SearchItem from "./SearchItem";
import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page=1";

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [search, setSearch] = useState("");
  const [itemView, setItemView] = useState(null);

  const fetchItems = async (search) => {
    try {
      let response;
      if (search) {
        const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=55903b004b65252bf433fb4218601d2c&language=en-US&sort_by=popularity.desc&page=1&vote_average.gte=8.4&query=${search}`;
        response = await fetch(SEARCH_URL);
      } else {
        response = await fetch(API_URL);
      }
      const listItems = await response.json();
      setItems(listItems.results);
      setFetchError(null);
    } catch (err) {
      setFetchError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchItems(search);
  }, [search]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchItem search={search} setSearch={setSearch} />

                <ItemList items={items} setItemView={setItemView} />

              </>
            }
          ></Route>
          <Route
            path="/item/detail"
            element={<ItemDetail itemView={itemView} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
