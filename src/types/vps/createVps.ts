import { BasicResponse } from "../basicResponse";

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

export interface VsCreateResponse extends BasicResponse {
    done: string;
    globals: Globals;
    servers: Server[];
    plans: Plan[];
    ips: { [key: string]: { [key: string]: null | string } };
    ips6: { [key: string]: { [key: string]: null | string } };
    ips6_subnet: any[];
    ips_int: any[];
    ipools: null;
    users: { [key: string]: User };
    isos: { [key: string]: ISO };
    _virt: Virt;
    virt: Virt;
    newvs: Newvs;
    oses: { [key: string]: Ose };
    oslist: Oslist;
    ostemplates: { [key: string]: Ose };
    resources: Resources;
    mgs: { [key: string]: Mg };
    servergroups: Servergroup[];
    scripts: { [key: string]: Script };
    iscripts: { [key: string]: number };
    webuzo_done: WebuzoDone;
    actid: string;
}

export enum Virt {
    KVM = "kvm",
    Lxc = "lxc",
    Openvz = "openvz",
    Proxk = "proxk",
    Proxl = "proxl",
    Proxo = "proxo",
    Vzk = "vzk",
    Vzo = "vzo",
    Xcp = "xcp",
    Xcphvm = "xcphvm",
    Xen = "xen",
    Xenhvm = "xenhvm",
}

export interface Globals {
    cookie_name: string;
}

export interface ISO {
    uuid: string;
    iso: string;
    mg: number[];
    name: string;
    filename: string;
    size: number;
    isuseriso: number;
    distro: string;
}

export interface Mg {
    mgid: string;
    mg_name: string;
    mg_desc: string;
    mg_type: Virt;
}

export interface Newvs {
    uuid: string;
    pass: string;
    plid: number;
    hostname: string;
    space: number;
    bus_driver: string;
    bus_driver_num: number;
    ram: number;
    bandwidth: number;
    network_speed: number;
    upload_speed: number;
    cores: number;
    cpupin: number;
    uid: number;
    io: number;
    burst: number;
    cpu_percent: number;
    swap: number;
    acpi: number;
    apic: number;
    pae: string;
    vnc: number;
    vncport: number;
    shadow: number;
    virt: Virt;
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
    ha: number;
    unprivileged: number;
    os_type: number;
    rtc: number;
    mac: string;
    osid: number;
    cpu: number;
    total_iops_sec: number;
    read_bytes_sec: number;
    write_bytes_sec: number;
    kvm_vga: number;
    acceleration: number;
    vncpass: string;
    disable_ebtables: number;
    webuzo: number;
    nic_type: string;
    vps_name: string;
    ubc: string;
    vpsid: string;
    disks: Disk[];
    ips: string[];
    ipv6: string[];
    ipv6_subnet: any[];
    ipv6_subnet_w_prefix: any[];
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
    bus_driver: null;
    bus_driver_num: null;
}

export interface Ose {
    osid: string;
    type: Virt;
    name: string;
    filename: string;
    size: string;
    pygrub: string;
    drive: Drive;
    hvm: string;
    perf_ops: string;
    active: string;
    url: string;
    distro: Distro;
    Nvirt: Virt;
    mg?: number[];
}

export enum Distro {
    Almalinux = "almalinux",
    Centos = "centos",
    Debian = "debian",
    Fedora = "fedora",
    SUSE = "suse",
    Scientific = "scientific",
    Ubuntu = "ubuntu",
    Webuzo = "webuzo",
}

export enum Drive {
    Empty = "",
    Xvda = "xvda",
}

export interface Oslist {
    kvm: KVM;
}

export interface KVM {
    debian: { [key: string]: Ose };
    centos: { [key: string]: Ose };
    ubuntu: { [key: string]: Ose };
}

