class NewsCache {
    constructor() {
        this.cache = {
            data: {},
            lastFetch: 0
        };
        this.CACHE_DURATION = 10 * 1000; // 5 minutos
    }

    checkDateCache() {
        const now = Date.now();
        if (this.cache.data && (now - this.cache.lastFetch) < this.CACHE_DURATION) {
            return true;
        }
        return false;
    }

    async getData() {

        if (this.checkDateCache()) {
            return this.cache.data;
        }

        return {};
    }

    async setData(data) {
        this.cache.data = data;
        this.cache.lastFetch = Date.now();
    }

    //setData by name
    async setDataByName(name, data) {

        this.cache.data[name] = data;
        this.cache.lastFetch = Date.now();
    }

    //getData by name
    async getDataByName(name) {
        try {
            if (this.checkDateCache() && this.cache.data[name]) {

                return this.cache.data[name];
            }

            return {};

        } catch (e) {

            return {};

        }
    }

    //clear cache
    async clear() {
        this.cache.data = {};
        this.cache.lastFetch = 0;
    }

}

export const newsCache = new NewsCache();