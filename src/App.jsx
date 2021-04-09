import React from "react";
import Card from "./Components/Cards.jsx";
import Emojis from "./Dictonary.js";
import Footer from "./Components/Footer.jsx";

function createCard(Emoji) {
    return (<Card key={Emoji.id} emoji={Emoji.emoji} description={Emoji.description}/>);
}

function App() {
    return (
        <div className="flexbox">
            <div className="heading" >
                <h1 className="head">
                    EmojiPedia</h1>
            </div>
            {Emojis.map(createCard)}
            <Footer />
        </div>
    );
}

export default App;