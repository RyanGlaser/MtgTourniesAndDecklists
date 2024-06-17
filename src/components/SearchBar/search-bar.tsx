import { Component, createSignal } from 'solid-js';
import * as Scry from "scryfall-sdk";
import './search-bar.scss';
import { HiSolidMagnifyingGlass } from 'solid-icons/hi'

const CardSearchBar: Component = (props) => {
    const [searchQuery, setSearchQuery] = createSignal('');
    // const [card, setCard] = createSignal<Scry.Card>(); // Step 1: Signal to store API response


    const handleSearch = async (event: Event) => {
        const value = (event.target as HTMLInputElement).value;
        setSearchQuery(value);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        // if (event.key === 'Enter') {
        //     // props.searchCard(searchQuery());
        // }
    };

    // async function searchCard (cardName: string) {
    //     try {
    //         if(cardName === '') return setSearchQuery(''); // Clear the search query if the input is empty
    //         const result = await Scry.Cards.byName(cardName, true); // Fetch all pages of results
    //         setCard(result); // Step 2: Store the API response
    //     } catch (error) {
    //         console.error("Failed to fetch cards:", error);
    //         setSearchQuery('failed to find the card you freak')
    //         setCard(); // Handle errors, e.g., by clearing the previous results
    //     }
    // }

    return (
            <div class="search-container">
                <HiSolidMagnifyingGlass class="search-magnify-icon"/>
                <input
                    type="text"
                    value={searchQuery()}
                    onInput={handleSearch}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for any magic card"
                    class="search-input"
                />
            </div>
            /* <div>
                <img src={card()?.image_uris?.large} alt={card() ? `${card()?.name}`: ''} />
                {card() ? <p>{card()?.name}</p> : ''}
            </div> */
    );
};

export default CardSearchBar;