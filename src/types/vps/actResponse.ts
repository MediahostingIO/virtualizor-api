import { BasicResponse } from "../basicResponse";

export interface ActResponse extends BasicResponse {
    done: boolean;
    done_msg: string;
    vsop: Vsop;
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
