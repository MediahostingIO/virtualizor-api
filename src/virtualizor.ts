import { Options } from "./types/options";
import { VirtualizorApi } from "./utils/virtualizorApi";
import { VpsController } from "./controller/VpsController";
import { IpController } from "./controller/IpController";

class Virtualizor {
    private readonly options: Options;

    constructor(options: Options) {
        this.options = options;
        VirtualizorApi.initialize(this.options);
    }

    public virtualServer = new VpsController();
    public ipPool = new IpController();
}

export { Virtualizor };
