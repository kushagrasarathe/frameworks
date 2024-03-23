import { init, fetchQuery } from "@airstack/node";

init("");

export const getUserAllData = async (userFid: number) => {
  try {
    const { data, error } = await fetchQuery(userFidQuery, {
      fid: userFid,
    });

    console.log("data:", data);
    console.log("error:", error);
  } catch (error) {
    console.log(error);
  }
};
