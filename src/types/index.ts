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

export type SearchTypes = {
  id: number;
  status: string;
  title: {
    romaji: string;
  };
  coverImage: {
    extraLarge: string;
    large: string;
    medium: string;
  };
  episodes: number;
  format: string;
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
