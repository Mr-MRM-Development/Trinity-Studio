
// Elements
    const codeInput = document.getElementById('code');
    // const highlightedCode = document.getElementById('Terminal');
    const outputFrame = document.getElementById('website');

    // Syntax Highlighting (Basic)
    function syntaxHighlight(code) {
      // Simple syntax highlighting using RegEx
      const highlighted = code
        .replace(/(&lt;[^\s>]+)(.*?)(\/?&gt;)/g, '<span>$1</span><br><span>$2</span><br><span>$3</span><br>') // HTML tags
        .replace(/("(.*?)")/g, '<span style="color: #ff7;">$1</span>') // Strings
        .replace(/\/\/(.*)/g, '<span style="color: #0f0;">//$1</span>') // Single line comments
        .replace(/\/\*[\s\S]*?\*\//g, '<span style="color: #5f5;">$&</span>') // Multi-line comments
        .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span style="color: fff;">$1</span>'); // HTML comments

      return highlighted;
    }

    // Update Highlighting
    codeInput.addEventListener('input', () => {
      const escapedCode = codeInput.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
      highlightedCode.innerHTML = syntaxHighlight(escapedCode);
      const code = codeInput.value;
      const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(code);
      iframeDoc.close();
    });
      
    // Function to run the code
    /*function runCode() {
      const code = codeInput.value;
      const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
      iframeDoc.open();
      iframeDoc.write(code);
      iframeDoc.close();
    }*/

