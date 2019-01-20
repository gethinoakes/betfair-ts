/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import Status from '../account/enum/Status';

export default class CancelApplicationSubscriptionResponse extends JsonResponse {
    private response: Status;

    constructor(
        response: Status = new Status(),
    ) {
        super();
        this.response = response;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            this.response.setValue(json.response);
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.response.isValid()) {
            json.response = this.response;
        }
        return json;
    }

    public isValid(): boolean {
        return this.response.isValid();
    }

    public getResponse(): Status {
        return this.response;
    }
    public setResponse(response: Status): void {
        this.response = response;
    }

}
