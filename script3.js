document.addEventListener("DOMContentLoaded", function(){
    let input = document.querySelector('#input');
    let button = document.querySelector('#btn');
    let result = document.getElementById('result');
    try{
        button.addEventListener('click', async function(){
            const word = input.value;
            let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
            let fetchData = await fetch(apiUrl);
            let add = await fetchData.json();
            console.log(add);

            const eleMeaning = document.createElement('div');
            eleMeaning.innerText = add[0].meanings[0].definitions[0].definition;
            result.appendChild(eleMeaning);
            eleMeaning.style.paddingTop = '4vh';
        
            const eleSynonyms = document.createElement('div');
            eleSynonyms.innerText = add[0].meanings[0].synonyms;
            result.appendChild(eleSynonyms);
        });
    }catch(error){
        console.error(error);

    }
});





// dictionary('hello');