let screen = document.getElementById('pantalla');
const buttons = document.querySelectorAll("#botones a");

     for (const button of buttons) {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            if (e.target.dataset.key == 'igual') {
                screen.textContent = eval(screen.textContent);
                if (screen.textContent.length > 8) {
                    screen.textContent = eval(screen.textContent).toFixed(8);
                }
            } else if (e.target.dataset.key == 'CE') {
                screen.textContent = '';
            } else if (e.target.dataset.key == '√') {
                screen.textContent = (Math.sqrt(eval(screen.textContent))).toFixed(8);
            } else if (e.target.dataset.key == '%') {
                screen.textContent = (eval(screen.textContent)/100).toFixed(8);
            } else if (e.target.dataset.key == '1/x') {
                screen.textContent = (Math.pow(eval(screen.textContent),-1)).toFixed(8);
            } else {
                screen.textContent = screen.textContent + e.target.dataset.key;
            }
            
        });
    }
