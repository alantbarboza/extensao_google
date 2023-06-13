chrome.runtime.onMessage.addListener(messageReceived);

function messageReceived(msg) { 
	let contador = 10;
	let loop =	setInterval(function() {
		if(localStorage.getItem('chaveStatusMacro') == 'DESATIVAR'){
			if(contador == 0){
				if(localStorage.getItem('ChaveBtnMudarAba') == 'true' || 
				(localStorage.getItem('ChaveBtnMudarAba') == 'true' && localStorage.getItem('ChaveBtnAtualizar') == 'true'))
					moverAba();
	
				if(localStorage.getItem('ChaveBtnAtualizar') == 'true' 
				&& localStorage.getItem('ChaveBtnMudarAba') == 'false')
					atualizarAba();
				
				contador = 10;
			}

			contador--;
			chrome.browserAction.setBadgeText({ text: contador.toString() });
		}else{
			clearInterval(loop); 
			chrome.browserAction.setBadgeText({ }); 
		}
	}, 1000); 
}
function moverAba(){		
	chrome.tabs.query({active: true}, function(tabs) {
		let tabIndex = tabs[0].index;
		chrome.tabs.query({}, function(tabs) {

			let tabsNumber = tabs.length;
			let tabToOpen = tabIndex + 1;
			if (tabToOpen >= tabsNumber) {
				tabToOpen = 0;
			}
			chrome.tabs.update(tabs[tabToOpen].id, {active: true});

			if(localStorage.getItem('ChaveBtnMudarAba') == 'true' && localStorage.getItem('ChaveBtnAtualizar') == 'true'){
				let tabToRefresh = tabToOpen + 1;
				if ((tabToOpen + 1) === tabsNumber) {
					tabToRefresh = 0;
				}
				chrome.tabs.reload(tabs[tabToRefresh].id)
			}
		})
	});
}

function atualizarAba(){	
	chrome.tabs.query({active: true}, function(tabs) {
		let tabIndex = tabs[0].index;
		chrome.tabs.query({}, function(tabs) {

			chrome.tabs.reload()
		})
	});
}
