const calc = selector => {
    const calcs = document.querySelectorAll(selector);
    const rez = calc.querySelector('.rezult');
    const calcHandler = calc => {

    }

    calcs.forEach(c => calcHandler(c));
    const buttons = calc.querySelector('.buttons');
        let a = '';
        let func = '';

    buttons.addEventListener('click', e => {
        let button = e.target;
        if(!button.classList.contains(btn)) return;

       

        if(button.closest('.main')){
            a += button.innerText;
            console.log(a);
            render();
        }

        if(button.closest('.oper')) {
            if(!b) {
                b = a;
                a = '0';
            } 
            
            if(button.classList.contains('rez')){
                return;
            }
            funk = button.innerText;
        render();
        }
        if (button.closest('.top')){
            if(button.classList.contains('.clear')){
                clearInterval();
                return;
            }

            switch (button.innerText) {
                case '%':
                    a = +a / 100;
                    render();
                    break;
                    case '+/-':
                        a = +a > 0 ? -(+a) : Math.abs(+a);
                        render();
                        break;
                        default:
                            break;
            }
        }
        
    });

    const oper = () => {
        switch(func){
            case '+':
                a = +a + +b;
                render();
                break;
                case '-':
                    a = +a - +b;
                    render();
                    break;
                    case '*':
                        a = +a * +b;
                        render();
                        break;
                        case '/':
                            a = +b / +a;
                            render();
                            break;
                            default:
                                break;

        }
        a = '0';
        b = '0';
        func = '';
        render();
    }
// где-то тут обнулить а и б
    const render = () => {
        rez.innerText = parseFloat(a);

    }
}
calc('.container')