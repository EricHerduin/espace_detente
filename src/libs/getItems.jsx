import data from "../data/database.json";

export default function getItems() {
  return data.map((item) => {
    return {
      _id: item.title,
      title: item.title,
    };
  });
}
