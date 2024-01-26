// https://family.cloudflare-dns.com/dns-query
const redirect_doh = 'https://family.dot.dns.yandex.net/dns-query';
const authPath = '/12345678';



export default {
    async fetch(request) {
        const parsed_url = new URL(request.url);
        if (parsed_url.pathname !== authPath) {
            return;
        }
        else {
            return fetch(redirect_doh + parsed_url.search, {
                method: request.method,
                headers: request.headers,
                body: request.body,
            });
        } 
    },
};

