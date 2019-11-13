import React from 'react';

import './card-list.styles.css';
import { Card } from '../card/card.component';

// For any React component, the "props" argument is an object with all of the HTML attributes of the JSX code that references this component
// as properties on the object. In addition, there is another property named "children" which contains all the HTML child nodes within the 
// referencing JSX/HTML.
export const CardList = (props) => (
    // console.log(props.name);
    // Everything in the function body (or render body if using a class-based definition)
    // is effectively wrapped in a call to React.createElement()
    // That parses the JSX and figures out how to create the DOM elements that will
    // be fed into the virtual DOM. But it's probably best to think of it like a DSL
    // and not worry too much about how it translates into real JavaScript.
    // Just know you can use JavaScript around the JSX in the function body
    // and within it if you put it in curly braces.
    // the following is returned implicitly, don't need the return keyword
    <div className='card-list'>
        {props.monsters.map(m => 
            <Card key={m.id} monster={m} />
        )}
    </div>
);