export interface Plan {
    plid: number | string;
    plan_name: string;
    virt: Virt | null;
    ips: null | string;
    ips6: null | string;
    ips6_subnet: null | string;
    ips_int: null | string;
    space: null | string;
    inodes: null | string;
    ram: null | string;
    burst: null | string;
    swap: null | string;
    cpu: null | string;
    cores: null | string;
    cpu_percent: null | string;
    bandwidth: null | string;
    network_speed: null | string;
    upload_speed: null | string;
    nic_type: null | string;
    io: null | string;
    virtio: null | string;
    ubc: null | string;
    ploop: null | string;
    band_suspend: null | string;
    dns_nameserver: null | string;
    ppp: null | string;
    tuntap: null | string;
    control_panel: null | string;
    mgs: null | string;
    cpu_mode: null | string;
    sec_iso: null | string;
    hvm: null | string;
    kvm_cache: null | string;
    io_mode: null | string;
    osreinstall_limit: null | string;
    total_iops_sec: null | string;
    read_bytes_sec: null | string;
    write_bytes_sec: null | string;
    vnc_keymap: null | string;
    osid: null | string;
    kvm_vga: null | string;
    acceleration: null | string;
    vif_type: null | string;
    pv_on_hvm: null | string;
    iso: null | string;
    vnc: null | string;
    admin_managed: null | string;
    shadow: null | string;
    acpi: null | string;
    apic: null | string;
    pae: null | string;
    recipe: null | string;
    topology_sockets: null | string;
    topology_cores: null | string;
    topology_threads: null | string;
    disable_nw_config: null | string;
    rdp: null | string;
    openvz_features: null | string;
    speed_cap: null | string;
    numa: null | string;
    bpid: null | string;
    install_xentools: null | string;
    ippoolid: null | string;
    is_enabled: null | string;
    bus_driver: null | string;
    bus_driver_num: null | string;
    webuzo_data: null | string;
    fuse?: number | null;
    ipip?: number | null;
    ipgre?: number | null;
    nfs?: number | null;
    quotaugidlimit?: number | null;
    iolimit?: number | null;
    iopslimit?: number | null;
}

export interface Resources {
    licnumvs: string;
    ram: number;
    space: number;
    total_ram: number;
    total_space: number;
    check_kernel: boolean;
    overcommit: number;
    lv: string;
    thin_lv: string;
    disk_path: string;
    cpucores: number;
    to_master_data: any[];
    storages: { [key: string]: Storage };
    os_name: string;
    licexpires_txt: string;
    version: string;
    patch: string;
    vs_bandwidth: { [key: string]: number };
    virt: Virt;
    os: OS;
    server_time: number;
    ips: string;
    ipv6: string;
    ipv6_subnet: string;
    ips_int: string;
    vcores: string;
}

export interface OS {
    os_arch: string;
    uname: string;
    distro: Distro;
    name: string;
}

export interface Storage {
    stid: string;
    st_uuid: string;
    name: string;
    path: string;
    type: string;
    format: string;
    size: number;
    free: number;
    oversell: string;
    alert_threshold: string;
    primary_storage: string;
    last_alert: string;
    disk_space: number;
    serids: string[];
    sgids: Sgids;
}

export interface Sgids {
    "-2": string;
}

export interface Script {
    sid: number;
    parent: string;
    name: string;
    softname: string;
    type: Type;
    category: string;
}

export enum Type {
    JS = "js",
    Java = "java",
    PERL = "perl",
    PHP = "php",
    Python = "python",
}

export interface Servergroup {
    sgid: number;
    sg_name: string;
    sg_reseller_name: string;
    sg_desc: string;
    sg_select: number;
}

export interface Server {
    serid: number;
    sgid: string;
    server_name: string;
    virt: Virt;
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
    locked: string;
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
    virts: Virt[];
}

export interface User {
    uid: string;
    email: string;
    pid: string;
    inhouse_billing: string;
}

export interface WebuzoDone {
    allowed_scripts: null;
    webuzo_apps: any[];
    isfree: number;
}
