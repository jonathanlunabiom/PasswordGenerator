// // Assignment Code
 var generatebtn = document.querySelector("#generate");
 var lowercase = "abcdefghijklmnopqrstuvwxyz";
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var numeric = "1234567890";
 var specialCh = "!$%&/()=?¡*.,-_";
 var passwordText = document.querySelector("#password");
 var password = "";
 var flag = true;

alert("Select which properties do you want on your password")
let lenghtPassword = prompt("Enter the lenght of your password (8-128 characters)");
var lcase = confirm("lowercase characters (OK/yes - CANCEL/no)");
var ucase = confirm("uppercase characters (OK/yes - CANCEL/no)");
var nchar = confirm("numeric characters (OK/yes - CANCEL/no)");
var spchar = confirm("special characters (OK/yes - CANCEL/no)");

 function randomlower(){
    return lowercase[Math.floor(Math.random() * lowercase.length)];
 }
 function randomupper(){
    return uppercase[Math.floor(Math.random() * uppercase.length)];
 }
 function randomnumber(){
    return numeric[Math.floor(Math.random() * numeric.length)];
 }
 function randomspecial(){
    return specialCh[Math.floor(Math.random() * specialCh.length)]
 }

 function generatePassword(){
   for (let i=0; i<=lenghtPassword;){
       if (lcase){
           password+=randomlower();
           i++;
       }
       if(ucase){
            password+=randomupper();
            i++;
       }
       if(nchar){
           password+=randomnumber();
           i++;
        }
       if(spchar){
           password+=randomspecial();
           i++;
       }
       }
      passwordText.value = password;   
      password = "";
}

 if (lcase==false && ucase==false && nchar==false && spchar==false) {
    flag = false;
 }

if (flag && lenghtPassword<129 && lenghtPassword>7){
   generatebtn.addEventListener("click", generatePassword);
}else{
    alert("You didn't choose any type of character, password cannot be created or you overpass the limit of characters");
}