import React from 'react';

export default function Boiling({ celsius = 0 }) {
    if (celsius >= 100) {
        return <p>The water would boil.</p>;
    }
        return <p> Water would not boil.</p>;
}
