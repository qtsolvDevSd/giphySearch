import SearchBar from "./components/SearchBar";
import GiphyListing from "./components/GiphyListing";
import { useState,useEffect } from "react";

function App() {
  
  // setApi Data 
  const setData = (res) => {
    setGiphy([...giphy,...res.data]);
  }
  
  
  const [giphy, setGiphy] = useState([]);
  // useEffect(() => {
  //   // if you want to do something after update giphy state
  // }, [giphy])
  
  return (
    <div className="App">
      <div className="container-fluid">
        <SearchBar setData={setData} />
        <GiphyListing listData={giphy} />
      </div>
    </div>
  );
}

export default App;
