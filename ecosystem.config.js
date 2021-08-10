module.exports = {
    apps: [
        {
            name: 'juejue-vite-h5',
            script: 'juejue-vite-h5-server.js'
        },
    ],
    deploy: {
        production: {
            user: 'root',
            host: '81.69.243.73',
            ref: 'origin/master',
            repo: ''
        }
    }
}