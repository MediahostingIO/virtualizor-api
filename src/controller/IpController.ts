import { VirtualizorApi } from "../utils/virtualizorApi";
import { IpResponse } from "../types/ip/listip";

export class IpController {
    public async listIps(data: { page?: number, recordPerPage?: number }): Promise<IpResponse> {
        return VirtualizorApi.call('ips', {params: data});
    }
}
