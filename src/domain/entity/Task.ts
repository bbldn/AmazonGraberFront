interface Task {
    id?: number;
    total: number;
    progress: number;
    description?: string;
    expiration_at?: string;
}

export type {Task};