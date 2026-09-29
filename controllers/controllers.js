

export function sumar(a, b) {
    return a + b;
}

export function multiplicar(a, limite = 13) {
    const tabla = [];
    for (let i = 1; i <= limite; i++) {
        tabla.push(`${a} x ${i} = ${a * i}`);
    }
    return tabla;
}

export function numeroALetras(num) {
    num = Math.floor(Number(num));
    if (isNaN(num) || num < 1 || num > 1000) {
        return "Número fuera de rango (1 - 1000)";
    }

    if (num === 1000) return "mil";
    if (num === 100) return "cien";

    const unidades = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
    const decenasEspeciales = {
        10: 'diez', 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince',
        16: 'dieciséis', 17: 'diecisiete', 18: 'dieciocho', 19: 'diecinueve',
        20: 'veinte', 21: 'veintiuno', 22: 'veintidós', 23: 'veintitrés', 24: 'veinticuatro',
        25: 'veinticinco', 26: 'veintiséis', 27: 'veintisiete', 28: 'veintiocho', 29: 'veintinueve'
    };
    const decenas = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
    const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

    let resultado = '';

    const c = Math.floor(num / 100);
    const restoC = num % 100;

    if (c > 0) {
        resultado += centenas[c];
    }

    if (restoC === 0) {
        return resultado.trim();
    }

    if (c > 0) {
        resultado += ' ';
    }

    if (restoC in decenasEspeciales) {
        resultado += decenasEspeciales[restoC];
    } else {
        const d = Math.floor(restoC / 10);
        const u = restoC % 10;

        if (d > 0) {
            resultado += decenas[d];
            if (u > 0) {
                resultado += ' y ' + unidades[u];
            }
        } else if (u > 0) {
            resultado += unidades[u];
        }
    }

    return resultado.trim();
}

