import React, { useState, useEffect } from 'react'
import { useLocation } from "wouter";
import searchService from "../services/searchService";
import "./css/navbar.css";

//icons
import account from '../assets/icons/account.svg';

export default function Navbar() {
    const [locarion, setLocation] = useLocation();
    const [phrase, setPhrase] = useState("");
    const [results, setResults] = useState({});
    const [showResultBox, setShowResultBox] = useState(false);

    useEffect(() => {
        return () => {
            if (phrase.length <= 2) {
                setShowResultBox(false);
                setResults({});
            }
        }
    }, [phrase]);

    const search = async (e) => {
        setPhrase(e.target.value);
        if (phrase.length >= 2) {
            setShowResultBox(true);
            setResults(await searchService(phrase));
        }
    }

    return (<div className="navbar-container">
        <div className="navbar">
            <div>Spacebook</div>
            <div>
                <input type="text" value={phrase} placeholder="search" onChange={search} />
                {showResultBox && <div className="result-box">
                    {results.numOfResults > 0 ? <div>
                        {results.result.map((item, index) => <div key={index}
                            className="search-item" onClick={() => setLocation(`/profile/${item._id}`)} >
                            {item.fname} {item.surname}
                        </div>)}
                    </div> :
                        <div className="no-res"><span>no results...</span></div>}
                </div>}
            </div>
            <div>
                <nav>
                    <div onClick={() => setLocation("/proile")}>
                        <img src={account} width="24px" height="24px" />
                    </div>
                </nav>
            </div>
        </div>
    </div >);
}