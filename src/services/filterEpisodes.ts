import { FilterPodcastInterface } from "../interfaces/filterPodcastInterface";
import { repositoryPodCast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/statusCode";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<FilterPodcastInterface> => {
  let responseFormat: FilterPodcastInterface = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodCast(queryString);

  if (data) {
    responseFormat.statusCode = StatusCode.OK;
    responseFormat.body = data;
  } else {
    responseFormat.statusCode = StatusCode.ERROR;
  }

  return responseFormat;
};
