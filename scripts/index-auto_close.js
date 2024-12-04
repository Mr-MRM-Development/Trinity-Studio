const textarea = document.getElementById('code');

// Fungsi untuk menambahkan tag penutup setelah tag pembuka
function autoCloseTags(event) {
  const cursorPosition = textarea.selectionStart;
  let content = textarea.value;

  // Daftar tag HTML yang tidak memerlukan tag penutup (self-closing tags)
  const selfClosingTags = ['br', 'img', 'input', 'hr', 'meta', 'link'];

  // Mencari tag pembuka di dalam konten
  const tagPattern = /<([a-zA-Z]+)([^>]*)(?=>|\s|$)/g;
  let matches = [];
  let match;

  while ((match = tagPattern.exec(content)) !== null) {
    matches.push(match[1]); // Menyimpan tag yang ditemukan
  }

  let updatedContent = content;

  // Mengambil tag pembuka terakhir yang ditemukan
  const lastTag = matches[matches.length - 1];

  // Jika tag pembuka ditemukan dan bukan tag self-closing
  if (lastTag && !selfClosingTags.includes(lastTag)) {
    // Mengecek apakah sudah ada tag penutup untuk tag pembuka terakhir
    const closingTag = `</${lastTag}>`;

    // Jika tag pembuka sudah selesai, tambahkan tag penutup setelahnya
    if (content[cursorPosition - 1] === '>') {
      // Cari posisi tag pembuka yang sesuai
      const tagOpenPosition = content.lastIndexOf(`<${lastTag}>`);
      const tagClosePosition = content.indexOf(`</${lastTag}>`);

      // Jika tag penutup belum ada, tambahkan setelah tag pembuka
      if (tagClosePosition === -1) {
        // Menambahkan tag penutup tepat setelah tag pembuka dalam urutan yang benar
        const insertPosition = content.indexOf(`>`, tagOpenPosition) + 1;
        updatedContent = content.slice(0, insertPosition) + closingTag + content.slice(insertPosition);
      }
    }
  }

  // Memperbarui konten textarea tanpa mengubah posisi kursor
  textarea.value = updatedContent;

  // Menjaga posisi kursor tetap di tempat yang benar
  textarea.selectionStart = textarea.selectionEnd = cursorPosition + (updatedContent.length - content.length);
}

// Menangani input pada textarea
textarea.addEventListener('input', autoCloseTags);
