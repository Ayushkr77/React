export default function Button1() {
    const handleClick=()=> console.log("Hello");
    const handleClick1=(name)=> console.log(name+"clicking me");

    let cnt=0;
    const handleClick2=(name,e)=>{
        cnt++;
        console.log(`${name} clicked ${cnt} times`);
        if(cnt>3) {
            e.target.style.display="none";
        }
    }

    const handleClick3=(e)=> {
        // e.preventDefault();
        console.log(e);
        e.target.textContent="Double clicked";
        e.target.style.color="red";
    }
    
    return (
        <div>
            <button onClick={handleClick}>Click me😊</button>
            <button onClick={()=>handleClick1("Ayush")}>Click me😊</button> {/* Writing arrow function bcz since here is paranthesis which means this function will be invoked right away which we dont want, thats why arrow function here*/}
            <button onClick={(e)=>handleClick2("Ayush",e)}>Click me😊</button>

            <button onDoubleClick={(e)=>handleClick3(e)}>Double Click me😊</button>  {/*  receiving e in the arrow function — (e) — and then passing it into your actual handler — handleClick3(e).   onDoubleClick expects a function. If you want to do more than just call the handler (e.g., pass arguments or logic), you need an arrow function. That arrow function receives the event as e and passes it forward. U can try same with onClick instead of dblClick*/}
        </div>
    )
}