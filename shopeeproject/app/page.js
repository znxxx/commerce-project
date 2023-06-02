"use client";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState();
  const [product, setProduct] = useState();
  const [picture, setPicture] = useState();
  const [description, setDescription] = useState();
  const [base64IMG, setBase64IMG] = useState();

  const convertToBase64 = (selectedFile) => {
    console.log(selectedFile)
    const reader = new FileReader()

    reader.readAsDataURL(selectedFile)

    reader.onload = () => {
      console.log('called: ', reader)
      setBase64IMG(reader.result)
    }
  }

  function handleSubmit() {
    let data = {
      user: user,
      prod_name: product,
      picture: base64IMG,
      photo: description,
    };
    fetch("http://localhost:3000/backendTest/users/postUser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.error("err", err);
      });
  }
  let styleTitle = { color: "red" };
  return (
    <div>
      <div className="red">
        User{" "}
        <input
          className="border-2 border-black "
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div style={{ color: "red" }}>
        Product{" "}
        <input
          className="border-2 border-black"
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
      </div>
      <div style={styleTitle}>
        Picture{" "}
        <input
          type="file"
          onChange={(e) => {setPicture(URL.createObjectURL(e.target.files[0])), convertToBase64(e.target.files[0])}}
        />
      </div>
      <div>
        Description{" "}
        <input
          className="border-2 border-black"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <img src={picture}/>
      <button onClick={() => handleSubmit()}>submit</button>
      <img
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg=="
        alt="Red dot"
      />
    </div>
  );
}
