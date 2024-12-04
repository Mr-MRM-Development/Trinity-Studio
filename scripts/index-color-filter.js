   // Menambahkan event listener pada textarea untuk menangani perubahan input
   document.getElementById("code").addEventListener("input", updateOutput);

   // Memperbarui posisi scroll div highlight jika textarea di-scroll
   document.getElementById("code").addEventListener("scroll", syncScroll);

   function updateOutput() {
     const input = document.getElementById("code").value;

     // Filter dan menyoroti kode HTML
     const highlightedHTML = highlightHTML(input);

     // Mengatur konten div dengan HTML yang disorot
     document.getElementById("highlight").innerHTML = highlightedHTML;
   }


   function syncScroll() {
     const editor = document.getElementById("code");
     const highlightDiv = document.getElementById("highlight");
     highlightDiv.scrollTop = editor.scrollTop;
     highlightDiv.scrollLeft = editor.scrollLeft;
   }

   // Fungsi untuk memberikan highlight pada kode HTML
   function highlightHTML(input) {
     // Menyoroti tag HTML dengan warna yang berbeda
     return input
       .replace(/&/g, '&amp;')
       .replace(/</g, '&lt;')
       .replace(/>/g, '&gt;')
       .replace(/("(.*?)")/g, '<span style="color: #ce9178;">$1</span>') // Warna untuk nilai atribut
       .replace(/(&lt;\/?)(\w+)(.*?&gt;)/g, '$1<span style="color: #569cd6;">$2</span>$3') // Warna untuk nama tag
   }
