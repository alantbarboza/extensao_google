document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#btnConcatenar').addEventListener('click', function(){

        let textarea = document.querySelector('#txtconcatenar');
        let text = textarea.value.split("\n");

        for (let i in text) { 
            if(i == text.length-1)
                text[i] = "'" + text[i] + "'"; 
            else
                text[i] = "'" + text[i] + "',";
            
        }

        textarea.value = ''; 

        for (let i in text) { 
            
            textarea.value += text[i] + "\n";
        }

        
        navigator.clipboard.writeText(textarea.value);
        textarea.value = '';
        document.querySelector('#btnCopiar').innerHTML = 'copiado' 
    })

})

