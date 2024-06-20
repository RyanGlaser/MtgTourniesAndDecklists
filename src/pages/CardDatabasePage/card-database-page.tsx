import { Component, createSignal } from 'solid-js';
import * as Scry from "scryfall-sdk";
import SearchBar from '../../components/SearchBar/search-bar';

const CardDatabasePage: Component = (props) => { 
    return (
        <>
        <h1>Card Database Page</h1>
        <SearchBar placeholder='Search Cards'/>
        </>
    )
}

export default CardDatabasePage;