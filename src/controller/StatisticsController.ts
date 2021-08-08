import { StatisticsResponse } from "../types/statisticsResponse";
import { VirtualizorApi } from "../utils/virtualizorApi";

export class StatisticsController {
    public async getStatistics(options: { vpsid?: number, serid?: number } = {}): Promise<StatisticsResponse> {
        return VirtualizorApi.call('vps_stats', {data: {show: 1, ...options}});
    }
}
