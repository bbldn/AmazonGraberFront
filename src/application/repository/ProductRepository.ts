import {injectable} from "inversify";
import {container} from "app/inversify.config";
import type {Product} from "app/domain/entity/Product";
import type {EntityPagination} from "app/domain/entity/EntityPagination";
import axios from "axios";

@injectable()
class ProductRepository {
    public async getAllWithPagination(
        offset: number,
        length: number
    ): Promise<EntityPagination<Product>> {
        const response = await axios.get(`/products/search?offset=${offset}&length=${length}`);

        return response.data;
    }
}

container.bind<ProductRepository>(ProductRepository).toSelf().inSingletonScope();

export {ProductRepository};