const codeEditor = document.getElementById('code');
const lineNumbers = document.getElementById('lineNumbers');

// Fungsi untuk mengupdate nomor baris
function updateLineNumbers() {
    const lines = codeEditor.value.split('\n').length;
    let lineNumbersContent = '';
    for (let i = 1; i <= lines; i++) {
        lineNumbersContent += i + '\n';
    }
    lineNumbers.textContent = lineNumbersContent;
}

// Event listener untuk mengupdate nomor baris saat ada perubahan di textarea
codeEditor.addEventListener('input', updateLineNumbers);

// Event listener untuk sinkronisasi scroll antara nomor baris dan textarea
codeEditor.addEventListener('scroll', () => {
    lineNumbers.scrollTop = codeEditor.scrollTop;
});

// Inisialisasi nomor baris saat pertama kali halaman dimuat
updateLineNumbers();
