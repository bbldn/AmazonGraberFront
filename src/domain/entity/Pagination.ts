interface Pagination {
    total: number;
    current: number;
    pageSize: number;
}

enum PaginationFields {
    total = 'total',
    current = 'current',
    pageSize = 'pageSize',
}

export type {Pagination};
export {PaginationFields};