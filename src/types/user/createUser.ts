import { Virt } from "../vps/createVps";
import { BasicResponse } from "../basicResponse";

export interface CreateUserDTO {
    priority: number;
    newpass: string;
    newemail: string;
    fname: string;
    lname: string;
    dnsplan_id?: number;
    acl_id?: number;
    num_vs?: number;
    num_users?: number;
    space?: number;
    burst?: number;
    bandwidth?: number;
    cpu?: number;
    cores?: number;
    cpu_percent?: number;
    num_cors?: number;
    num_ipv4?: number;
    num_ipv6_subnet?: number;
    num_ipv6?: number;
    network_speed?: number;
    upload_speed?: number;
    band_suspend?: 0 | 1;
    service_period?: number;
    allowed_virts?: Virt[];
    sgs?: any[];
    mgs?: any[];
}

export interface AddUserResponse extends BasicResponse {
    done: string;
    user_plans: any[];
    mgs: { [key: string]: Mg };
    servergroups: { [key: string]: Servergroup };
}

export interface Mg {
    mgid: string;
    mg_name: string;
    mg_desc: string;
    mg_type: string;
}

export interface Servergroup {
    sgid: number | string;
    sg_name: string;
    sg_reseller_name: string;
    sg_desc: string;
    sg_select: number | string;
}
