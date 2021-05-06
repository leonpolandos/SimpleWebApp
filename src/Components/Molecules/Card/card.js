import React from 'react';

const card = (email, fullName, avatar) => {
    return (
        <>
            <h1>Tempat untuk menampilkan foto yang diupload</h1>
            <div className="card" style={{ width: "18rem" }}>
                <img src={avatar} className="card-img-top" alt="..."/>
                <div className="card-body">
                        <p className="card-text">{fullName}</p>
                        <p className="card-text">{email}</p>
                    </div>
            </div>
        </>
    )
}

export default card;
