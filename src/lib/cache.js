class NewsCache {
    constructor() {
        this.cache = {
            data: null,
            lastFetch: 0
        };
        this.CACHE_DURATION = 5 * 60 * 1000; // 5 minutos
    }

    async getData() {
        const now = Date.now();

        if (this.cache.data && (now - this.cache.lastFetch) < this.CACHE_DURATION) {
            return this.cache.data;
        }

        return null;
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
        return this.cache.data[name];
    }

}

export const newsCache = new NewsCache();