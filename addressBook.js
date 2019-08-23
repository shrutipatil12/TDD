
var read = require('readline-sync');
var file = require('fs');
// var jsondata = require('/home/admin1/Desktop/AddressBook/addressBookData.json')
// jsondata = JSON.stringify(jsondata)
// jsondata = JSON.parse(jsondata)
var jsondata = file.readFileSync('/home/admin1/Desktop/AddressBook/test/AddressBOutput.json')
output = JSON.stringify(jsondata)
// output = JSON.parse(jsondata)
checkNameValidation = /[A-Za-z]/;
checkNoValidation = /[0-9]{10}/;

class addressBook {
    constructor() {

    }
    createProfile(jsondata) {

        if (!checkNameValidation.test(jsondata.firstName) && !checkNameValidation.test(jsondata.lastName) && !checkNameValidation.test(jsondata.address) && !checkNoValidation.test(jsondata.ID) && !checkNoValidation.test(jsondata.zipCode)) {
            return "false"
        }
        else {
            file.writeFile('/home/admin1/Desktop/AddressBook/test/AddressBOutput.json', JSON.stringify(jsondata), 'utf-8', function (err) {
                if (err) {
                    console.log('err');
                }
            })
            return "person added sucessfully";
        }
    }

    updateProfile(jsondata) {
        console.log("jsonData", jsondata);
        var flag=0;
        for (let i = 0; i < jsondata.person.length; i++) {
            if (jsondata.person[i].firstName == "Sss" && jsondata.person[i].lastName == "Ass") {
                
                        
                        jsondata.person[i].address = "Bangaluru",
                        jsondata.person[i].ID =45,
                        jsondata.person[i].zipCode = 789654
                    
                }
                flag=1;
            }
           
                if(flag=1){
                    file.writeFileSync("/home/admin1/Desktop/AddressBook/test/AddressBOutput.json", JSON.stringify(jsondata), 'utf-8')
                    return "update Successfully"
                }
                else
                {
                    return "not updated"

                }
           

     
            }
        
    deleteProfile(index) {

        let deleteData = output.person[index]
        console.log("deleteData", deleteData);

        for (let i = 0; i < output.person.length; i++) {
            if (output.person[i] == deleteData) {
                output.person.splice(index, 1)
            }
        }
        file.writeFile('/home/admin1/Desktop/AddressBook/test/AddressBOutput.json', JSON.stringify(output), 'utf-8', function (err) {
            if (err) {
                return false;
            }
        })
        return "sucessfully deleted"
    }

    sortPersonsByLastName(sortdata) {
        // console.log("x",sortdata);
        console.log("x", sortdata.person);
        var flag = 0;
        for (var n = 0; n < sortdata.person.length - 1; n++) {
            for (var i = n + 1; i < sortdata.person.length; i++) {

                console.log("hjkhfkhsfhshkdfhsh");
                console.log(sortdata.person[n].lastName > sortdata.person[i].lastName)
                var result = sortdata.person[n].lastName.localeCompare(sortdata.person[i].lastName);

                if (result == true) {
                    var temp = sortdata.person[n]
                    sortdata.person[n] = sortdata.person[i]
                    sortdata.person[i] = temp;

                }
                flag = 1;

            }
        }


        if (flag == 1) {
            file.writeFileSync('/home/admin1/Desktop/AddressBook/test/AddressBOutput.json', JSON.stringify(sortdata))
            return "sucessfully sort by lastName"
        }
        else {
            return "not sorted"
        }

    }


    sortPersonsByZipcode(sortingData) {
        var flag = 0;
        for (var n = 0; n < sortingData.person.length - 1; n++) {
            for (var i = n + 1; i < sortingData.person.length; i++) {

                console.log("hjkhfkhsfhshkdfhsh");
                console.log(sortingData.person[n].zipCode > sortingData.person[i].zipCode)
                var result = sortingData.person[n].zipCode.localeCompare(sortingData.person[i].zipCode);

                if (result == true) {
                    var temp = sortingData.person[n]
                    sortingData.person[n] = sortingData.person[i]
                    sortingData.person[i] = temp;

                }
                flag = 1;

            }
        }


        if (flag == 1) {
            file.writeFileSync('/home/admin1/Desktop/AddressBook/test/AddressBOutput.json', JSON.stringify(sortingData))
            return "sucessfully sort by zipCode"
        }
        else {
            return "not sorted"
        }

    }

     
}




var add = new addressBook()
module.exports = add





