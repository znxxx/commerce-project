"use client";
import { Fragment, useState } from "react";
import { Modal } from "../../components/modal"

export default function newitem() {
    const [user, setUser] = useState();
    const [product, setProduct] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [category, setCategory] = useState();
    const [pic, setPic] = useState();
    const [picDes, setPicDes] = useState();

    const categoryOptions = [
        { value: "", label: "Select category" },
        {value : 'snack', label: 'Snack'},
        {value : 'food', label:'Food'},
        {value: 'electronic', label:'Electronic'},
        {value: 'toy', label: 'Toy'}
    ]

    function handleSubmit() {
        let data = {
            users: user,
            inventory_name: product,
            price: price,
            quantity: quantity,
            category_name: category
        };
        fetch("http://localhost:3100/shopee_api/user/", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log("res", res);
            setSubmissionMessage("Submitted successfully")
          })
          .catch((err) => {
            console.error("err", err);
            setSubmissionMessage("An error occured while submitting the data")
          });
      }

  return (
    <Fragment>
    <div>
        <div>Insert item detail</div>
        <div>user
            <input className="border-2 border-black" type={'text'} value={user} onChange ={(e) => setUser(e.target.value)} />
        </div>
        <div>product name
            <input className="border-2 border-black" type={'text'} value={product} onChange={(e) => setProduct(e.target.value)}/>
        </div>
        {/* <div>
            <input type={ 'file' }/>
        </div> */}
        <div>price
        <input className="border-2 border-black" type={'number'} value={price} onChange ={(e) => setPrice(e.target.value)} />
        </div>
        <div>quantity
        <input className="border-2 border-black" type={'number'} value={quantity} onChange ={(e) => setQuantity(e.target.value)} />
        </div>
        <div>
            <select className="border-2 border-black" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categoryOptions.map((cat) => (
                <option  value={cat.value}>{cat.label}</option>
            ))}
            </select>
        </div>
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => handleSubmit()}>submit</button>
        </div>
    </div>
    <modal/>
    </Fragment>
  )
};
