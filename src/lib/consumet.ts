import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_CONSUMET}`;

export async function getRecentEpisode() {
  try {
    const { data } = await axios.get(`${url}/recent-episodes`, {
      params: { page: 1, type: 1 },
    });
    return data.results;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
