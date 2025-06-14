function For() {
      let n = parseInt(document.getElementById("quantidade").value);
      let a = 0, b = 1, texto = "";

      for (let i = 0; i < n; i++) {
        texto += a + " ";
        let temp = a + b;
        a = b;
        b = temp;
      }

      document.getElementById("resultado").innerText = texto;
    }

    function While() {
      let n = parseInt(document.getElementById("quantidade").value);
      let a = 0, b = 1, texto = "";
      let i = 0;

      while (i < n) {
        texto += a + " ";
        let temp = a + b;
        a = b;
        b = temp;
        i++;
      }

      document.getElementById("resultado").innerText = `${texto}`;
    }

    function DoWhile() {
      let n = parseInt(document.getElementById("quantidade").value);
      let a = 0, b = 1, texto = "";
      let i = 0;

      if (n > 0) {
        do {
          texto += a + " ";
          let temp = a + b;
          a = b;
          b = temp;
          i++;
        } while (i < n);
      }

      document.getElementById("resultado").innerText = texto;
    }