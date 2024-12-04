// Konfigurasi loader Monaco Editor
require.config({ paths: { 'vs': 'path/to/monaco-editor/min/vs' } });

// Memuat Monaco Editor
require(['vs/editor/editor.main'], function () {
    // Menghubungkan Monaco Editor ke elemen dengan id "code"
    monaco.editor.create(document.getElementById('code'), {
        value: `function helloWorld() {
console.log("Hello, world!");
}`,
        language: 'javascript',
        theme: 'vs-dark'
    });
});