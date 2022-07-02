import React, {useState} from 'react';
import './movieRow.css';
import PageMovie from './PageMovie.js';
import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';

export default ({ title, items }) => {
    const [ScrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let x = ScrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }
    const handleRightArrow = () => {
        let x = ScrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x);
    }

    return (
        
        <div className="movieRow">
            <h2>{title}</h2>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <span class="material-symbols-outlined">
                    arrow_back_ios
                </span>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <span class="material-symbols-outlined">
                    arrow_forward_ios
                </span>
            </div>


            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: ScrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}