function Header() {   // function name can also be different from file name, just export that function name and import the same function name
    return (
        <header>
            <h1>Header Component</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    )
}

export default Header;