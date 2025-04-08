module.exports = {
    testEnvironment: 'node',
    testRegex: '(/__tests__/.*|(\.|/)(test|spec))\.js$',
    transform: {
        '^.+\.jsx?$': 'babel-jest',
    },
};