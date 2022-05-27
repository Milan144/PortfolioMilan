const env = process.env;

const config = {
    db: {
        host: env.DB_HOST || 'localhost',
        user: env.DB_USER || 'root',
        password: env.DB_PASSWORD || 'root',
        database: env.DB_NAME || 'portfolio',
        socket: env.DB_SOCKET || '/Applications/MAMP/tmp/mysql/mysql.sock',
        port: env.DB_PORT || '8889'
    },
};


module.exports = config;
