document.addEventListener('DOMContentLoaded', function(){ 
	
	if(localStorage.getItem('chaveStatusMacro')){ 
		let chaveStatus = window.localStorage.getItem('chaveStatusMacro');
														
		document.querySelector('#btnAtivarMacros').innerHTML = chaveStatus;
	}

	document.querySelector('#btnAtivarMacros').addEventListener('click', function(){
		let  btnMudarAba = document.querySelector ('#btnMudarAba').checked;
		window.localStorage.setItem('ChaveBtnMudarAba',btnMudarAba);

		let  btnAtualizar = document.querySelector ('#btnAtualizar').checked;
		window.localStorage.setItem('ChaveBtnAtualizar',btnAtualizar);
		
		if(this.innerHTML == 'ATIVAR'){ 
			if(btnMudarAba == true || btnAtualizar == true || btnScroll == true){
				this.innerHTML = 'DESATIVAR';
				window.localStorage.setItem('chaveStatusMacro',this.innerHTML);
				chrome.runtime.sendMessage({greeting: "hello"}, function(response) {});
			}else{
				btnMudarAba = true;
			}
		}else{
			this.innerHTML = 'ATIVAR';
			window.localStorage.setItem('chaveStatusMacro',this.innerHTML);
		}

		
    })
});