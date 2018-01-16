/**
 * Created by Slav on 20/04/2016.
 */


   document.getElementById('body').onload = function(){

       loadPage();
   };



function  loadPage(){

    if(sessionStorage.imgSrc === undefined){


        //  load page as default

    }else{


        document.getElementById('detailImg').src = sessionStorage.imgSrc;
        document.getElementById('phoneName').textContent =  sessionStorage.phoneName;
       document.getElementById('desc').textContent =  sessionStorage.phoneDesc;
        document.getElementById('pr').textContent = sessionStorage.price;
        document.getElementById('frontsm').src = sessionStorage.imgSrc;


        document.getElementById('pr-1').onclick = function(){

            sessionStorage.imgThumb = dImg;
            sessionStorage.pNameBask = pName;
            sessionStorage.pr =   pice;
            alert(pice);


        };




    }
}





