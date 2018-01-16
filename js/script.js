




$(function(){





    var phoneNames = ['Apple-iPhone6Plus-SpaceGrey-64-Front','Apple-iPhone6Plus-SpaceGrey-Front','Apple-iPhone6Plus-SpaceGrey-plus-64-Front',
            'Apple-iPhone-SE-Space-Grey-Front','Front-of-HTC-Desire-530-Dark-Grey-w290-h460',
            'Front-of-Microsoft-Lumia-650-White-w290-h460','HTC-Aero-A9-Front-Grey','HTC-Desire-620-White-Front',
            'HTC-Desire-626-BLue-2-Front','HTC-M8s-Gun-Metal-Front','HTC-ONEM9-Grey-Front','Huawei-AscendG7-Grey-Front_1',
            'Huawei-P8-Black-Front','Huawei-Y3-Black-Front','Huawei-Y5-Black-Front-W4G_1','Huawei-Y6-Black-Front',
            'iphone-6s-grey-64-front','iphone-6s-grey-front','iphone-6s-grey-plus-front','Microsoft-Lumia535-Orange-Front',
            'Nokia-550-Black-Front','Nokia-Lumia635-Black-Front_1','Samsung-CorePrime-Black-Front','Samsung-GalaxyA3-Black-Front_1',
            'Samsung-GalaxyA5-Black-Front','Samsung-Galaxy-J3-Black-Front','Samsung-GalaxyS5-Black-Front',
            'Samsung-GalaxyS6-Black-Front','Samsung-GalaxyS6Edge-Black-Front_1','Samsung-GalaxyS6-EdgePlus-Black-Front',
            'Samsung-Galaxy-S7-Black-Back','Samsung-Galaxy-S7-BlackFront','Samsung-Galaxy-S7-Edge-Black-Front',
            'Samsung-Grand-Prime-Black-Front','Samsung-KeystoneE1200-Black-Front','Samsung-S5-Neo-Black-Front',
            'Sony-XperiaE3-Black-Front_1','Sony-Xperia-M4-Aqua-Black-Front','Sony-XperiaZ5-Black-Front',
            'Sony-XperiaZ5Compact-Black-Front','Vodafone-Smart-First-Black-Front','Vodafone-Smart-Prime-Black-Front',
            'Vodafone-Smart-Speed-6-Black-Front','Vodafone-Smart-Ultra-Black-Front'];

    var prices = [669.99,499.99,179.99,555.55,345.99,245.99,345.99,234.99,555.99,679.99,320.99,689.99,178.99,165.99,186.99,699.99,599.99,499.99,599.99,455.99,340.99,
    189.99,230.99,179.88,156.99,260.88,400.99,179.99,555.55,345.99,245.99,320.99,689.99,320.99,689.99,178.99,165.99,186.99,699.99,599.99,
        499.99,599.99,455.99,340.99];

    var captionNames = [
        'Apple iphone 6 16gb',
        'Apple iPhone 6 64gb',
        'Apple iPhone 6 Plus 16gb',
        'Apple iPhone SE 16gb',
        'HTC Desire 530',
        'Microsoft Lumia 650',
        'HTC one A9',
        'HTC Desire 620',
        'HTC Desire 626',
        'HTC one M8s',
        'HTC ONE M9 ',
        'Huawei Ascend G7',
        'Huawei P8',
        'Huawei Y3',
        'Huawei Y5',
        'Huawei Y6',
        'apple iphone 6s 64gb',
        'apple iphone 6s 16gb',
        'apple iphone 6s plus',
        'Microsoft Lumia 535',
        'Microsoft Lumia 550',
        'Nokia Lumia 635',
        'Samsung  Core Prime',
        'Samsung Galaxy A3',
        'Samsung Galaxy A5',
        'Samsung Galaxy J3',
        'Samsung Galaxy S5',
        'Samsung Galaxy S6',
        'Samsung Galaxy S6 Edge',
        'Samsung Gal S6 Edge+',
        'Samsung Galaxy S7',
        'Samsung Galaxy S7',
        'Samsung Galaxy S7 Edge',
        'Samsung  Grand Prime',
        'Samsung Keystone E1200',
        'Samsung S5 Neo',
        'Sony Xperia E3',
        'Sony Xperia M4 Aqua',
        'Sony Xperia Z5',
        'Sony Xperia Z5 Compact',
        'Vodafone Smart First 6',
        'Vodafone Smart Prime 6',
        'Vodafone Smart Speed 6',
        'Vodafone Smart Ultra 6'];

        var descriptions = ['iPhone 6 isn’t simply bigger – it’s better in every way. Larger, yet dramatically thinner; more powerful,' +
        ' but remarkably power efficient. Its one continuous form where hardware and software function in perfect unison, creates a new generation ' +
        'of iPhone that’s better by any measure.','iPhone 6 isn’t simply bigger – it’s better in every way. Larger, yet dramatically thinner; more powerful,' +
        ' but remarkably power efficient.' +
        ' Its one continuous form where hardware and software function in perfect unison, creates a new generation of iPhone that’s better by any measure.',
            'iPhone 6 Plus isn’t simply bigger — it’s better in every way. Larger, yet dramatically thinner. More powerful, but remarkably power efficient.' +
        ' It’s one continuous form where hardware and software function in perfect unison, creating a new generation of iPhone that’s better by any measure.','Introducing ' +
            'the iPhone SE, the most powerful 4-inch iPhone ever. Refining one of its most popular designs, coupled with reinvention – inside and out.','Packed full of high end' +
            ' features at an affordable price, the HTC Desire 530 provides you with a fantastic multimedia experience','Enjoy a seamless cross-device experience with Windows 10 and' +
            ' the Microsoft Lumia 650.','The HTC One A9 features a super-thin metal frame with an elegant finish, expandable SD card memory and edge-to-edge Corning Gorilla Glass.',
            'Change your view with the HTC Desire 620, featuring best-in-class camera tools with a large 5-inch screen and quad-core processing power. Take incredible photos and videos' +
            ' from both sides and stream, download and view HD content in a snap with LTE connectivity.','Get more looks, more performance, and more style with the HTC Desire 626 series',
            'With a 5-inch Full HD screen and dual front-facing speakers for really big sound, the all aluminium HTC One M8s has been meticulously designed to deliver an incredible' +
            ' smartphone experience.','Premium design with premium software: Location-smart software for info based on where you are, when you’re there. Unrivalled dual-tone ' +
            'design with mirrored edges.','Huawei Ascend G7 introduces a new vision of smartphone design, where every detail of form and function has been created to improve your experience. ' +
            'The 5.5-inch screen sits slightly higher than the frame, improving appearance and viewing angles. ' +
            'An all-metal back provides a premium feel in the hand and the unique flowing curves and ultra-slim body give the design elegance, balance, and strength.','The Huawei P8 seamlessly ' +
            'brings elegance and comfort together with a stunning piece of technology crafted with efficiency in mind.','The Huawei Y3 delivers efficiency and high-speed performance, with a 5MP rear' +
            ' camera with dual flash and 2MP front camera.','Driven by its supercharged quad-core processor, Huawei Y5 delivers both efficiency and a high-speed performance.','Owing to its classic compact ' +
            'frame and sleekly designed phone body, Huawei Y6 not only affords ergonomic, user-friendly experiences, but also presents a stylish appearance.','The moment you use the new iPhone 6s, you will know you’ve never felt anything like it before. '+
            'With just a single press, 3D Touch allows you to do more than ever before, while Live Photos bring your memories to life in a powerfully vivid way; and that is just the beginning. ' +
            'Take a deeper look at iPhone 6s, and you will find innovation on every level.','The moment you use the new iPhone 6s, you will know you’ve never felt anything like it before. '+
            'With just a single press, 3D Touch allows you to do more than ever before, while Live Photos bring your memories to life in a powerfully vivid way; and that is just the beginning. ' +
            'Take a deeper look at iPhone 6s, and you will find innovation on every level.','The moment you use the new iPhone 6s, you will know you’ve never felt anything like it before. '+
            'With just a single press, 3D Touch allows you to do more than ever before, while Live Photos bring your memories to life in a powerfully vivid way; and that is just the beginning. ' +
            'Take a deeper look at iPhone 6s, and you will find innovation on every level.','Get the latest Windows Phone experience, with better selfie functions and all the apps you love and need',
            'Experience the power of Windows 10 at a price that doesn\'t hurt your pocket. Enjoy high speed mobile connectivity with 4G LTE, multitasking and Edge browser.','Experience the power of' +
            ' Windows 10 at a price that doesn\'t hurt your pocket. Enjoy high speed mobile connectivity with 4G LTE, multitasking and Edge browser.','The Samsung Galaxy Core Prime features a simple and elegant design built with a durable frame that' +
            ' feels like anodized metal. With a thickness of just 8.8mm, it fits comfortably in one hand or in your pocket, making it easy to carry with you anywhere.','The Samsung Galaxy A3 boasts an innovative, luxurious design and a stunning HD display. You can feel the premium quality of the' +
            ' sleek full metal body in your hand. Equipped with a 1.2 Ghz quad core processor, the Galaxy A3 runs seamlessly watching movies, listening and running apps at amazing speeds.','Stand out with a premium full metal design. Capture the moment ' +
            'with enhanced selfie settings. Enjoy a perfect view every time with adaptive 5-inch display. Take control with new interface and sound experience. ','The Samsung Galaxy J3 brings the best you would expect from one of the world\'s largest' +
            ' smartphone manufacturers at an affordable price.','The Samsung Galaxy S5 has an incredibly vivid 5.1-inch Full HD Super AMOLED screen that allows you to make the most of all your viewing. New upgraded security that includes fingerprint unlocking. ' +
            'Designed to focus on what matters most to you. Its superior 16MP camera offers 0.3-second autofocus that’s faster than any other smartphone.','Enhance your flair with the Samsung Galaxy S6. Its artisanal design and peerless functionality blends seamlessly ' +
            'into a fusion of metal and glass.','Enhance your flair with the Samsung Galaxy S6 edge. Its artisanal design and peerless functionality blends seamlessly into a fusion of metal and glass.',
            'The world’s first dual-edge display was born from a need to create something new. That’s how Samsung built the Galaxy S6 edge from the ground up. Now, it\'s an upgrade. In every sense of the word. ' +
            'It\'s Galaxy S6 edge+','The latest member of the Galaxy S family, the Galaxy S7 has all the features you’ve come to know and love from the Galaxy S range, and much more. As the latest members of the Galaxy S family, they\'ve got all the features you\'ve come to know and love.' +
            ' Water resistance, fast charging, and the return of expandable storage with the microSD slot – it\'s all there.','The latest member of the Galaxy S family, the Galaxy S7 has all the features you’ve come to know and love from the Galaxy S range, and much more. As the latest members of the Galaxy ' +
            'S family, they\'ve got all the features you\'ve come to know and love. Water resistance, fast charging, and the return of expandable storage with the microSD slot – it\'s all there.','Innovation breeds style with the Samsung Galaxy S7 edge. Following from the success of last years dual curved edge, ' +
            'Samsung have added additional functionality to the curved flagship\'s screen.','Only 8.6 millimeters thick, the Galaxy Grand Prime combines sophistication and powerful performance, ' +
            'compressing all the essential features for fun on the go into a sleek, modern package.','Looking for a simple phone with talk and text functionality. The Samsung E1200 gives up to 720 hours of ' +
            'standby time so it\'s perfect for use as an emergency or first phone.','The Samsung Galaxy S5 Neo can go anywhere and everywhere, its water and dust resistant and has a built in heart rate monitor.',
            'Slim, resilient and ready for anything, the Xperia E3 brings you Sony quality and design in a package made to suit your life.','Get more with two powerful cameras, waterproofing and a two-day battery in the M4 Aqua.',
            'A revolutionary camera and an innovative design – meet the waterproof smartphone that does picture perfect, every day.','A compact design and a fast autofocus camera. This is the smartphone you want by your side, wherever the day takes you.',
            'The Smart first 6 is designed specifically to give you the easiest smartphone experience possible, with its simple homescreen and funtionality, you\'re only ever one tap away from making a call,' +
            ' sending a text or email, taking a photo or browsing the web.','The Vodafone Smart Prime 6 is a 4G smartphone with premium looks, functionality and affordability.','The Vodafone Smart speed 6 is a stylish 4G smartphone with quad' +
            ' core processor and Lollipop 5.1 at a great price.','Powerful on the inside and beautiful on the outside, Smart ultra features exquisite design details to house all of its superb components, such as the 13MP camera,' +
            ' able to shoot in burst mode within less than 2 seconds, or its 4G and NFC capabilities.'];



function createPhoneDetailPage(phoneN){

    var row = document.getElementById('row');



    for(var i = 0;i<phoneN.length;i++){

        var divCol = document.createElement('DIV');
        divCol.className = "col-sm-6 col-md-3 col-lg-4";

        var divThum = document.createElement('DIV');
        divThum.className = "thumbnail resize";

        var img = document.createElement('IMG');
        img.setAttribute('id','id'+i);
        img.className = 'phoneimg';

        var a = document.createElement('a');
        a.setAttribute('href','phone_details.html');



        var divCapt = document.createElement('DIV');
        divCapt.className = "caption";

        var h4 = document.createElement('H4');
        h4.className = 'phonename';
        var text = document.createTextNode("SAMSUNG GALAXY S7");

        h4.appendChild(text);
        divCapt.appendChild(h4);
        a.appendChild(img);

        divThum.appendChild(a);
        divThum.appendChild(divCapt);

        var divThumb1 = document.createElement('DIV');
        divThumb1.className = 'thumbnail';

        var divCapt1 = document.createElement('DIV');
        divCapt1.className = "caption";



        var h3 = document.createElement('H3');
        var text1 = document.createTextNode("Bill pay:");



        h3.appendChild(text1);

        var p = document.createElement('P');

        p.className = 'price';

        var price = document.createTextNode('300.00');
        p.appendChild(price);

        var span = document.createElement('SPAN');
        span.className = 'glyphicon glyphicon-euro';
        span.setAttribute('aria-hidden',true);
        p.appendChild(span);

        h3.appendChild(p);
        divCapt1.appendChild(h3);
        divCapt1.appendChild(p);
        divThumb1.appendChild(divCapt1);



        divCol.appendChild(divThum);
        divCol.appendChild(divThumb1);
        row.appendChild(divCol);





    }
    return true;
}

    var users = {


        userEmail:['smith@gmail.com','john@orelly.com'],
        userPass:['11111','22222']




    };







function swapContent(phonName,captionNames,descriptions,prices){

    var   imgs = document.getElementsByClassName('phoneimg');
    var captions = document.getElementsByClassName('phonename');
    var price = document.querySelectorAll('.price');
    var pr1 = document.getElementById('pr-1');


    var l;
    for(l = 0;l<phoneNames.length;l++){

        price[l].textContent = prices[l];
        imgs[l].src = 'images/thumbnails/'+ phoneNames[l]+'.png';

        captions[l].textContent = captionNames[l].toUpperCase();

    }

    var clickedPhone = document.querySelectorAll('img.phoneimg');



    var k;

    for(k= 0;k<phonName.length;k++){

        clickedPhone[k].addEventListener('click',function(){

            sessionStorage.imgSrc = this.src;
            sessionStorage.phoneName = captionNames[parseInt(this.id.substring(2,4))];
            sessionStorage.phoneDesc = descriptions[parseInt(this.id.substring(2,4))];
            sessionStorage.price = prices[parseInt(this.id.substring(2,4))];




        });
    }


    return true;

}



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



            if(document.referrer =="phone_details.html"){

                window.location = "shoppingbasket.html";


            }else{



                window.location = document.referrer;


                sessionStorage.className = 'btn btn-default  btn-lg';


            }


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




  

    /**
     * Created by Slav on 21/04/2016.
     */


   createPhoneDetailPage(phoneNames);


    swapContent(phoneNames,captionNames,descriptions,prices);











});




