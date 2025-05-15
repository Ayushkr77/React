import { useState } from "react";

export default function MyComponent1() {
    const [name,setName]=useState("Guest");
    const [qty,setQty]=useState(1);
    const [comment,setComment]=useState("");
    const [payment, setPayment]=useState("");
    const [shipping, setShipping]=useState("");

    function nameHandle(event) {
        setName(event.target.value);
    }
    function qtyHandle(e) {
        setQty(e.target.value);
    }
    function commentHandle(e) {
        setComment(e.target.value);
    }
    function paymentHandle(e) {
        setPayment(e.target.value);
    }
    function shippingHandle(e) {
        setShipping(e.target.value);
    }

    return (
        <div>
            <input value={name} onChange={nameHandle}></input>
            <p>Name: {name}</p>

            <input value={qty} onChange={qtyHandle} type="number" />
            <p>Quantity: {qty}</p>

            <textarea value={comment} onChange={commentHandle} placeholder="Enter something"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={paymentHandle}>
                <option value="">Select an option</option>
                <option value="Visa">VISA</option>
                <option value="Mastercard">MASTERCARD</option>
                <option value="Giftcard">GIFTCARD</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping==="Pick Up"} onChange={shippingHandle} />
                Pick Up
            </label>
            <br/>
            <label>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={shippingHandle} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}