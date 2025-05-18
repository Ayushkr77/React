import { useRef } from "react";

export default function Form2() {
  const nameRef = useRef();
  const pswdRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const name = nameRef.current.value.toUpperCase();
    const password = pswdRef.current.value;

    console.log("Name:", name);
    console.log("Password:", password);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="firstName" ref={nameRef} />
        <br />
        <label>Password</label>
        <input type="text" name="password" ref={pswdRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
