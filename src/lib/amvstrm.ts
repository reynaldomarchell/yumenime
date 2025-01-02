import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_AMVSTRM}/api`;

export async function getTrendingAnime() {
  try {
    const { data } = await axios.get(`${url}/v2/trending`);
    return data.results;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function getPopularAnime() {
  try {
    const { data } = await axios.get(`${url}/v2/popular`);
    return data.results;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function getSearchedAnime(query: string) {
  try {
    const { data } = await axios.post(`${url}/v2/search`, { search: query });
    return data.results;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function getAnimeInfo(id: string) {
  try {
    const { data } = await axios.get(`${url}/v2/info/${id}`);
    return data;
  } catch (err: any) {
    return null;
  }
}

export async function getRecomendations(id: string) {
  try {
    const { data } = await axios.get(`${url}/v2/recommendations/${id}`);
    return data.results;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
