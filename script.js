

/* These are all for the info containers*/

/*This one will be used to hide the entire thing once the alarm is activated*/ 
let contentContainer = document.querySelector('.contentcontainer');

let passwordContainer = document.getElementById('passwordcontainer');
let welcomeMessage = document.getElementById('welcomemessage');
let description = document.getElementById('description');

/* This one corresponds to the password creation*/
let passwordInput = document.getElementById('firstpassword');

/* This is the create password input*/
let input1 = document.getElementById('input1');
let createdPassword = '';

/*And these confirm it */
let confirmPassword = document.getElementById('confirm_new_password');
let passwordWarning = document.getElementById('password_warning');


/* These ones correspond to once you have created the password*/
let enterPassword = document.getElementById('enter_password');
let input2 = document.getElementById('input2');
let sendPassword = document.getElementById('send_password');
let attemptsWarning = document.getElementById('attempts_warning');

/*And these ones correspond to once you have already logged in the system*/
let logInSuccess = document.getElementById('login_success');
let resetButton = document.getElementById('reset_button');


/* The following correspond to all elements that will be handled
during the intruder alert phase once the passwors is incorrectly inputed*/


let alertContainer = document.querySelector('.alert_container');
let intruder = document.querySelector('.intruder_container');
let alert_sign = document.querySelector('.alertword_container');
let alert_image = document.querySelector('.warning_icon');
let unblockButton = document.querySelector('.unblock_container');








/*These manage the initial states of all elements
what's hidden and what's not hidden at first */


/*This one will be used to hide the entire thing once the alarm is activated*/ 
contentContainer.classList.remove('hidden');

passwordContainer.classList.remove('hidden');
welcomeMessage.classList.remove('hidden');
description.classList.remove('hidden');

passwordInput.classList.remove('hidden');
input1.classList.remove('hidden');
confirmPassword.classList.remove('hidden');
passwordWarning.classList.add('hidden');

enterPassword.classList.add('hidden');
input2.classList.add('hidden');
sendPassword.classList.add('hidden');
attemptsWarning.classList.add('hidden');


logInSuccess.classList.add('hidden');
resetButton.classList.add('hidden');



/*This will manage states for all the intruder alert elements */
intruder.classList.remove('hidden');
alert_sign.classList.remove('hidden');
alert_image.classList.remove('hidden');
unblockButton.classList.add('hidden');
alertContainer.classList.add('hidden');





/*Our first function saves the password
and adds and removes certain elements depending on whether
you inputed a password or not*/


/*SUPER IMPORTANT: there are interval functionalities 
to make warnings briefly flash, a toggle for the warning message 
has been set so it toggles in intervals of cetrain miliseconds, 
and these intervals will run during a certainamount of time until
setTimeOut interrupts them */


confirmPassword.addEventListener('click', function savePassword(){

    createdPassword = input1.value;
    if (input1.value === ''){
        function intermitent(){
            function toggle(){
                passwordWarning.classList.toggle('hidden');
            }
            
            const interval = setInterval(toggle,100);

            function stopInterval(){
                clearInterval(interval);
                passwordWarning.classList.remove('hidden');
            }

            setTimeout(stopInterval,600);
        }
        intermitent();

    } else {
        passwordWarning.classList.add('hidden');
        passwordInput.classList.add('hidden');
        input1.classList.add('hidden');
        confirmPassword.classList.add('hidden');
        input1.value = '';

        enterPassword.classList.remove('hidden');
        input2.classList.remove('hidden');
        sendPassword.classList.remove('hidden');
                }
            } 
        
        
);


/* INTERVAL SYSTEM EXAMPLE, DO NOT TOUCH OR DELETE*/
/*
function intermitent(){
            function toggle(){
                passwordWarning.classList.toggle('hidden');
            }
            const interval = setInterval(toggle,100);

            function stopInterval(){
                clearInterval(interval);
                passwordWarning.classList.remove('hidden');
            }

            setTimeout(stopInterval,500);
        }

*/
/* INTERVAL SYSTEM EXAMPLE, DO NOT TOUCH OR DELETE*/







