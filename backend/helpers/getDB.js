import fs from "fs";

export const getDB = async () => {
  try {
    const data = fs.readFileSync("database/DB.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    return null;
  }
};
