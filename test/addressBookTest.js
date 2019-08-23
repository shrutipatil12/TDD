

var chai = require('chai');
var expect = require('chai').expect;
var assert = require('chai').assert;
let data = require('/home/admin1/Desktop/AddressBook/addressBookData.json')
// console.log("data in tc", data)
let Function = require('../addressBook')
describe('Address Book ', function () {

    it('testCase to check all fields of addPerson', function () {
        var actual = Function.createProfile(data)
        var expect = "person added sucessfully"

        assert.equal(expect, actual)
     })


        it('testcase for updateprofileFunctionality', function () {
            // index=1;
            var actual = Function.updateProfile(data)
            var expect = "update Successfully"
            console.log("upProfile err tc");
            // console.log("personsData", personsData);

            assert.equal(expect, actual)
    })
    it('testcase for delete person details', function () {
        var index = 0
        var actual = Function.deleteProfile(index)
        var expect = "sucessfully deleted"
        assert.equal(expect, actual)
    })


    it('testCase to sort by firstName', function () {
        var actual = Function.sortPersonsByLastName(data)
        var expect = "sucessfully sort by lastName"

        assert.equal(expect, actual)
    })

    it('testCase to sort by firstName', function () {
        var actual = Function.sortPersonsByZipcode(data)
        var expect = "sucessfully sort by zipCode"

        assert.equal(expect, actual)
    })
})