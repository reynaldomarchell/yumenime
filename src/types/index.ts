export type ConsumetResponse<T> = {
  currentPage: string;
  hasNextPage: boolean;
  results: T[];
};

export type RecentTypes = {
  id: string;
  episodeId: string;
  episodeNumber: number;
  title: string;
  image: string;
  url: string;
};

// export type Popular = {
//   id: string;
//   title: string;
//   image: string;
//   url: string;
//   genres: string[];
// };

export type TrendingTypes = {
  id: number;
  status: string;
  title: {
    userPreferred: string;
    romaji: string;
    english: string;
    native: string;
  };
  genres: string[];
  description: string;
  format: string;
  bannerImage: string | null;
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
  };
  season: string;
  seasonYear: number;
};
export interface Search extends Omit<TrendingTypes, "genres"> {
  releaseDate: string;
  subOrDub: "sub" | "dub";
}

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
