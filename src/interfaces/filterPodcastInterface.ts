import { Podcast } from "./podCastInterface";

export interface FilterPodcastInterface {
  statusCode: number;
  body: Podcast[];
}
