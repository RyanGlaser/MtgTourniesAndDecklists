import { createSignal } from 'solid-js';
import * as Scry from "scryfall-sdk";
import './CardSearchBar.scss';

const CardSearchBar = () => {
    const [searchQuery, setSearchQuery] = createSignal('');
    const [card, setCard] = createSignal<Scry.Card>(); // Step 1: Signal to store API response


    const handleSearch = async (event: Event) => {
        const value = (event.target as HTMLInputElement).value;
        setSearchQuery(value);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            searchCard(searchQuery());
        }
    };

    async function searchCard (cardName: string) {
        try {
            const result = await Scry.Cards.byName(cardName, true); // Fetch all pages of results
            setCard(result); // Step 2: Store the API response
        } catch (error) {
            console.error("Failed to fetch cards:", error);
            setSearchQuery('failed to find the card you freak')
            setCard(); // Handle errors, e.g., by clearing the previous results
        }
    }

    return (
        <div>
            <input
                    type="text"
                    value={searchQuery()}
                    onInput={handleSearch}
                    onKeyDown={handleKeyDown}
                    placeholder="Search for any magic card"
                    class="search-input"
            />
            <div>
                <img src={card()?.image_uris?.large} alt={card() ? `${card()?.name}`: ''} />
                {card() ? <p>{card()?.name}</p> : ''}
            </div>
        </div>
    );
};

export default CardSearchBar;