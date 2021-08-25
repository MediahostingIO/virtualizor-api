import { CreateUserDTO, Mg, Servergroup } from "./createUser";
import { BasicResponse } from "../basicResponse";

export interface EditUserDTO extends CreateUserDTO {
    uid: number;
}

export interface EditUserResponse extends BasicResponse {
    user_plans: any[];
    users: User;
    mgs: { [key: string]: Mg };
    servergroups: { [key: string]: Servergroup };
}

export interface User {
    uid: string;
    password: string;
    email: string;
    type: string;
    aclid: string;
    pid: string;
    uplid: string;
    inhouse_billing: string;
    cur_bal: string;
    cur_usage: string;
    cur_invoices: string;
    max_cost: string;
    num_vs: string;
    num_users: string;
    space: string;
    ram: string;
    burst: string;
    bandwidth: string;
    cpu: string;
    cores: string;
    cpu_percent: string;
    num_cores: string;
    num_ipv4: string;
    num_ipv6: string;
    num_ipv6_subnet: string;
    allowed_virts: string[];
    network_speed: string;
    upload_speed: string;
    openvz: string;
    xen: string;
    xenhvm: string;
    kvm: string;
    sg: any[];
    mg: any[];
    preferences: Preferences;
    dnsplid: string;
    act_status: string;
    activation_code: string;
    date_created: string;
    service_period: string;
    band_suspend: string;
    billing_warn: null;
    suspended: null;
}

export interface Preferences {
    fname: string;
    lname: string;
}

