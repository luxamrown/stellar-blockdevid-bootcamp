import { Buffer } from "buffer";
import { Client as ContractClient, Spec as ContractSpec, } from '@stellar/stellar-sdk/contract';
export * from '@stellar/stellar-sdk';
export * as contract from '@stellar/stellar-sdk/contract';
export * as rpc from '@stellar/stellar-sdk/rpc';
if (typeof window !== 'undefined') {
    //@ts-ignore Buffer exists
    window.Buffer = window.Buffer || Buffer;
}
export const networks = {
    testnet: {
        networkPassphrase: "Test SDF Network ; September 2015",
        contractId: "CA77ENANSJISAQQ5DYLN77FKKVZ3KCLLXZEAF3PUYJORDTHB24ESFF2J",
    }
};
export class Client extends ContractClient {
    options;
    static async deploy(
    /** Options for initializing a Client as well as for calling a method, with extras specific to deploying. */
    options) {
        return ContractClient.deploy(null, options);
    }
    constructor(options) {
        super(new ContractSpec(["AAAAAAAAAKtJbml0aWFsaXplIGNhbXBhaWduIGJhcnUgZGVuZ2FuIGdvYWwsIGRlYWRsaW5lLCBkYW4gWExNIHRva2VuIGFkZHJlc3MKRnJvbnRlbmQgcGVybHUgcGFzczogb3duZXIgYWRkcmVzcywgZ29hbCAoaW4gc3Ryb29wcyksIGRlYWRsaW5lICh1bml4IHRpbWVzdGFtcCksIHhsbV90b2tlbiAoYWRkcmVzcykAAAAACmluaXRpYWxpemUAAAAAAAQAAAAAAAAABW93bmVyAAAAAAAAEwAAAAAAAAAEZ29hbAAAAAsAAAAAAAAACGRlYWRsaW5lAAAABgAAAAAAAAAJeGxtX3Rva2VuAAAAAAAAEwAAAAA=",
            "AAAAAAAAAGZEb25hdGUga2UgY2FtcGFpZ24gbWVuZ2d1bmFrYW4gWExNIHRva2VuIHRyYW5zZmVyCkZyb250ZW5kIHBlcmx1IHBhc3M6IGRvbm9yIGFkZHJlc3MsIGFtb3VudCAoc3Ryb29wcykAAAAAAAZkb25hdGUAAAAAAAIAAAAAAAAABWRvbm9yAAAAAAAAEwAAAAAAAAAGYW1vdW50AAAAAAALAAAAAA==",
            "AAAAAAAAAEhHZXQgdG90YWwgYW1vdW50IHlhbmcgc3VkYWggdGVya3VtcHVsCkZyb250ZW5kIGJpc2EgY2FsbCB0YW5wYSBwYXJhbWV0ZXIAAAAQZ2V0X3RvdGFsX3JhaXNlZAAAAAAAAAABAAAACw==",
            "AAAAAAAAAFBHZXQgYmVyYXBhIGJhbnlhayBzcGVjaWZpYyBkb25vciBzdWRhaCBkb25hdGUKRnJvbnRlbmQgcGVybHUgcGFzczogZG9ub3IgYWRkcmVzcwAAAAxnZXRfZG9uYXRpb24AAAABAAAAAAAAAAVkb25vcgAAAAAAABMAAAABAAAACw==",
            "AAAAAAAAAAAAAAATZ2V0X2lzX2FscmVhZHlfaW5pdAAAAAAAAAAAAQAAAAE=",
            "AAAAAAAAADtHZXQgY2FtcGFpZ24gZ29hbCBhbW91bnQKRnJvbnRlbmQgYmlzYSBjYWxsIHRhbnBhIHBhcmFtZXRlcgAAAAAIZ2V0X2dvYWwAAAAAAAAAAQAAAAs=",
            "AAAAAAAAAEJHZXQgY2FtcGFpZ24gZGVhZGxpbmUgdGltZXN0YW1wCkZyb250ZW5kIGJpc2EgY2FsbCB0YW5wYSBwYXJhbWV0ZXIAAAAAAAxnZXRfZGVhZGxpbmUAAAAAAAAAAQAAAAY=",
            "AAAAAAAAAFBDaGVjayBhcGFrYWggY2FtcGFpZ24gZ29hbCBzdWRhaCB0ZXJjYXBhaQpSZXR1cm5zIHRydWUgamlrYSB0b3RhbCByYWlzZWQgPj0gZ29hbAAAAA9pc19nb2FsX3JlYWNoZWQAAAAAAAAAAAEAAAAB",
            "AAAAAAAAAE5DaGVjayBhcGFrYWggY2FtcGFpZ24gc3VkYWggYmVyYWtoaXIKUmV0dXJucyB0cnVlIGppa2EgY3VycmVudCB0aW1lID4gZGVhZGxpbmUAAAAAAAhpc19lbmRlZAAAAAAAAAABAAAAAQ==",
            "AAAAAAAAAItDYWxjdWxhdGUgcHJvZ3Jlc3MgcGVyY2VudGFnZSBkYXJpIGNhbXBhaWduClJldHVybnMgKHRvdGFsX3JhaXNlZCAqIDEwMCkgLyBnb2FsClJldHVybnMgMCBqaWthIGdvYWwgYWRhbGFoIDAgKHVudHVrIGF2b2lkIGRpdmlzaW9uIGJ5IHplcm8pAAAAABdnZXRfcHJvZ3Jlc3NfcGVyY2VudGFnZQAAAAAAAAAAAQAAAAs=",
            "AAAAAAAAAEVHZXQgb3duZXIgYWRkcmVzcwpGcm9udGVuZCBiaXNhIGNhbGwgdW50dWsgY2hlY2sgc2lhcGEgb3duZXIgY2FtcGFpZ24AAAAAAAAJZ2V0X293bmVyAAAAAAAAAAAAAAEAAAAT"]), options);
        this.options = options;
    }
    fromJSON = {
        initialize: (this.txFromJSON),
        donate: (this.txFromJSON),
        get_total_raised: (this.txFromJSON),
        get_donation: (this.txFromJSON),
        get_is_already_init: (this.txFromJSON),
        get_goal: (this.txFromJSON),
        get_deadline: (this.txFromJSON),
        is_goal_reached: (this.txFromJSON),
        is_ended: (this.txFromJSON),
        get_progress_percentage: (this.txFromJSON),
        get_owner: (this.txFromJSON)
    };
}
