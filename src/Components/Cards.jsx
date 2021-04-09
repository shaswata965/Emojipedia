import React from "react";

function Cards(props) {
    return (
        <div className="cards-div">
            <dl>
                <dt>{props.emoji}</dt>
                <dd>{props.description}</dd>
            </dl>
        </div>
    );
}

export default Cards;