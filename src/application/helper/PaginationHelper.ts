import type {Pagination} from "app/domain/entity/Pagination";

class PaginationHelper {
    public static resetAndCreateCopy(pagination: Pagination): Pagination {
        return {
            ...pagination,
            total: 1,
            current: 1,
        };
    }

    public static reset(pagination: Pagination): Pagination {
        pagination.total = 1;
        pagination.current = 1;

        return pagination;
    }

    public static mutateAndCreateCopy(paginationA: Pagination, paginationB: any): Pagination {
        return {
            ...paginationA,
            ...paginationB,
        };
    }

    public static mutate(paginationA: Pagination, paginationB: any): Pagination {
        for (const [key, value] of Object.entries(paginationB)) {
            if (paginationA.hasOwnProperty(key) && value) {
                (paginationA as any)[key] = value;
            }
        }

        return paginationA;
    }

    public static getOffset(pagination: Pagination): number {
        return (pagination.current - 1) * pagination.pageSize;
    }

    public static getLength(pagination: Pagination): number {
        return pagination.pageSize;
    }

    public static getOffsetAndLength(pagination: Pagination): [number, number] {
        return [this.getOffset(pagination), this.getLength(pagination)];
    }

    public static emptyAndCreateCopy(
        total?: number,
        current?: number,
        pageSize?: number,
    ): Pagination {
        return {
            total: total ?? 1,
            current: current ?? 1,
            pageSize: pageSize ?? 10,
        };
    }
}

export {PaginationHelper};