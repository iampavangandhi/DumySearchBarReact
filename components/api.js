import data from "./data.json";

const mockMatch = (inputType, inputText) => {
  try {
    console.log("API Call", inputText);
    const match = [];
    for (let index = 0; index < data.length; index++) {
      const regex = new RegExp(inputText, "gi");
      if (data[index].title.match(regex) && data[index].type === inputType) {
        match.push(data[index]);
      }
      if (match.length === 4) {
        break;
      }
    }

    return { inputText, inputType, data: match };
  } catch (error) {
    return { inputText, inputType, data: [] };
  }
};

export default mockMatch;
