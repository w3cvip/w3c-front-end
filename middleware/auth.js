import axios from 'axios'

// export default function ({ route }) {
//   return axios.post('http://my-stats-api.com', {
//     url: route.fullPath
//   })
// }
export default function (context) {
    
    // // If the user is not authenticated
    // if (!store.state.authenticated) {
    //   return redirect('/login')
    // }
    console.info("1111")
    console.info(context.query)
}