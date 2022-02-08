import { useState, useEffect } from "react";
import ListItem from "./ListItem";
import Button from "./Button";
import mockMatch from "./api";
import useDebounce from "./useDebounce";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [inputText, setInputText] = useState("");
  const [inputType, setInputType] = useState("blog");
  const [foundItems, setFoundItems] = useState([]);

  const findResults = (inputText, inputType) => {
    try {
      setLoading(true);
      setFoundItems([]);

      const match =
        inputText.length > 2 && inputType
          ? mockMatch(inputType, inputText)
          : [];

      match.inputText === inputText &&
        match.inputType === inputType &&
        setFoundItems(match.data);

      setLoading(false);
    } catch (error) {
      setFoundItems([]);
      setLoading(false);
    }
  };

  useDebounce(() => findResults(inputText, inputType), 1500, [inputText]);

  useEffect(() => {
    findResults(inputText, inputType);
  }, [inputType]);

  useEffect(() => {
    setLoading(true);
    setFoundItems([]);
  }, [inputText]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "30rem",
          height: "5rem",
          padding: "1rem 1rem",
          marginTop: "5rem",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        {showSearch ? (
          <input
            type="text"
            style={{
              width: "80%",
              padding: "1rem",
              fontSize: "1rem",
              fontWeight: "500",
              borderRadius: "15px",
              color: "gray",
            }}
            value={inputText}
            onChange={(event) => {
              setInputText(event.target.value);
            }}
          />
        ) : (
          <div style={{ width: "80%" }}></div>
        )}
        <button
          onClick={() => {
            if (showSearch) {
              setInputText("");
              setShowSearch(false);
            } else {
              setShowSearch(true);
            }
          }}
          style={{
            width: "10%",
            border: "none",
            padding: "8px 16px",
            margin: "0px 5px",
            fontSize: "24px",
            fontWeight: "700",
            cursor: "pointer",
            backgroundColor: "white",
            color: "black",
          }}
        >
          {showSearch ? "X" : "@"}
        </button>
      </div>
      {inputText.length > 2 && inputType && (
        <div
          style={{
            display: "flex",
            width: "30rem",
            padding: "0.5rem",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "0.5rem",
              marginBottom: "1rem",
              justifyContent: "center",
            }}
          >
            <Button
              text={"Blog"}
              value={"blog"}
              selected={inputType}
              setSelectedType={setInputType}
            />
            <Button
              text={"Ebook"}
              value={"ebook"}
              selected={inputType}
              setSelectedType={setInputType}
            />{" "}
            <Button
              text={"Course"}
              value={"course"}
              selected={inputType}
              setSelectedType={setInputType}
            />{" "}
            <Button
              text={"Video"}
              value={"video"}
              selected={inputType}
              setSelectedType={setInputType}
            />{" "}
            <Button
              text={"Event"}
              value={"event"}
              selected={inputType}
              setSelectedType={setInputType}
            />
          </div>
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              margin: "0",
              padding: "0",
              marginBottom: "0.4rem",
              "list-style-type": "none",
            }}
          >
            {loading ? (
              <h3>Loading...</h3>
            ) : foundItems?.length ? (
              foundItems?.map((item) => {
                return (
                  <ListItem
                    title={item.title}
                    link={item.link}
                    image={item.image}
                  />
                );
              })
            ) : (
              <h3>No Result</h3>
            )}
          </ul>
          <p style={{ marginBottom: "1.2rem", color: "gray" }}>
            Powered by MyWays AI Search
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
