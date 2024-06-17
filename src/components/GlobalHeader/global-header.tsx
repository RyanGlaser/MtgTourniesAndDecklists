import { A } from '@solidjs/router';
import { Component, createSignal } from 'solid-js';

const GlobalHeader: Component = (props) => {
    return (
        <nav>
            <div>
                <div>
                    'Hello Now'
                </div>
                <div>
                    <A href="/">Home</A>
                    <A href="/users">Users</A>
                    <A href="/cards">Cards</A>
                    <A href="/about">About</A>
                </div>
            </div>
        </nav>
    )
}

export default GlobalHeader;