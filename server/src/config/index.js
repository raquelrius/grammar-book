module.exports = {
    port: 8080,
    database: {
        user: 'admin',
        password: 'admin1234',
        port: 27017,
        host: 'localhost',
        db: 'grammarbooks',
    },
    mongoUrl() {
        const { user, password, port, host, db } = this.database;
        return `mongodb://${user}:${password}@${host}:${port}/${db}?authSource=admin`
    }
}