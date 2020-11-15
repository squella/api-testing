module.exports = {
    available: async(response) => {
        return response.map(elem => [elem.id, elem.name])
    },

    petCounter: async(response) => {
        let listNames = await response.map(elem => elem.name)
        let res = await listNames.reduce((countNames, names) => {
            countNames[names] = (countNames[names] || 0) + 1;
            return countNames
        }, {})
        return res
    },
}