/*WORKING CODE DON'T YOU DARE TOUCH IT*/
/*
function reset(){
    passwordInput.classList.remove('hidden');
    input1.classList.remove('hidden');
    confirmPassword.classList.remove('hidden');
    logInSuccess.classList.add('hidden');
    resetButton.classList.add('hidden');
    input1.value = '';

}

resetButton.addEventListener('click',reset);


let attemptsRemaining = 3;

function checkPassword(){
    if (createdPassword === input2.value){
        logInSuccess.classList.remove('hidden');
        resetButton.classList.remove('hidden');

        enterPassword.classList.add('hidden');
        input2.classList.add('hidden');
        sendPassword.classList.add('hidden');
        input2.value = '';
        attemptsWarning.textContent = '';
    } else  {
        attemptsRemaining--;
        attemptsWarning.classList.remove('hidden');
        input2.value = '';
        attemptsWarning.textContent = `Wrong password, ${attemptsRemaining} attempts remaining`;
         if (attemptsRemaining === 0){
           contentContainer.classList.add('hidden');
        }
    }
}

sendPassword.addEventListener('click', checkPassword);
*/
/*WORKING CODE ABOVE DON'T YOU DARE TOUCH IT*/


function reset(){
    passwordInput.classList.remove('hidden');
    input1.classList.remove('hidden');
    confirmPassword.classList.remove('hidden');
    logInSuccess.classList.add('hidden');
    resetButton.classList.add('hidden');
    input1.value = '';

}

resetButton.addEventListener('click',reset);


let attemptsRemaining = 3;

function checkPassword(){
    if (createdPassword === input2.value){
        logInSuccess.classList.remove('hidden');
        resetButton.classList.remove('hidden');

        enterPassword.classList.add('hidden');
        input2.classList.add('hidden');
        sendPassword.classList.add('hidden');
        input2.value = '';
        attemptsWarning.textContent = '';
    } else  {
        attemptsRemaining--;
        /*attemptsWarning.classList.remove('hidden');*/

        function intermitent(){
            function toggle(){
                attemptsWarning.classList.toggle('hidden');
            }
            const interval = setInterval(toggle,100);

            function stopInterval(){
                clearInterval(interval);
                attemptsWarning.classList.remove('hidden')
            }

            setTimeout(stopInterval, 600);
        }
        intermitent();


        input2.value = '';
        attemptsWarning.textContent = `Wrong password, ${attemptsRemaining} attempts remaining`;
         if (attemptsRemaining === 0){
           contentContainer.classList.add('hidden'); 
           alertContainer.classList.remove('hidden');
           

           /*This displays the intruder alert words*/
           function intruderAlert(){
            function warningFlash(){
                intruder.classList.toggle('hidden');
                alert_sign.classList.toggle('hidden');
            }
            /*Sets the duration of each repeating interval */
            const interval = setInterval(warningFlash, 1000);

            function stopInterval(){
                clearInterval(interval);
                intruder.classList.remove('hidden');
                alert_sign.classList.remove('hidden');
            }
            /* Sets the duration of the whole interval cycle*/
            setTimeout(stopInterval, 10000);
           }


           /*This displays the warning sign with the skull */
           function alertImage(){
            function alertFlash(){
                alert_image.classList.toggle('hidden');
            }

            const interval = setInterval(alertFlash, 300);

            function stopInterval2(){
                clearInterval(interval);
                alert_image.classList.remove('hidden');
            }

            setTimeout(stopInterval2, 10000);
           }
           
           function unblock(){

            /* Hides alert screen*/
            alertContainer.classList.add('hidden');
            unblockButton.classList.add('hidden');

            /*Shows normal system (Create Password) */
            contentContainer.classList.remove('hidden');

            /* Resets saved data*/
            createdPassword = '';
            attemptsRemaining = 3;
            
            /*Clears inputs and warning text */
            input1.value = '';
            input2.value = '';
            attemptsWarning.textContent = '';
            attemptsWarning.classList.add('hidden');  
            
            /*returns to create password screen*/
            passwordInput.classList.remove('hidden');
            input1.classList.remove('hidden');
            confirmPassword.classList.remove('hidden'); 

            /*Hide log in screen*/
            enterPassword.classList.add('hidden');
            sendPassword.classList.add('hidden');
            input2.classList.add('hidden');

            /* Hide success reset elements*/
            logInSuccess.classList.add('hidden');
            resetButton.classList.add('hidden');


           }

           unblockButton.addEventListener('click', unblock);




           /*This displays the unblock button so restar the whole system */
           function unblock_Button(){
            function display_unblock_button(){
                unblockButton.classList.remove('hidden');
            }
            setTimeout(display_unblock_button, 10000);
           }

           /*And here we call all functions*/
           intruderAlert();
           alertImage();
           unblock_Button();
    

        }
    }
}

sendPassword.addEventListener('click', checkPassword);




/*Manage states of content container and intruder alert sings 
in case you need to edit them*/ 
/*
contentContainer.classList.add('hidden');

alertContainer.classList.remove('hidden');


unblockButton.classList.remove('hidden');

*/




