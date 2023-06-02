"use client";
import { useState, useEffect } from "react";

export default function All() {
  const [snack, setSnack] = useState("");
  const [food, setFood] = useState("");
  const [electronic, setElectronic] = useState("");
  const [toy, setToy] = useState("");
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    fetch(`http://localhost:3100/shopee_api/account/getall`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => setProducts(response.result))
      .catch((err) => {
        console.error("err", err);
      });
  }
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  return (
    //check box}}}
    <div className="grid grid-cols-12">
      <div className="col-span-12 bg-black h-8 bg-gradient-to-r from-[#ee4d2d] from-0% to-[#ff7337] to-60%">
        <nav>
            <a href="/newitem">new item</a>
        </nav>
      </div>
      <div className="col-span-12 bg-black h-20 bg-gradient-to-r from-[#ee4d2d] from-0% to-[#ff7337] to-60%">
      <input
   type="text"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />
      </div>
      <div className="col-span-4 border-2 border-black m-4">
        <div>
          <input
            type={"checkbox"}
            // checked = {checked}
            onClick={(e) => (snack ? setSnack("") : setSnack("snack"))}
          />
          Snacks
        </div>
        <div>
          <input
            type={"checkbox"}
            onClick={(e) => (food ? setFood("") : setFood("food"))}
          />
          Foods
        </div>
        <div>
          <input
            type={"checkbox"}
            onClick={(e) =>
              electronic ? setElectronic("") : setElectronic("electronic")
            }
          />
          Electronics
        </div>
        <div>
          <input
            type={"checkbox"}
            onClick={(e) => (toy ? setToy("") : setToy("toy"))}
          />
          Toys
        </div>
        <div>
          <button
            onClick={() => {
              setSnack("");
              setFood("");
              setElectronic("");
              setToy("");
            }}
          >
            clear filter
          </button>
        </div>
      </div>
      <div className="col-span-8  border-2 border-black m-4 grid grid-cols-4">
        {products
          .filter((d) => {
            if (
              snack === "" &&
              food === "" &&
              toy === "" &&
              electronic === ""
            ) {
              return true; // No filter selected, display all items
            } else {
              return (
                d.category_name === snack ||
                d.category_name === food ||
                d.category_name === toy ||
                d.category_name === electronic
              );
            }
          })
          .map((d) => (
            <div className="border border-sky-500 rounded-lg m-4">
              <p>name: {d.inventory_name}</p>
              <p>price: {d.price}</p>
              <p>qty: {d.quantity}</p>
              <p>category: {d.category_name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
