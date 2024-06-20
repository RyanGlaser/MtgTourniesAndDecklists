import { Component, createSignal } from 'solid-js';
import * as Scry from "scryfall-sdk";
import './search-bar.scss';

/* I want this search bar to be able to search for cards, decks, or tournaments in the DB
when a user begins to enter a search query, the search bar should display a list of suggestions with a type of 
card, deck, or tournament. The Search bar will then do an API call to read the data from the DB and display the results
routing user to correct page based on the type of search result

we can pass props down to tell the search bar what kind it is
{ cards, decks, tournaments }
cards
decks
tournaments
*/

type SearchBarProps = {
  placeholder: string;
  cards: boolean;
  decks: boolean;
  tournaments: boolean;
};

const SearchBar: Component<SearchBarProps> = (props) => {
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
                <input
                    type="text"
                    value={searchQuery()}
                    onInput={handleSearch}
                    onKeyDown={handleKeyDown}
                    placeholder={props.placeholder}
                    class="search-container__search-input"
                />
            </div>
            /* <div>
                <img src={card()?.image_uris?.large} alt={card() ? `${card()?.name}`: ''} />
                {card() ? <p>{card()?.name}</p> : ''}
            </div> */
    );
};

export default SearchBar;