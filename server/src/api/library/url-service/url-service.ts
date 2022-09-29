
import { convertToMd5 } from '../crypto';
import { ILinkValidator, linkValidator } from './validator';

export interface UrlShortData {
    [propName: string]: {
        shortLink: string;
        enabled: boolean;
    }
}
export interface ShortLinkData {
    shortLink: string;
    key: string;

}
export interface ShortLink extends ShortLinkData {
    url: string;
}

export class UrlService {

    private static instance: UrlService;
    private static keyCache: UrlShortData = {};
    private static MIN_CACHE_SIZE: number = 50;
    private static MAX_CACHE_SIZE: number = 100;
    private static DEFAULT_SEED: string = "XUMuh78YuF465XmNoP"
    private static MAX_SHORT_LEN: number = 10;
    private validator!: ILinkValidator;
    private seed!: string;
    private maxLength!: number;

    public static getInstance(): UrlService {
        /**
         * Enforce that key service is a singleton
         */
        if (!UrlService.instance) {
            UrlService.instance = new UrlService();
        }
        return UrlService.instance;
    }

    public start(maxLength: number, validator?: ILinkValidator, seed: string = UrlService.DEFAULT_SEED) {
        /**
         * If validator is provided we will use, but if not, we will use our default 
         * link validator;
         */
        this.validator = validator ?? linkValidator;
        this.seed = seed;
        this.maxLength = maxLength;
        this.generateCachedShortLinks();
    }

    public getShortLink(hostName: string, protocol: string): ShortLinkData {
        if (!UrlService.keyCache || Object.keys(UrlService.keyCache).length <= 0) {
            throw new Error("Short Service not started");
        }
        return this.getNextShortLink(hostName, protocol);
    }

    private generateCachedShortLinks = () => {

        const createAndValidateKey = () => {

            const shortLink = this.generateLink(this.maxLength, this.seed);
            const cacheSize: number = Object.keys(UrlService.keyCache).length;
            /**
             * If we have the right amount of shortLinks in the cache, we must stop
             */
            if (cacheSize >= UrlService.MAX_CACHE_SIZE) {
                console.log("ends");
                return;
            }
            UrlService.keyCache[shortLink] = { shortLink, enabled: true }
            this.validator(shortLink).then(({ valid, link }) => {
                /** if key is not valid, delete this key */
                console.log("valid:", link, valid);
                if (!valid) {
                    delete UrlService.keyCache[shortLink]
                } else {
                    if (UrlService?.keyCache && UrlService.keyCache[shortLink]) {
                        UrlService.keyCache[shortLink].enabled = true
                    };
                }
                createAndValidateKey();
            });
        }
        if (Object.keys(UrlService.keyCache).length < UrlService.MIN_CACHE_SIZE) {
            process.nextTick(() => {
                createAndValidateKey();
            });
        }
    }

    private getNextShortLink = (hostName: string, protocol: string, port: any = null): ShortLinkData => {
        const key: string = Object.keys(UrlService.keyCache)[0];
        const shortLinkCode: any = UrlService.keyCache[key].shortLink;
        /** delete this key. We only use key once */
        delete UrlService.keyCache[key];
        /**
         * If we are getting lower on short links, generate more
         */
        if (Object.keys(UrlService.keyCache).length <= UrlService.MIN_CACHE_SIZE) {
            this.generateCachedShortLinks();
        }
        const shortLink = `${protocol}://${hostName}:4000/${shortLinkCode}`;
        return ({ shortLink, key: shortLinkCode });
    }
    private generateLink = (maxLength: number, seed: string) => {
        const genLink = convertToMd5(`${seed}${Math.random()}${new Date().toISOString()}`);
        return genLink.substring(0, maxLength);
    }
}