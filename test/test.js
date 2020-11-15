const { post, get } = require('../support/rest')
const { userBody } = require('../fixtures/user/body');
const { baseURL, user, pet } = require('../endponts');
const { available, petCounter } = require('../support/petsFunctions')
const { expect } = require('chai');
const userURL = baseURL + user;
const petURL = baseURL + pet;

describe('Create user', async() => {
    it('check status code and properties of body response', async() => {
        let response = await post(userURL, userBody)
        expect(response.code).to.be.equal(200)
        expect(response).to.have.all.keys(
            'code',
            'type',
            'message'
        );
    });

    it('Check the information of user', async() => {
        const getUserURL = userURL + "/" + userBody.username
        let getInfo = await get(getUserURL)
        expect(getInfo).to.own.include(userBody)
    });
});

describe('Names of avaliable pets', async() => {
    it('check JSON response', async() => {
        let url = petURL + '?status=available'
        let response = await get(url)
        let listAvailables = await available(response)
        console.log("listAvailables=", listAvailables)
        let repeatedNames = await petCounter(response)
        console.log("repeatedNames=", repeatedNames)
    });

});