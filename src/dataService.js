import axios from 'axios';

export default {
    getIssues: () => {
        console.log(process.env)

        return axios({
            method: 'get',
            url: 'https://api.github.com/repos/facebook/react/issues',
            params: {
                client_id: process.env.REACT_APP_CLIENT_ID,
                client_secret: process.env.REACT_APP_CLIENT_SECRET
            }
        })
    }
}