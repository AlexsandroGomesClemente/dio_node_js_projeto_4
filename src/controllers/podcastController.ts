import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/listEpisodes";
import { serviceFilterEpisodes } from "../services/filterEpisodes";
import { StatusCode } from "../utils/statusCode";
import { ContentType } from "../utils/contentType";
import { FilterPodcastInterface } from "../interfaces/filterPodcastInterface";

export const getListEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceListEpisodes();
  response
    .writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON })
    .end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: FilterPodcastInterface = await serviceFilterEpisodes(
    request.url
  );
  response
    .writeHead(content.statusCode, { "Content-Type": ContentType.JSON })
    .end(JSON.stringify(content.body));
};
