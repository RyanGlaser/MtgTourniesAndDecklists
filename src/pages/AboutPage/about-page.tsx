import { Component } from "solid-js";


const CardDatabasePage: Component = (props) => { 
    return (
        <>
        <h1>About Me</h1>

        <div>
            <h2>My name is Ryan Glaser</h2>
            I am a software engineer that loves playing Magic the Gathering.
            This is a passion project to build a website allowing users to view tournament results and decklists from Magic the Gathering tournaments, create decklists,andsearch magic cards using scryfall API.
            Project is built using SolidJS, Sass, Scryfall API.
        </div>
        </>
    )
}

export default CardDatabasePage;