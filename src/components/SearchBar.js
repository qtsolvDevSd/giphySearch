import React,{ useState} from "react";
import axios from "axios";

// fetch api data and return promise
const fetchGiphy = async (val) =>{
    return await axios.get(`https://api.giphy.com/v1/gifs/search?q=${val}&api_key=qzbiZCgky4VgSiCHhvMs4i4jjtVNN2AC&limit=5`).catch((err) => {
        console.log("Err: ", err);
    });   
}

const SearchBar = ({setData}) => {
    const [input,setInput] = useState("")
    
    // handle submit event and prevent page refresh
    const onSubmitHandlar = (e) =>{
        e.preventDefault();
        if(input && input.length > 3){
            fetchGiphy(input).then((res)=>{
                setData(res.data);
                setInput('');
            })
        }else{
            alert('Input more than 3 char');
        }
    }

  return (
      <>
        <div className="row col-md-6 mx-auto my-3">
            <form onSubmit={onSubmitHandlar} className="">
                <div className="row">
                    <div className="col-md-10">
                        <input type="text" value={input} className="form-control"
                        onChange={e=> setInput(e.target.value)} />
                    </div>
                    <div className="col-md-2">
                        <input type="submit" value="search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <hr />
        </div>
    </>
  );
};

export default SearchBar;
