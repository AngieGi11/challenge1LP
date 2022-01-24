	function encriptar() {
		var mensaje = document.getElementById("input-texto").value;
		document.getElementById("msg").value = mensaje.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
		console.log(mensaje);
	}

	function desencriptar() {
		var mensaje = document.getElementById("input-texto").value;
		document.getElementById("msg").value = mensaje.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
	}

	function copiar(){
		const copyText = document.getElementById("msg");
		copyText.select();
		navigator.clipboard.writeText(copyText.value);
	}
	