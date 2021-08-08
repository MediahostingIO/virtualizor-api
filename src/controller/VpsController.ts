import { CreateVpsDTO, VsCreateResponse } from "../types/vps/createVps";
import { VirtualizorApi } from "../utils/virtualizorApi";
import { ActResponse } from "../types/vps/actResponse";
import { ListVpsDTO, ListVpsResponse } from "../types/vps/vps";

export class VpsController {
    public createVps(data: CreateVpsDTO): Promise<VsCreateResponse> {
        return VirtualizorApi.call('addvs', {data});
    }

    public listVirtualServers(data: { page?: number, recordsPerPage?: number, searchOptions?: ListVpsDTO }): Promise<ListVpsResponse> {
        return VirtualizorApi.call('vs', {
            method: data?.searchOptions && Object.keys(data.searchOptions).length > 1 ? 'POST' : 'GET',
            params: {
                page: data?.page,
                reslen: data?.recordsPerPage,
                ...data?.searchOptions
            },
        });
    }

    public startVps(vpsId: number): Promise<ActResponse> {
        return VirtualizorApi.call('vs', {
            params: {
                vpsid: vpsId,
                action: 'start'
            }
        });
    }

    public stopVps(vpsId: number): Promise<ActResponse> {
        return VirtualizorApi.call('vs', {
            params: {
                vpsid: vpsId,
                action: 'stop'
            }
        });
    }

    public restartVps(vpsId: number): Promise<ActResponse> {
        return VirtualizorApi.call('vs', {
            params: {
                vpsid: vpsId,
                action: 'restart'
            }
        });
    }

    public suspendVps(vpsId: number): Promise<any> {
        return VirtualizorApi.call('vs', {
            params: {
                suspend: vpsId
            }
        });
    }

    public unsuspendVps(vpsId: number): Promise<any> {
        return VirtualizorApi.call('vs', {
            params: {
                unsuspend: vpsId
            }
        });
    }

    public suspendNetwork(vpsId: number): Promise<any> {
        return VirtualizorApi.call('vs', {
            params: {
                suspend_net: vpsId
            }
        });
    }

    public unsuspendNetwork(vpsId: number): Promise<any> {
        return VirtualizorApi.call('vs', {
            params: {
                unsuspend_net: vpsId,
            }
        });
    }

    public rebuildVps(vpsId: number, options: { newpass: string, osid: string }): Promise<any> {
        return VirtualizorApi.call('rebuild', {
            data: {
                vpsid: vpsId,
                newpass: options.newpass,
                conf: options.newpass,
                osid: options.osid,
            }
        });
    }
}
