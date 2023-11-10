import query from "../utils/query";

export const getAllRequests = async () => {
  try {
    return await query("SELECT * FROM logs");
  } catch (error: any) {
    throw new Error(error);
  }
};
