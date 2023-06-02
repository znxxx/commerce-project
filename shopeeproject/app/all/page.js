"use client";
import { useState, useEffect } from "react";
// import data from "../data.json";
import axios from "axios";

export default function All() {
  const [filterOne, setFilterOne] = useState("");
  const [filterTwo, setFilterTwo] = useState("");
  const [filterThree, setFilterThree] = useState("");
  const [filterFour, setFilterFour] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState("1");

  useEffect(() => {
    getData()
  }, []);
  function getData() {
    fetch(`http://localhost:3000/backendTest/account/pages/${page}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) =>
        res.json()
      )
      .then((response) => setData(response.result))
      .catch((err) => {
        console.error("err", err);
      });
  }

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        <div className="bg-yellow-100 border-2 border-black p-2 rounded-md">
          <input
            type="checkbox"
            onChange={() =>
              filterOne ? setFilterOne("") : setFilterOne("safe")
            }
          />
          MR.A <br />
          <input
            type="checkbox"
            onChange={() =>
              filterTwo ? setFilterTwo("") : setFilterTwo("oat")
            }
          />
          MR.B <br />
          <input
            type="checkbox"
            onChange={() =>
              filterThree ? setFilterThree("") : setFilterThree("MR.C")
            }
          />
          MR.C <br />
          <input
            type="checkbox"
            onChange={() =>
              filterFour ? setFilterFour("") : setFilterFour("MR.D")
            }
          />
          MR.D <br />
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-16 border-2 border-black p-2 w-full m-2 bg-green-50">
          <button onClick={() => getData()}>click</button>
          {data &&
            data
              .filter((d) => {
                return (
                  d.user === filterOne ||
                  d.user === filterTwo ||
                  d.user === filterThree ||
                  d.user === filterFour
                );
              })
              .map((d) => (
                <div className="bg-green-50">
                  <p>{d.user}</p>
                  <p>{d.product_name}</p>
                  {/* <p>{d.Picture}</p> */}
                  <p>{d.photo_description}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
