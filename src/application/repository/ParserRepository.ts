import "reflect-metadata";
import type {StartParse} from "app/domain/input/StartParse";
import axios from "axios";
import {injectable} from "inversify";
import {container} from "app/inversify.config";
import type {Task} from "app/domain/entity/Task";

@injectable()
class ParserRepository {
    public async getStatus(): Promise<Task | undefined> {
        const response = await axios.get('/parser/status');

        const {data} = response;

        return '' !== data ? data : undefined;
    }

    public async startLoading(input: StartParse): Promise<string> {
        const response = await axios.post('/parser/start', input);
        if (200 === response.status) {
            return response.data;
        }

        throw response.data;
    }
}

container.bind<ParserRepository>(ParserRepository).toSelf().inSingletonScope();

export {ParserRepository};