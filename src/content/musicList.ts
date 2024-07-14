interface Links {
  platform: string;
  url: string;
}

interface Music {
  title: string;
  artist: string;
  links: Links[];
  month: string;
  year: number;
}

export const musicList: Music[] = [
  {
    title: "JUSTICE",
    artist: "Dreamcatcher",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=Wkn6s8RuUDg" },
      { platform: "Spotify", url: "https://open.spotify.com/track/4GyhMaDPEILMPp62PUjP3j?si=1fe63b0ab39f4610" },
    ],
    month: "July",
    year: 2024, 
  },
];
