export interface All {
    id: string;
    desc: string;
    completed: boolean;
}

export interface AllState {
    allCount: number ;
    alls: All[],
    completed: number;
    pending: number;
}