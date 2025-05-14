// This file is for learning css 
// External, modules, inline
// ✅ 1. External CSS
// Regular .css file (like App.css)
// Imported into your component or App.js
// Affects global scope unless namespaced
// 📌 Use when: Styling is general or reused across multiple components.

// ✅ 2. CSS Modules
// Filename is like Component.module.css
// Styles are scoped locally to the component
// Prevents class name conflicts
// 📌 Use when: You want component-specific styles without affecting others.

// ✅ 3. Inline Styling
// Use style={{ key: 'value' }} directly in JSX
// JavaScript object format
// 📌 Use when: You need dynamic, quick, or conditional styles.


import styles from "./Button.module.css"
export default function Button() {

    const inlineStyles={
        backgroundColor: "rgb(72, 72, 160)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    return (
        <div>
            {/* <button className="btn">Click Me</button> */}

            {/* Using CSS Module. U can see in inspect the class name, that is generated and will be unique         */}
            <button className={styles.btn}>Click Me</button> 

            <button style={inlineStyles}>Click Me</button>
        </div>
    )
}