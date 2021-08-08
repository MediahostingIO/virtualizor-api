export interface CreateVpsDTO {
    virt: VirtType;
    user_email: string;
    user_pass: string;
    hostname: string;
    addvps: number;
    rootpass: string;
    slave_server?: number;
    osid: number;
    ips: string[];
    space: { size: number, st_uuid?: string }[];
    ram: number;
    bandwidth: number;
    cores: number;
    plid?: number;
    network_speed?: number;
    mgs?: string;
    priority?: number;
    cpu?: number;
    burst?: number;
    cpu_percent?: number;
    iso?: string;
    stid?: number;
    vnc?: number;
    vncpass?: string;
    swapram?: number;
    shadow?: number;
    hvm?: number;
    boot?: string;
    num_ips6?: number;
    num_ips6_subnet?: number;
}

export enum VirtType {
    openvz = "openvz",
    xen = "xen",
    kvm = "kvm",
    xcp = "xcp",
    lxc = "lxc",
    vzo = "vzo",
    vzk = "vzk",
    proxo = "proxo",
    proxk = "proxk",
    proxl = "proxl",
}

export interface CreateVpsResponse {
    title: string;
    error: any[];
    vs_info: VsInfo;
    globals: Globals;
}

export interface Globals {
    cookie_name: string;
}

export interface VsInfo {
    uuid: string;
    pass: string;
    plid: number;
    hostname: string;
    space: number;
    ram: number;
    bandwidth: number;
    network_speed: number;
    upload_speed: number;
    cores: number;
    cpupin: number;
    uid: string;
    io: number;
    burst: number;
    cpu_percent: number;
    swap: number;
    acpi: number;
    apic: number;
    pae: number;
    vnc: number;
    vncport: number;
    shadow: number;
    virt: string;
    hvm: number;
    iso: string;
    boot: string;
    band_suspend: number;
    speed_cap_down: number;
    speed_cap_up: number;
    tuntap: number;
    ppp: number;
    mac_status: number;
    osreinstall_limit: number;
    mg: any[];
    kvm_cache: string;
    io_mode: string;
    vnc_keymap: string;
    virtio: number;
    numa: number;
    cpu_mode: string;
    admin_managed: number;
    rdp: number;
    disable_nw_config: number;
    topology_sockets: number;
    topology_cores: number;
    topology_threads: number;
    openvz_features: string;
    bpid: number;
    install_xentools: number;
    sec_iso: string;
    mac: string;
    osid: number;
    cpu: number;
    kvm_vga: number;
    acceleration: number;
    vncpass: string;
    disable_ebtables: number;
    webuzo: number;
    nic_type: string;
    vif_type: string;
    vps_name: string;
    ubc: string;
    vpsid: string;
    disks: Disk[];
    ips: string[];
    ipv6: string[];
    ipv6_subnet: string[];
    ips_int: any[];
}

export interface Disk {
    primary: number;
    path: string;
    st_uuid: string;
    type: string;
    size: string;
    size_unit: string;
    vpsid: string;
    rescue: number;
    target_name: string;
    format: string;
    disk_uuid: string;
    num: number;
}
