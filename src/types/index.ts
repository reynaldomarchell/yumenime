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
    large: string;
    medium: string;
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
    large: string;
    medium: string;
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
  genres: string[];
  format: string;
};

export type RelationTypes = {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
    medium: string;
  };
  bannerImage: string | null;
  episodes: number;
  type: string;
  format: string;
};

export type InfoTypes = {
  id: number;
  id_provider: {
    idGogo: string;
    idGogoDub: string;
  } | null;
  title: {
    romaji: string;
  };
  description: string;
  coverImage: {
    large: string;
    medium: string;
  };
  bannerImage: string | null;
  genres: string[];
  tags: {
    id: number;
    name: string;
  }[];
  status: string;
  format: string;
  episodes: number;
  year: number;
  season: string;
  duration: number;
  startIn: {
    year: number;
    month: number;
    day: number;
  };
  endIn: {
    year: number;
    month: number;
    day: number;
  };
  score: {
    decimalScore: number;
  };
  trailer: {
    id: string;
  } | null;
  studios: {
    name: string;
  }[];
  relation: RelationTypes[];
};

export type RecomendationTypes = {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
    medium: string;
  };
  bannerImage: string | null;
  episodes: number;
  type: string;
  format: string;
  status: string;
};

export type EpisodeListTypes = {
  id: string;
  number: number;
};

export type EpisodeInfoTypes = {
  id: string;
  title: string;
  totalEpisodes: number;
  image: string;
  subOrDub: string;
  episodes: EpisodeListTypes[];
} | null;

export type SourcesTypes = {
  url: string;
  isM3U8: boolean;
  quality: string;
};

export type StreamingTypes = {
  headers: {
    Referer: string;
  };
  sources: SourcesTypes[];
  download: string;
};
