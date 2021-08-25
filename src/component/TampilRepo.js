import axios from 'axios';
import React, {useState} from 'react';
import Result from './Result';

const SearchBar = () => 
{
    const [repos, setRepos] = useState([]);

    const handleClick = async e => {
        e.preventDefault();

        try{
            const result = await axios('https://api.github.com/users/aprilarr/repos');
            // const resultJson = await result.json();
            console.log(result);
            setRepos(result);
        }catch(e){
            console.log(e)
        }  
    }
    
    return( 
    <div style={{padding: "20px" }}>
        <button onClick={handleClick}>Tampilkan Isi Repo</button>
        <Result repos={repos}/>
    </div>
    );
}

export default SearchBar;