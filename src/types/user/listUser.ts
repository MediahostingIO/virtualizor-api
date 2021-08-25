import { BasicResponse } from "../basicResponse";
import { User } from "./editUser";

export interface ListUserDTO {
    page?: number;
    reslen?: number;
    uid?: number;
    email?: string;
    user_type?: number;
}

export interface ListUserResponse extends BasicResponse {
    users: { [key: string]: User }
}
