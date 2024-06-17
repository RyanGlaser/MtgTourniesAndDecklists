import { A } from '@solidjs/router';
import { Component, createSignal } from 'solid-js';
import './global-header.scss';


const GlobalHeader: Component = () => {
    return (
        <nav class="navbar">
                <div class="icon-container">
                    Hello Now
                </div>
                <div class ="pages-container">
                    <A href="/">Home</A>
                    <A href="/users">Users</A>
                    <A href="/cards">Cards</A>
                    <A href="/about">About</A>
                </div>
        </nav>
    )
}

export default GlobalHeader;