module.exports = [
    {
        "name": "test",
        "type": "sqlite",
        "database": "./practicetest.sqlite",
        "entities": ["src/core/model/domain/*.ts"],
        "logging": true,
        "synchronize": true
    }
]