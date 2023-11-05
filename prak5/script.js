// Mendapatkan elemen output (layar) dan variabel ekspresi saat ini
let output = document.getElementById('output');
let currentExpression = '';

// Fungsi untuk menambahkan karakter ke ekspresi
function appendToExpression(character) {
    currentExpression += character;
    output.value = currentExpression;
}

// Fungsi untuk menghapus layar
function clearDisplay() {
    currentExpression = '';
    output.value = '';
}

// Fungsi untuk menghitung persentase
function calculatePercentage() {
    try {
        currentExpression = String(parseFloat(evaluateExpression(currentExpression)) / 100);
        output.value = currentExpression;
    } 
    catch (error) {
        output.value = 'Error';
    }
}

// Fungsi untuk menghitung hasil ekspresi
function calculateResult() {
    try {
        currentExpression = evaluateExpression(currentExpression);
        output.value = currentExpression;
    } 
    catch (error) {
        output.value = 'Error';
    }
}

// Fungsi untuk mengevaluasi ekspresi matematis
function evaluateExpression(expression) {
    // Melakukan perhitungan buka-tutup kurung dengan rekursi
    while (/\([^()]+\)/.test(expression)) {
        expression = expression.replace(/\(([^()]+)\)/g, function(match, group) {
            return evaluateExpression(group);
        });
    }
    // Menghitung hasil ekspresi matematis menggunakan eval
    return eval(expression);
}
