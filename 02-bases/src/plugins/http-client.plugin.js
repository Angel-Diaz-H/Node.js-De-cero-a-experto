const httpClientPlugin = {
    get: async (url) => {
        const resp = await fetch(url);
        return await resp.json();
    },

    post: async (url, data) => { },
    put: async (url, data) => { },
    delete: async (url) => { },
};

module.exports = { http: httpClientPlugin };