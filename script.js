let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                if (string.includes('%')) {
                    let parts = string.split('%');
                    let base = parseFloat(parts[0].trim());
                    let percentage = parseFloat(parts[1].trim());

                    if (!isNaN(base) && !isNaN(percentage)) {
                        string = String((base * percentage) / 100);
                    }
                } else {
                    string = eval(string);
                }
                input.value = string; 
            } catch {
                input.value = "Error"; 
            }
        } else if (e.target.innerHTML == 'C') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == '←') {
            if (string.length > 0) {
                string = string.substring(0, string.length - 1);
                input.value = string;
            }
        } else if (e.target.innerHTML == '±') {
            if (string) {
                if (string[0] === '-') {
                    string = string.substring(1);
                } else {
                    string = '-' + string;
                }
            }
            input.value = string;
        } else if ('%/*-+'.includes(e.target.innerHTML)) {
        
            if (string.length > 0 && !'%/*-+'.includes(string[string.length - 1])) {
                string += e.target.innerHTML;
                input.value = string;
            }
        } else if (e.target.innerHTML == '.') {
        
            if (string.length === 0 || '%/*-+'.includes(string[string.length - 1])) {
                string += '0.'; 
            } else if (!string.includes('.')) {
                string += '.';
            }
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
