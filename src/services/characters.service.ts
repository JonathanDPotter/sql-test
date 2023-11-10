import query from "../utils/query";

interface charData {
  name: string;
  homePlanet: string | "Unknown";
  age: number | "Unknown";
  gender: "Male" | "Female";
}

export const getCharacters = async (id: string | undefined) => {
  try {
    return id
      ? await query("SELECT * FROM characters WHERE ID=?", [id])
      : await query("SELECT * FROM characters");
  } catch (error: any) {
    throw new Error(error);
  }
};

export const addCharacter = async (data: charData) => {
  try {
    return await query("INSERT INTO characters SET ?", [data]);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const updateCharacter = async (id: string, data: charData) => {
  try {
    return await query("UPDATE characters SET ? WHERE ID=?", [data, id]);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteCharacter = async (id: string) => {
  try {
    return await query("DELETE FROM characters WHERE ID = ?", [id]);
  } catch (error: any) {
    throw new Error(error);
  }
};
