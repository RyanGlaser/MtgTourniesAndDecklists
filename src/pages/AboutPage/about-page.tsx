import { Component } from "solid-js";
import picture from '../../assets/family.jpg';

const CardDatabasePage: Component = () => { 
    return (
        <>
        <h1>About Me</h1>
        <div>
            <h2>Ryan Glaser</h2>
            <img src={picture}/>
            I am a software engineer that loves playing Magic the Gathering.
            This is a passion project to build a website allowing users to view tournament results and decklists from Magic the Gathering tournaments, create decklists, and search magic cards using scryfall API.
            Project is built using SolidJS, Sass, Scryfall API, vite, and probably a million other dependices.
        </div>
        </>
    )
}

export default CardDatabasePage;