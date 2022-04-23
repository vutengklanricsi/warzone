import { PUBLIC_KEY, PRIVATE_KEY } from "../../apiKeys";
import md5 from "js-md5";

export const getMarvelData = async (queryKey) => {
  const ts = Number(new Date()).toString();
  md5(ts + PRIVATE_KEY + PUBLIC_KEY);
  const hash = md5.create();
  hash.update(ts + PRIVATE_KEY + PUBLIC_KEY);
  hash.hex();

  try {
    const comics = queryKey?.queryKey[0];
    const URL = `https://gateway.marvel.com:443/v1/public/${comics}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return "no data is founded";
  }
};
