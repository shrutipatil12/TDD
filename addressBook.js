var fs=require('fs');
var jsonData=require('/home/admin1/Desktop/AddressBook/addressBookData.json');
// var testData=JSON.parse(jsonData);
checkNameValidaton=/[A-Za-z]{8}/;
checkNumberValidation=/[0-9]{10}/;
console.log(jsonData);

class AddressB{
    constructor(){
        // this.firstname=firstname,
        // this.lastname=lastname
    }

    
addNewPerson(jsonData){
   
    if(!checkNameValidaton.test(jsonData.firstName) && !checkNameValidaton.test(jsonData.lastName)){
        return "Error while adding"
    }
    else{
        return "Person data Successfully added"
    }
}
}
var addr=new AddressB();
module.exports=addr;