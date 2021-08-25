import { Options } from "./types/options";
import { VirtualizorApi } from "./utils/virtualizorApi";
import { VpsController } from "./controller/VpsController";
import { IpController } from "./controller/IpController";
import { StatisticsController } from "./controller/StatisticsController";
import { UserController } from "./controller/UserController";

class Virtualizor {
    private readonly options: Options;

    constructor(options: Options) {
        this.options = options;
        VirtualizorApi.initialize(this.options);
    }

    public readonly virtualServer = new VpsController();
    public readonly ipPool = new IpController();
    public readonly statistics = new StatisticsController();
    public readonly users = new UserController();
}

export { Virtualizor };
