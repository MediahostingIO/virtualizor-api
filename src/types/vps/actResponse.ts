export interface ActResponse {
    title: string;
    done: boolean;
    done_msg: string;
    vsop: Vsop;
    timenow: number;
    time_taken: string;
}

export interface Vsop {
    action: string;
    id: number;
    serid: string;
    output: string;
    status: Status;
}

export interface Status {
    "51": number;
}
