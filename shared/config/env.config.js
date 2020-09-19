module.exports = {
    "port": 3600,
    "appEndpoint": "http://localhost:3000",
    "apiEndpoint": "http://localhost:3000",
    "jwt_secret": "myS33!!creeeT",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev",
    "permissionLevels": {
        "FARMER": 1,
        "CUSTOMER": 4,
        "ADMIN": 2048
    }
};
