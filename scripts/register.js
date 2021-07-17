const allInputs = document.getElementsByName('registration');
const submit = allInputs[allInputs.length-1].parentElement.nextElementSibling.firstElementChild;
const displayName = document.getElementsByTagName('p').item(0);
const names = allInputs[0];
let reg = /^[A-Za-z]{5,}(\s?){1}([a-z]?){5,}$/i;

function   validateName(val, re){
    // names.style.border = 'thin solid transparent';
    re = reg;
    val = names.value;
    if(re.test(val)){
        console.log(`${val} passed ${re}`)
        names.className = 'valid'
        return  {
            done : true,
            displayname : function(){
                return displayName.textContent = val.substr(0,1);
            }
        }
    }else   {
        names.setAttribute('class', 'invalid');
        console.log(`${val} did not pass ${re}`);
        return false;
    }
}
names.onkeyup = validateName;
let regs = /^(\d){4}$/;
let password = allInputs[2];
function   validatePassword(val, re){
    // names.style.border = 'thin solid transparent';
    re = regs;
    val = password.value;
    if(re.test(val)){
        console.log(`${val} passed ${re}`)
        password.className = 'valid'
        displayName.textContent = (validateName().displayname() + validateUserName().displayname()).toUpperCase();
        return true;
    }else   {
        password.setAttribute('class', 'invalid');
        console.log(`${val} did not pass ${re}`);
        return false;
    }
}
let username = allInputs[1];
function   validateUserName(val, re){
    // names.style.border = 'thin solid transparent';
    re = reg;
    val = username.value;
    if(re.test(val)){
        console.log(`${val} passed ${re}`)
        username.className = 'valid'
        return {
            done : true,
            displayname : function(){
                return val.substr(0,1)
            }
        };
    }else   {
        username.setAttribute('class', 'invalid');
        console.log(`${val} did not pass ${re}`);
        return false;
    }
}
username.onkeyup = validateUserName;
password.onkeyup = validatePassword;
submit.onclick = function(e){
    e.preventDefault();
    if(validateName() === false || validatePassword() === false || validateUserName() === false){
        console.log('Hmm!');
    }else{
        location.href = 'index.html';
    }
}
// displayName.textContent = (validateName().displayname() + validateUserName().displayname()).toUpperCase();
// displayName.textContent = (validateName().displayname() + val.substr(0,1)).toUpperCase();