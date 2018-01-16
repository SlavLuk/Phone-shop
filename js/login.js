/**
 * Created by Slav on 21/04/2016.
 */

$(function(){


 var users = {


     userEmail:['smith@gmail.com','john@orelly.com'],
     userPass:['11111','22222']




 };



    function validateUsers()
    {



            var m = sessionStorage.getItem('customer');

        var find = false;

        if(m!=null){
            var obCust = JSON.parse(m);



            var e = 0;


            while( e <obCust.length && !find){

                if(document.getElementById('mail').value == obCust[e].userEmail && document.getElementById('pass').value == obCust[e].userPass){

                    find = true;


                }

                e++;

            }




        }



        var emailID = document.getElementById('mail').value;
        var psw = document.getElementById('pass').value;


        var found = false;
        var i =0;

        while(i<users.userEmail.length && !found){

            if(users.userEmail[i]==emailID && users.userPass[i]==psw){

                found = true;

            }

            i++;

        }
        if(found || find){


              window.location ="phone_details.html";



            return true;

        }else {


            var formgr = document.querySelectorAll('.form-group');

            formgr[1].className +=" has-error";
            formgr[2].className +=" has-error";



            document.getElementById('mail').value = "Please try again";
            document.getElementById('pass').value="";

        return false;

        }

    }

    document.getElementById('mail').onfocus = function(){

        document.getElementById('mail').value = "";
        document.querySelectorAll('.form-group')[1].className = 'form-group';


    };

    document.getElementById('pass').onfocus = function(){

        document.getElementById('pass').value = "";
        document.querySelectorAll('.form-group')[2].className = 'form-group';


    };


    var user = document.getElementById('loginform');
    user.addEventListener('click',validateUsers);




});




