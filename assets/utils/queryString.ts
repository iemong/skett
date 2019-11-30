type Params = {
    [key: string]: string
}

const queryString = (params: Params): string =>
    Object.keys(params)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
        .join('&')

export default queryString
