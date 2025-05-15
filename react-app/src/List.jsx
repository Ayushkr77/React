export default function List() {

    // We can also pass this array fruits as props from app.jsx
    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Banana", calories: 105 },
        { id: 3, name: "Mango", calories: 150 },
        { id: 4, name: "Coconut", calories: 354 },
        { id: 5, name: "Pineapple", calories: 82 },
    ];

    // fruits.sort(); // learn about this, it takes parameters also. And perhaps sort doesnt work with numbers, it works lexicographically.
    // fruits.sort((a,b)=>a.name.localeCompare(b.name));
    // fruits.sort((a,b)=>a.calories-b.calories);

    const lowCalFruits=fruits.filter(fruit=>fruit.calories<100);

    const listItems=fruits.map(fruit=><li>{fruit.name}: &nbsp;{fruit.calories}</li>)

    const lowCalItems=lowCalFruits.map(fruit=><li>{fruit.name}: &nbsp;{fruit.calories}</li>)

    return (
        <div>
            <h3>All Fruits:</h3>
            <ol>{listItems}</ol>
            <h3>Low Calorie Fruits:</h3>
            <ol>{lowCalItems}</ol>
        </div>
    );
}