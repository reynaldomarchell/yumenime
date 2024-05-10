export type ConsumetResponse<T> = {
  currentPage: string;
  hasNextPage: boolean;
  results: T[];
};

export type Recent = {
  id: string;
  episodeId: string;
  episodeNumber: number;
  title: string;
  image: string;
  url: string;
};

export type Popular = {
  id: string;
  title: string;
  image: string;
  url: string;
  genres: string[];
};

export interface Search extends Omit<Popular, "genres"> {
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
} & Popular;

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
