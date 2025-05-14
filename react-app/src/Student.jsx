// Props (short for properties) are a way to pass data from one component to another — usually from parent to child.
// Think of props as: Function parameters for components. Just like how you pass arguments into a function, you pass props into components to customize their behavior or content.
// Key Points:
// Props are read-only (child can’t modify them).
// Props help in making reusable and dynamic components.
// Props can be strings, numbers, arrays, objects, functions, etc.


// propTypes: a mechanism that ensures that the passed value is of the correct data type.    age: PropTypes.number.isRequired,  // age is a required number




import PropTypes from 'prop-types'; 

export default function Student(props) {

    // Refer index.css file for css styling

    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent?"Yes":"No"}</p>
        </div>
    )
}

// Not showing any error or warning :)   I guess its not supported in modern react version
Student.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number.isRequired,
    isStudent:PropTypes.bool
}

// Default props
Student.defaultProps = {
    name: 'Guest',
    isStudent: false  // Default value for `isStudent` is false
};
