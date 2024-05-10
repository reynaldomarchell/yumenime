export type TrendingTypes = {
  id: number;
  title: {
    romaji: string;
  };
  genres: string[];
  description: string;
  bannerImage: string | null;
  coverImage: {
    extraLarge: string;
  };
};
export interface Search extends Omit<TrendingTypes, "genres"> {
  releaseDate: string;
  subOrDub: "sub" | "dub";
}

export type RecentTypes = {
  id: string;
  episodeId: string;
  episodeNumber: number;
  title: string;
  image: string;
};

export type PopularTypes = {
  id: number;
  status: string;
  title: {
    romaji: string;
  };
  coverImage: {
    extraLarge: string;
  };
};

export type AnimeInfo = {
  totalEpisodes: number;
  image: string;
  releaseDate: string;
  description: string;
  subOrDub: "sub" | "dub";
  type: string;
  otherName: string;
  episodes: Episodes[];
} & TrendingTypes;

type Episodes = {
  id: string;
  number: number;
  url: string;
};

export type Watch = {
  headers: {
    Referer: string;
  };
  sources: Source[];
  download: string;
};

type Source = {
  url: string;
  isM3U8: boolean;
  quality: string;
};
