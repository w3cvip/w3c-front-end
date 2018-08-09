export default function ({ $axios, redirect }) {
    $axios.onRequest(config => {
        console.log('Making request to ' + config.url)
    })
    $axios.onResponse(response => {
        console.info(response)
    })
    $axios.onError(error => {
        const code = parseInt(error.response && error.response.status)
        console.info(code)
        if (code === 400) {
            // redirect('/400')
            console.info('400')
        }
        if(code === 404){
            console.info('404')
        }
    })
    $axios.onRequestError(error => {
        console.info(error)
    })
    $axios.onResponseError(error => {
        console.info(error)
    })
}