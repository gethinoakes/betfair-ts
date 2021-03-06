/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonResponse from '../JsonResponse';

import ExecutionReportErrorCode from '../sport/enum/ExecutionReportErrorCode';
import ExecutionReportStatus from '../sport/enum/ExecutionReportStatus';
import ReplaceInstructionReport from '../sport/ReplaceInstructionReport';

export default class ReplaceExecutionReport extends JsonResponse {
    private customerRef: string;
    private status: ExecutionReportStatus;
    private errorCode: ExecutionReportErrorCode;
    private marketId: string;
    private instructionReports: ReplaceInstructionReport[];

    constructor(
        customerRef: string = '',
        status: ExecutionReportStatus = new ExecutionReportStatus(),
        errorCode: ExecutionReportErrorCode = new ExecutionReportErrorCode(),
        marketId: string = '',
        instructionReports: ReplaceInstructionReport[] = [],
    ) {
        super();
        this.customerRef = customerRef;
        this.status = status;
        this.errorCode = errorCode;
        this.marketId = marketId;
        this.instructionReports = instructionReports;
    }

    public fromJson(json: any): void {
        if (this.validateJson(json)) {
            if ('customerRef' in json) {
                this.customerRef = json.customerRef;
            }
            if ('status' in json) {
                this.status.setValue(json.status);
            }
            if ('errorCode' in json) {
                this.errorCode.setValue(json.errorCode);
            }
            if ('marketId' in json) {
                this.marketId = json.marketId;
            }
            if ('instructionReports' in json) {
                this.instructionReports = json.instructionReports.map((instructionReportsJson: any) => {
                    const element = new ReplaceInstructionReport();
                    element.fromJson(instructionReportsJson);
                    return element;
                });
            }
        }
    }

    public toJson(): any {
        const json: any = {};
        if (this.customerRef !== '') {
            json.customerRef = this.customerRef;
        }
        if (this.status.isValid()) {
            json.status = this.status.getValue();
        }
        if (this.errorCode.isValid()) {
            json.errorCode = this.errorCode.getValue();
        }
        if (this.marketId !== '') {
            json.marketId = this.marketId;
        }
        if (this.instructionReports.length > 0) {
            json.instructionReports = this.instructionReports.map((value) => value.toJson());
        }
        return json;
    }

    public isValid(): boolean {
        return this.status.isValid();
    }

    public getCustomerRef(): string {
        return this.customerRef;
    }
    public setCustomerRef(customerRef: string): void {
        this.customerRef = customerRef;
    }
    public getStatus(): ExecutionReportStatus {
        return this.status;
    }
    public setStatus(status: ExecutionReportStatus): void {
        this.status = status;
    }
    public getErrorCode(): ExecutionReportErrorCode {
        return this.errorCode;
    }
    public setErrorCode(errorCode: ExecutionReportErrorCode): void {
        this.errorCode = errorCode;
    }
    public getMarketId(): string {
        return this.marketId;
    }
    public setMarketId(marketId: string): void {
        this.marketId = marketId;
    }
    public getInstructionReports(): ReplaceInstructionReport[] {
        return this.instructionReports;
    }
    public setInstructionReports(instructionReports: ReplaceInstructionReport[]): void {
        this.instructionReports = instructionReports;
    }

}
