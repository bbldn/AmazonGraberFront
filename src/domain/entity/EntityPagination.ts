import type {Pagination} from "app/domain/entity/Pagination";

interface EntityPagination<T> {
    data: Array<T>;
    pagination: Pagination;
}

enum EntityPaginationFields {
    data = 'data',
    pagination = 'pagination',
}

export type {EntityPagination};
export {EntityPaginationFields};