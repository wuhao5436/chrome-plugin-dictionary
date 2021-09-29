export const urlWrapper = (url: string) => {
    const env = process.env.NODE_ENV;
    console.log(`env`, env)
    switch (env) {
        case 'production':
            return 'http://localhost:7001' + url
            break;
        default:
            return url;
            break;
    }
}