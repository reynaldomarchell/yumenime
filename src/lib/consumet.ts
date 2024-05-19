import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_CONSUMET}`;

export async function getRecentEpisode() {
  try {
    const { data } = await axios.get(`${url}/gogoanime/recent-episodes`, {
      params: { page: 1, type: 1 },
    });
    return data.results;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function getEpisodeInfo(animeId: string | null) {
  try {
    const { data } = await axios.get(`${url}/gogoanime/info/${animeId}`);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function getStreamingLinks(episodeId: string) {
  try {
    const { data } = await axios.get(`${url}/gogoanime/watch/${episodeId}`);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
