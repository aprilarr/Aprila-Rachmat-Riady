import React from 'react';

const Result = (props) => 
{
    const {repos} = props;
    console.log("Repos is: ", repos.data);

    const listRepos = repos.length !== 0 ? (
        repos.data.map((item) => <li>{item.name}</li>)
    ): (
    <h5 style={{color: "red" }}>Silahkan tekan tombol Untuk menampilkan isi repo</h5> 
    );
    return <div>
        <ul>
            {listRepos}
        </ul>
    </div>
}

export default Result;