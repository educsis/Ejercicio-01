const form  = document.getElementsByTagName("form")[0];
form.addEventListener("submit", onSubmit);

/**
 *
 * @param {Event} event
 */
 function onSubmit(event)
 {
    event.preventDefault();

    const data = new FormData(form);
    const values = Array.from(data.entries());

    const [frmNumero] = values;

    const numero = frmNumero[1];

    alert(calcularDigitos(numero));
 }

 let setDeNumeros = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
};

function calcularDigitos(digitos) {
    if (!digitos.length) {
        return [];
    }

    let previaCombinacion = [''];

    for (let i = 0; i < digitos.length; i++) {
        let nuevaCombinacion = [];
        for (let x = 0; x < previaCombinacion.length; x++) {
            for (let letra of setDeNumeros[digitos[i]]) {
                nuevaCombinacion.push(previaCombinacion[x].concat(letra));
            }
        }

        if (i == digitos.length - 1) {
            return nuevaCombinacion;
        }

        previaCombinacion = nuevaCombinacion;
    }
};