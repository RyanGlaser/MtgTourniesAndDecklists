import { A } from '@solidjs/router';
import { Component, createSignal } from 'solid-js';
import './global-header.scss';
import SearchBar from '../SearchBar/search-bar';
import { BsJustify } from 'solid-icons/bs'


const GlobalHeader: Component = () => {
    return (
        <nav class="navbar">
                <div class="navbar__icon-container">
                    <A class="navbar__icon-container__link" href="/">MTGFiend</A>
                    <button class="navbar__icon-container__icon-button">
                    <BsJustify class="navbar__icon-container__icon-button__icon"/>
                    </button>
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
                    <SearchBar placeholder="Search Cards, Decks, Tournaments" />
                </div>
                <div class="navbar__login-container">
                    <A class="navbar__login-container__link" href="/login">Login</A>
                </div>
        </nav>
    )
}

export default GlobalHeader;