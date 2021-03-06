/**
 * Copyright 2018 Colin Doig.  Distributed under the MIT license.
 */
import JsonMember from '../JsonMember';
import OrderStatus from '../sport/enum/OrderStatus';
import OrderType from '../sport/enum/OrderType';
import PersistenceType from '../sport/enum/PersistenceType';
import Side from '../sport/enum/Side';
export default class Order extends JsonMember {
    private betId;
    private orderType;
    private status;
    private persistenceType;
    private side;
    private price;
    private size;
    private bspLiability;
    private placedDate;
    private avgPriceMatched;
    private sizeMatched;
    private sizeRemaining;
    private sizeLapsed;
    private sizeCancelled;
    private sizeVoided;
    private customerOrderRef;
    private customerStrategyRef;
    constructor(betId?: string, orderType?: OrderType, status?: OrderStatus, persistenceType?: PersistenceType, side?: Side, price?: number | null, size?: number | null, bspLiability?: number | null, placedDate?: Date | null, avgPriceMatched?: number | null, sizeMatched?: number | null, sizeRemaining?: number | null, sizeLapsed?: number | null, sizeCancelled?: number | null, sizeVoided?: number | null, customerOrderRef?: string, customerStrategyRef?: string);
    fromJson(json: any): void;
    toJson(): any;
    isValid(): boolean;
    getBetId(): string;
    setBetId(betId: string): void;
    getOrderType(): OrderType;
    setOrderType(orderType: OrderType): void;
    getStatus(): OrderStatus;
    setStatus(status: OrderStatus): void;
    getPersistenceType(): PersistenceType;
    setPersistenceType(persistenceType: PersistenceType): void;
    getSide(): Side;
    setSide(side: Side): void;
    getPrice(): number | null;
    setPrice(price: number | null): void;
    getSize(): number | null;
    setSize(size: number | null): void;
    getBspLiability(): number | null;
    setBspLiability(bspLiability: number | null): void;
    getPlacedDate(): Date | null;
    setPlacedDate(placedDate: Date | null): void;
    getAvgPriceMatched(): number | null;
    setAvgPriceMatched(avgPriceMatched: number | null): void;
    getSizeMatched(): number | null;
    setSizeMatched(sizeMatched: number | null): void;
    getSizeRemaining(): number | null;
    setSizeRemaining(sizeRemaining: number | null): void;
    getSizeLapsed(): number | null;
    setSizeLapsed(sizeLapsed: number | null): void;
    getSizeCancelled(): number | null;
    setSizeCancelled(sizeCancelled: number | null): void;
    getSizeVoided(): number | null;
    setSizeVoided(sizeVoided: number | null): void;
    getCustomerOrderRef(): string;
    setCustomerOrderRef(customerOrderRef: string): void;
    getCustomerStrategyRef(): string;
    setCustomerStrategyRef(customerStrategyRef: string): void;
}
