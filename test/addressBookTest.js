const assert=require('assert');
const fs=require('fs');
var data = fs.readFileSync("/home/admin1/Desktop/AddressBook/addressBookData.json");
var resJ=JSON.parse(data);
var addressData=require('../addressBook');
console.log("test",resJ);

describe("Address Book",function(){
it("To check functionality of addNewPerson",function(){
    const actual=addressData.addNewPerson(resJ);
    // console.log("actual " ,actual);
    const expect="Person data Successfully added";
    // console.log("expect",expect);
    
    assert.equal(expect,actual);
})
})