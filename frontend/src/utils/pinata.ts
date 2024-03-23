import axios from "axios";

const base_url = "https://api.pinata.cloud/v3/farcaster/";

export const getUserCasts = async (userfid: number) => {
  const url = `casts?fid=${userfid}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.JWT}`,
  };
  try {
    const data = await fetch(`${base_url}${url}`, {
      headers: headers,
    });

    console.log(data);
    const res = data.json();
    console.log(res);
    // {"result":[{"fid":3,"fname":"danromero.eth","username":"dwr.eth","rank":1,"score":0.026320092380046844,"percentile":100}]}%
    // const result = data.result
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (userfid: number) => {
  const url = `users/${userfid}`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.JWT}`,
  };
  try {
    const data = await fetch(`${base_url}${url}`, {
      headers: headers,
    });

    console.log(data);
    const res = data.json();
    console.log(res);
    // {"result":[{"fid":3,"fname":"danromero.eth","username":"dwr.eth","rank":1,"score":0.026320092380046844,"percentile":100}]}%
    // const result = data.result
  } catch (error) {
    console.log(error);
  }
};
