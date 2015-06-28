﻿import {XmlElementNames} from "../../XmlElementNames";
import {Item} from "./Item";
export class ContactGroup extends Item {
    //////FileAs: string;
    //////DisplayName: string;
    //////Members: GroupMemberCollection;
    //////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): ContactGroup { throw new Error("ContactGroup.ts - Bind : Not implemented."); }
    //////Bind(service: ExchangeService, id: ItemId): ContactGroup { throw new Error("ContactGroup.ts - Bind : Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("ContactGroup.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    //////GetSchema(): ServiceObjectSchema { throw new Error("ContactGroup.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.DistributionList; }
    //////SetSubject(subject: string): any { throw new Error("ContactGroup.ts - SetSubject : Not implemented."); }
}