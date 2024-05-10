import axios from "axios";

const CONSUMET_URL = `${process.env.NEXT_PUBLIC_CONSUMET}`;

export async function getPopularAnime() {
  try {
    const { data } = await axios.get(`${CONSUMET_URL}/top-airing`, {
      params: { page: 1 },
    });
    return data.results;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
