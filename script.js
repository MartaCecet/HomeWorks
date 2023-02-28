let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
document.body.appendChild(h1);
h1.classList.add('tit');


let p = document.createElement('p');
p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p);
p.classList.add('txt');


let div0 = document.createElement('div');
//div0.innerHTML = '';
document.body.appendChild(div0);
div0.classList.add('block-info');


let div1 = document.createElement('div');
div1.classList.add('block-1');
//div.innerHTML = '';
div0.appendChild(div1);


let div2 = document.createElement('div');
div2.classList.add('block-2');
//div.innerHTML = '';
div0.appendChild(div2);


let h31 = document.createElement('h3');
h31.classList.add('title-1');
h31.innerHTML = 'FREELANCER';
div1.appendChild(h31);

let h1clone = h1.cloneNode();
div1.appendChild(h1clone);
h1clone.innerHTML = 'Initially designed to';
div1.appendChild(h1clone);
h1clone.style.width = '210px';

let h32 = document.createElement('h3');

h32.innerHTML = 'STUDIO';
div2.appendChild(h32);

let h1clone2 = h1.cloneNode();
div1.appendChild(h1clone2);
h1clone2.innerHTML = 'Initially designed to';
div2.appendChild(h1clone2);
h1clone2.style.color = '#ffffff';
h1clone2.style.width = '210px';


let pclone = p.cloneNode(true);
div1.appendChild(pclone);
pclone.classList.add('txt1');


let pclone2 = p.cloneNode(true);
pclone2.classList.add('text');
div2.appendChild(pclone2);
pclone2.classList.add('txt1');

let button2 = document.createElement('button');
button2.classList.add('btn');
button2.innerHTML = 'START HERE';
div2.appendChild(button2);
button2.style.color = '#ffffff';

let button1 = document.createElement('button');
button1.classList.add('btn');
button1.innerHTML = 'START HERE';
div1.appendChild(button1);


let style = document.createElement('style');
style.innerHTML = `
        * {
            margin: 0;
            padding: 0;
        }

        body {
            margin-top: 20px;
            max-width: 1440px;
            width: 100%;            
        }

        h1 {
            max-width: 210px;
            width: 100%;
            font-family: 'Arvo';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 48px;            
            text-align: center;
            color: #212121; 
            margin: 0 auto;           
        }

        .tit {
            padding-top: 100px;
            max-width: 464px;
            width: 100%;
        }

        h3 {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;            
            text-align: center;
            letter-spacing: 2.4px;
            color: #FFC80A;
            padding-top: 83px;
        }

        .title-1 {
            color: #9FA3A7;
        }

        p {
            max-width: 210px;
            width: 100%;
            font-family: 'OpenSans';
            font-size: 14px;
            line-height: 26px;                     
            text-align: center;
            color: #9FA3A7;
            padding-bottom: 56px;
            padding-top: 25px;
            margin: 0 auto;
        }

        .txt {
            max-width: 264px;
            width: 100%;
            padding-left: 20px;
            padding-right: 20px;
        }
       

        .text {
            color: #FFFFFF;
        }

        .block-info {
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
        }

        .block-1 {
            max-width: 400px;
            width: 100%;
            border: 1px solid #9FA3A7;
            margin-left: auto;
            margin-right: auto;
        }

        
        .block-2 {
            max-width: 400px;
            width: 100%;
            background: #8F75BE;
            border: 1px solid transparent;
            margin-left: auto;
            margin-right: auto;
        }

        .btn {
            border: 3px solid #FFC80A;            
            text-align: center;
            width: 147px;
            height: 46px;
            border-radius: 30px;
            background: none;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 15px;        
            letter-spacing: 2.4px;
            color: #212121;
            margin-left: 30%;
            margin-right: auto;
            cursor: pointer;
            margin-bottom: 82px;          

        }
`;
document.head.appendChild(style);


