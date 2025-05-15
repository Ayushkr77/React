// Conditional rendering in React means showing different UI (or hiding some) based on conditions like state, props, or logic.


export default function UserGreeting(props) {

    const welcmMsg=<h2>Welcome {props.username}</h2>;
    const guestMsg=<h2>Please Login</h2>;

    // Using if else
    // if(props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else return <h2>Please Login</h2> // here else is not even required

    // Using ternary operator
    return props.isLoggedIn?welcmMsg:guestMsg;

    // Can also use Short-circuit(&&) instead of if else and ternary operator
}