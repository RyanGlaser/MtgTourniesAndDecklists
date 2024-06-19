import { A } from '@solidjs/router';
import { Component, createSignal } from 'solid-js';
import './global-header.scss';
import SearchBar from '../SearchBar/search-bar';


const GlobalHeader: Component = () => {
    return (
        <nav class="navbar">
                <div class="navbar__icon-container">
                    <A class="navbar__pages-container__page-list__link" href="/">MTGFiend</A>
                </div>
                <div class="navbar__pages-container">
                    <ul class="navbar__pages-container__page-list"> 
                        <li class="navbar__pages-container__page-list__item">
                            <A class="navbar__pages-container__page-list__link" href="/tournaments">Tournaments</A>
                        </li> 
                        <li class="navbar__pages-container__page-list__item">
                            <A class="navbar__pages-container__page-list__link" href="/cards">Cards</A>
                        </li>
                        <li class="navbar__pages-container__page-list__item">
                            <A class="navbar__pages-container__page-list__link" href="/decks">Decks</A>
                        </li>
                        <li class="navbar__pages-container__page-list__item">
                            <A class="navbar__pages-container__page-list__link" href="/about">About</A>
                        </li>            
                    </ul>
                </div>
                <div class="navbar__search-container">
                    <SearchBar/>
                </div>
                <div class="navbar__login-container">
                    <A class="navbar__pages-container__page-list__link" href="/login">Login</A>
                </div>
        </nav>
    )
}

export default GlobalHeader;