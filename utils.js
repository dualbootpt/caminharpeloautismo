function getMousePosition(e){
    e = e || window.event;
    var cursor = {x:0, y:0};
    if (e.pageX || e.pageY) {
        cursor.x = e.pageX;
        cursor.y = e.pageY;
    } 
    else {
        cursor.x = e.clientX + 
            (document.documentElement.scrollLeft || 
            document.body.scrollLeft) - 
            document.documentElement.clientLeft;
        cursor.y = e.clientY + 
            (document.documentElement.scrollTop || 
            document.body.scrollTop) - 
            document.documentElement.clientTop;
    }
    return cursor;
}

function validaForm(){
	var nome = document.forms["Inscricao"]["nome"];
	var telef = document.forms["Inscricao"]["telef"];
	var email = document.forms["Inscricao"]["email"];
	var error = '';
	
	if(telef.value!=null && telef.value!="" && !isPhoneNumber(telef,"Telefone invalido")){
			return false;
	}
	
	if(notEmpty(nome, "Por favor preencha o nome")){
		if(notEmpty(email, "Por favor preencha o seu e-mail")){
			if(isAlphabet(nome,"Nome inva&acute;lido")){
				if(emailValidator(email,"Endereco de e-mail inva&acute;lido")){
					mensagem("Obrigado pela Inscricao.\nVai receber as instrucoes de pagamento no seu e-mail\n\nVemo-nos dia 15 de Abril.");
					return true;
				}
			}
		}
	}
	return false;
}

// If the element's string matches the regular expression it is all numbers
function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)){
		return true;
	}else{
		mensagem(helperMsg);
		elem.focus();
		return false;
	}
}

// If the length of the element's string is 0 then display helper message
function notEmpty(elem, helperMsg){
	if(elem.value == null || elem.value.length == 0){
		mensagem(helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	return true;
}

// If the element's string matches the regular expression it is all letters
function isAlphabet(elem, helperMsg){
	var alphaExp = /^[a-zA-Z ]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		mensagem(helperMsg);
		elem.focus();
		return false;
	}
}

// If the element's string matches the regular expression it is a valid phone number
function isPhoneNumber(elem, helperMsg){
	var alphaExp = /^[9,2][0-9]{8}$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		mensagem(helperMsg);
		elem.focus();
		return false;
	}
}

// If the element's string matches the regular expression it is numbers and letters
function isAlphanumeric(elem, helperMsg){
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		mensagem(helperMsg);
		elem.focus();
		return false;
	}
}

function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		mensagem(helperMsg);
		elem.focus();
		return false;
	}
}

function removeSpaces(str) {
 var string = new String(str);
 return string.split(' ').join('');
}

function mensagem(msg) {
  $("#mensagem").html(msg);
}