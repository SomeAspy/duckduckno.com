import { JSX } from "solid-js";
import "../CSS/Home.css";

import Logo from "../assets/logo-optimized.svg";
import FooterComponent from "../assets/components/footer/footer.component";
import handleSearch from "../scripts/searchBar";

export default function Home(): JSX.Element{
    return (
        <>
            <div class='logo-element'>
                <div class='logo-container' >
                        <Logo/>
                    </div>
            </div>
            <h1 class='title'>Duck Duck No</h1>
            <div class='search'>
                <input
                    class='search'
                    type='text'
                    name='search'
                    placeholder='Search The Web'
                    id='search'
                    autofocus
                    onKeyDown={(event: KeyboardEvent) => handleSearch(event)}
                />
            </div>
            <FooterComponent github="Home.tsx"/>
        </>
    );
}