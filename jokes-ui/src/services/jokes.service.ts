import { AxiosResponse } from "axios";
import http from "../http-common";
import IJoke from "../types/joke.type";

class JokesService {

    random(): Promise<AxiosResponse<IJoke, any>> {
        return http.get<IJoke>("/");
    }

    create(joke: IJoke): Promise<AxiosResponse<IJoke, any>> {
        return http.post<IJoke>("/", joke);
    }
}
export default new JokesService();