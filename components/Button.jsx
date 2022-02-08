const Button = ({ text, value, selected, setSelectedType }) => {
  return (
    <button
      style={{
        border: "2px solid",
        borderRadius: "5px",
        padding: "8px 16px",
        margin: "0px 5px",
        fontSize: "14px",
        cursor: "pointer",
        backgroundColor: selected === value ? "#2196F3" : "white",
        color: selected === value ? "white" : "black",
        borderColor: selected === value ? "#2196F3" : "black",
      }}
      onClick={() => setSelectedType(value)}
    >
      {text}
    </button>
  );
};

export default Button;
