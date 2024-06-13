import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTest, postTest } from "../redux/slices/testSlice";
import { Link } from "react-router-dom";

export default function Testapi() {
  document.body.style.backgroundColor = "#FFFFFF";
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.test.data1);
  const data2 = useSelector((state) => state.test.data2);

  const users = useSelector((state) => state.auth.users); // Ubah dari `user` menjadi `users`
  const erroruser = useSelector((state) => state.auth.error);

  const isLoading = useSelector((state) => state.test.isLoading);
  const error = useSelector((state) => state.test.error);

  const [inputValue, setInputValue] = useState("");
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (isFirstLoad) {
      dispatch(fetchTest());
      setIsFirstLoad(false);
    }
  }, [dispatch, isFirstLoad]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTest({ newData: inputValue }));
    setInputValue("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Test API Result</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading data.</p>}
      {data1 && data2 && (
        <div>
          <h2>Data1:</h2>
          {data1.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <h2>Data2:</h2>
          {data2.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2"
          placeholder="Enter new data"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
          Submit
        </button>
      </form>

      <p>{users["role"]}</p>

      <Link to="/sewa">sewaa</Link>
    </div>
  );
}
