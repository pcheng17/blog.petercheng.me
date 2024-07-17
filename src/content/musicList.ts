interface Links {
  platform: string;
  url: string;
}

interface Music {
  title: string;
  artist: string;
  links: Links[];
  date: string;
  description?: string;
  albumCover?: string;
}

export const musicList: Music[] = [
  {
    title: "JUSTICE",
    artist: "Dreamcatcher",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=Wkn6s8RuUDg" },
      { platform: "Spotify", url: "https://open.spotify.com/track/4GyhMaDPEILMPp62PUjP3j?si=1fe63b0ab39f4610" },
    ],
    date: "2024-07",
    description: "What an amazing song, holy crap.",
    albumCover: "https://i.scdn.co/image/ab67616d00001e021be74ecf7c58d22c00eea468"
  },
  {
    title: "Zombie",
    artist: "Day6",
    links: [
      { platform: "YouTube", url: "https://www.youtube.com/watch?v=k8gx-C7GCGU" },
      { platform: "Spotify", url: "https://open.spotify.com/track/0vPLEyGAlxDAMxFvnwHgUB?si=2b75b1177dbb43ac" },
    ],
    date: "2020-05",
    description: "This song reminds me of the beginning of the panemic time period, when I first discovered this song. It has some kind of sentimental value because of it.",
    albumCover: "https://i.scdn.co/image/ab67616d00001e02a220092391684fd27f02affb"
  },
];
