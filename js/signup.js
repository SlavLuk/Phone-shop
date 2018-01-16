


/**
 * Created by Slav on 22/04/2016.
 */

$(function() {


    var user = {
        fname:"",
        sname:"",
        phone:"",
        street:"",
        city:"",

        userPass:"",
        userEmail:""


    };

    var users = [];









    function signUp(){


        createPersonObj();




    }

    function createPersonObj(){



            var f = document.getElementById('fname').value;

            var s = document.getElementById('sname').value;

            var p = document.getElementById('phone').value;

            var c = document.getElementById('city').value;

            var str = document.getElementById('street').value;

            var pw = document.getElementById('psw').value;

            var em = document.getElementById('email-1').value;

        var valid = signUpValidate(f,s,p,c,str,pw,em);

        if(valid){

            user.userEmail = em;
            user.fname  = f;
            user.sname  = s;
            user.phone  = p;
            user.city  = c;
            user.street =str;
            user.userPass = pw;


            users.push(user);

            var cust = JSON.stringify(users);

            sessionStorage.setItem('customer',cust);

            window.location = "login.html";
        }else{


            var msg = document.getElementById('email-1');

            msg.focus();

                msg.value = "Please enter valid email address";

            var fn = document.getElementById('fname');
            fn.style.backgroundColor = '#ff5050';
            fn.value = "Please first name";



            var sn =  document.getElementById('sname');
            sn.style.backgroundColor = '#ff5050';
            sn.value = "Please second name";

            var pn =  document.getElementById('phone');

            pn.style.backgroundColor = '#ff5050';
            pn.value = "Please enter phone";

           var ct =  document.getElementById('city');
            ct.style.backgroundColor = '#ff5050';

            ct.value = "Please enter city";

          var st =  document.getElementById('street');
            st.style.backgroundColor = '#ff5050';
            st.value =  "Please enter street";




        }

    }

    document.getElementById('fname').onfocus = function(){

        document.getElementById('fname').style.backgroundColor = '';



    };


    document.getElementById('fname').onblur = function(){

        var fn =  document.getElementById('fname');

        if(fn.value ==''){


            fn.focus();
            fn.value = "Please first name";

        }
    };

    document.getElementById('sname').onfocus = function(){


        document.getElementById('sname').style.backgroundColor = '';


    };
    document.getElementById('sname').onblur = function(){

        var fn =  document.getElementById('sname');

        if(fn.value ==''){


            fn.focus();
            fn.value = "Please second name";

        }
    };
    document.getElementById('phone').onfocus = function(){


        document.getElementById('phone').style.backgroundColor = '';


    };
    document.getElementById('phone').onblur = function(){

        var fn =  document.getElementById('phone');

        if(fn.value ==''){


            fn.focus();
            fn.value = "Please enter phone";

        }
    };

    document.getElementById('city').onfocus = function(){

        document.getElementById('city').style.backgroundColor = '';

    };
    document.getElementById('city').onblur = function(){

        var fn =  document.getElementById('city');

        if(fn.value ==''){


            fn.focus();
            fn.value = "Please enter city";

        }
    };

    document.getElementById('street').onfocus = function(){

        document.getElementById('street').style.backgroundColor = '';
    };

    document.getElementById('street').onblur = function(){

        var fn =  document.getElementById('street');

        if(fn.value ==''){


            fn.focus();
            fn.value = "Please enter street";

        }
    };


    function signUpValidate(f,s,p,c,str,pw,e) {



        var atp = e.indexOf("@");
        var dot = e.lastIndexOf(".");

        if(f==''&&s==''&&p==''&&c==''&&str==''&&pw==''&&e=='' ||atp < 1 || dot < atp + 2 || dot + 2 >= e.length){




            return false;

        }


        return true;


    }

    var btnsup = document.getElementById('signup');

    btnsup.addEventListener('click',signUp);

});