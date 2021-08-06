import { Options } from "../types/options";
import axios, { Method } from "axios";

export class VirtualizorApi {
    private static host: string;
    private static apiKey: string;

    public static initialize(options: Options): void {
        this.host = options.host;
        this.apiKey = options.apiKey;
    }

    public static call(act: string, options?: { headers?: any, params?: any, data?: any, method?: Method }): Promise<any> {
        return axios.request({
            url: `${this.host}/index.php`,
            data: options.data,
            method: options.method ?? 'POST',
            params: {
                api: 'json',
                apikey: this.apiKey,
                act,
                ...options.params,
            },
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        })
            .then(value => value.data)
            .catch(reason => reason.response ?? reason);
    }
}
