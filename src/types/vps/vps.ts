import { BasicResponse } from "../basicResponse";

export interface ListVpsDTO {
    vpsid?: number;
    vpsip?: string;
    vpshostname?: string;
    vsstatus?: string;
    vstype?: string;
    speedcap?: string;
    user?: string;
    vsgid?: string[];
    vserid?: string[];
    plid?: string[];
    bpid?: string[];
}

export interface ListVpsResponse extends BasicResponse {
    vs: { [key: string]: Vps };
    ostemplates: { [key: string]: Ostemplate };
    servers: Server[];
    owners: any[];
    plans: { [key: string]: string };
    backup_plans: BackupPlans;
}

export interface BackupPlans {
    "1": string;
}

export interface Ostemplate {
    osid: string;
    type: string;
    name: string;
    filename: string;
    size: string;
    pygrub: string;
    drive: string;
    hvm: string;
    perf_ops: string;
    active: string;
    url: string;
    distro: string;
    Nvirt: string;
    mg?: string[];
}

export interface Server {
    serid: number;
    sgid: string;
    server_name: string;
    virt: string;
    ip: string;
    internal_ip: string;
    vnc_ip: string;
    settings: string;
    unique_txt: string;
    lv: string;
    hvm: string;
    licnumvs: string;
    total_ram: string;
    overcommit: number;
    ram: string;
    total_space: string;
    space: string;
    os: string;
    os_arch: string;
    uname: string;
    version: string;
    patch: string;
    lic_expires: string;
    checked: string;
    locked?: string;
    vcores: string;
    ips: string;
    ipv6: string;
    ipv6_subnet: string;
    ips_int: string;
    bandwidth: string;
    update_resource: string;
    location: string;
    status: string;
    last_reverse_sync: string;
    ha_master: string;
    numvps: string;
    alloc_ram: string;
    alloc_space: string;
    alloc_cpu: string;
    alloc_cpu_percent: string;
    alloc_bandwidth: string;
    virts: string[];
}

export interface Vps {
    vpsid: string;
    vps_name: string;
    uuid: string;
    serid: number;
    time: string;
    edittime: string;
    virt: string;
    uid: string;
    plid: string;
    hostname: string;
    osid: string;
    os_name: string;
    iso: string;
    sec_iso: string;
    boot: string;
    space: string;
    inodes: string;
    ram: string;
    burst: string;
    swap: string;
    cpu: string;
    cores: string;
    cpupin: string;
    cpu_percent: string;
    bandwidth: string;
    network_speed: string;
    upload_speed: string;
    io: string;
    ubc: string;
    acpi: string;
    apic: string;
    pae: string;
    shadow: string;
    vnc: string;
    vncport: string;
    vnc_passwd: string;
    hvm: string;
    suspended: string;
    suspend_reason: null;
    nw_suspended: null;
    rescue: string;
    band_suspend: string;
    tuntap: string;
    ppp: string;
    ploop: string;
    dns_nameserver: string;
    osreinstall_limit: string;
    preferences: null;
    nic_type: string;
    vif_type: string;
    virtio: string;
    pv_on_hvm: string;
    disks: null;
    kvm_cache: string;
    io_mode: string;
    cpu_mode: string;
    total_iops_sec: string;
    read_bytes_sec: string;
    write_bytes_sec: string;
    kvm_vga: string;
    acceleration: string;
    vnc_keymap: string;
    routing: string;
    mg: string;
    used_bandwidth: string;
    cached_disk: string;
    webuzo: string;
    disable_ebtables: string;
    install_xentools: string;
    admin_managed: string;
    rdp: string;
    topology_sockets: string;
    topology_cores: string;
    topology_threads: string;
    mac: string;
    notes: null;
    disable_nw_config: string;
    locked?: string;
    openvz_features: string;
    speed_cap: string;
    numa: string;
    bpid: string;
    bserid: string;
    timezone: null | string;
    ha: string;
    data: string;
    server_name: string;
    email: string;
    pid: string;
    type: string;
    os_distro: string;
    stid: string[];
    ips: string[];
}
