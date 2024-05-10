import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_AMVSTRM}`;

export async function getTrendingAnime() {
  try {
    const { data } = await axios.get(`${url}/trending`);
    return data.results;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
