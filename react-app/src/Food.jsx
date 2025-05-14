export default function Food() {

    // JS code outside return statement
    const food1="Orange";
    const food2="Banana";

    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toLocaleUpperCase()}</li>
        </ul>
    )
}