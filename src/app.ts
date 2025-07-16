import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcastController";
import { Routes } from "./routes/routes";
import { Methods } from "./utils/methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  //baseUrl
  const baseUrl = request.url?.split("?")[0];

  //list podcasts
  if (request.method === Methods.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === Methods.GET && baseUrl === Routes.EPISODE) {
    await getFilterEpisodes(request, response);
  }
};
