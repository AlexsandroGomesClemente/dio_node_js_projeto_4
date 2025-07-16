import { repositoryPodCast } from "../repositories/podcasts-repository";

export const serviceListEpisodes = async () => {
  const data = await repositoryPodCast();
  return data;
};
