
let code = document.getElementById("code");
let nama = document.getElementById("nama");

function baru(){
	 			code.value = null
	 			nama.value = null
}

function simpan(){
					if (nama.value === ""){
										alert("Isikan Nama File Terlebih Dahulu !")
					}
					else{
					  let blob = new Blob([code.value], {type: "text/plains"})
					  let link = document.createElement('a')
					  link.href = URL.createObjectURL(blob)
					  link.download = nama.value;
					  link.click()
										let pilih = document.getElementById("pilih-simpan");
						 		pilih.style.top = "-100%"
					}
}

function buka(){
					let pilih = document.getElementById("pilih");
					pilih.style.top = "50%"
}

function batal(){
					let pilih = document.getElementById("pilih");
					pilih.style.top = "-100%"
}

function mulai_simpan(){
					let pilih = document.getElementById("pilih-simpan");
					pilih.style.top = "50%"
}

function batal_simpan(){
					let pilih = document.getElementById("pilih-simpan");
					pilih.style.top = "-100%"
}

function readFile() {
            const fileInput = document.getElementById('sumberfile');
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function(e) {
                const content = e.target.result;
                code.value = content;
            };

            if (file) {
                reader.readAsText(file);
            				  	let pilih = document.getElementById("pilih");
            					  pilih.style.top = "-100%"
            } else {
                alert('Pilih file terlebih dahulu!');
            }
        }