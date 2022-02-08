const ListItem = ({ title, image, link }) => {
  return (
    <li
      style={{
        width: "25rem",
        display: "flex",
        border: "2px solid grey",
        borderRadius: "5px",
        margin: "5px 0",
      }}
    >
      <a
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        href={link}
      >
        <img
          style={{
            height: "4rem",
            width: "auto",
            margin: "0px 10px",
            padding: "5px",
          }}
          src={image}
          alt={title || "image"}
        />
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: "500",
            margin: "0px 15px",
            padding: "0px 2px",
          }}
        >
          {title}
        </h3>
      </a>
    </li>
  );
};

export default ListItem;
