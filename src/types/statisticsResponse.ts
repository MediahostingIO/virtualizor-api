export interface StatisticsResponse {
    title: string;
    pie_data: PieData;
    vps_data: { [key: string]: VpsDatum };
    timenow: number;
    time_taken: string;
}

export interface PieData {
    server_bandwidth: ServerBandwidth;
    server_cpu: ServerCPU;
    server_ram: ServerRAM;
}

export interface ServerBandwidth {
    limit: number;
    used: number;
    usage: { [key: string]: number };
    in?: ServerBandwidth;
    out?: ServerBandwidth;
    free: number;
    limit_gb: number;
    used_gb: number;
    free_gb: number;
    percent: number;
    percent_free: number;
}

export interface ServerCPU {
    manu: string;
    cpumodel: string;
    limit: number;
    used: number;
    free: number;
    percent: number;
    percent_free: number;
}

export interface ServerRAM {
    "0": The1;
    "-1": The1;
}

export interface The1 {
    used_ram: number;
    ram: number;
}

export interface VpsDatum {
    status: number;
    net_in: number;
    net_out: number;
    used_cpu: number | string;
    used_ram: number | string;
    ram: number | string;
    used_disk: number;
    disk: string;
    used_inode: number;
    inode: number;
    used_bandwidth: number;
    bandwidth: number;
    virt: string;
    io_read: number;
    io_write: number;
    vpsid: string;
    vps_name: string;
    hostname: string;
    vps_ram_info: boolean;
}
