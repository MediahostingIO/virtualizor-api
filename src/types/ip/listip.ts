export interface IpResponse {
    title: string;
    ips: { [key: string]: { [key: string]: null | string } };
    ippools: { [key: string]: Ippool };
    timenow: number;
    time_taken: string;
}

export interface Ippool {
    ippid: string;
    ippool_name: string;
    ipp_serid: string;
}
