const inputFile = document.querySelector('#imagem_input');
const iconeImagem = document.querySelector('.icone_image');
const iconeImagemText = 'Choose am image';
iconeImagem.innerHTML = iconeImagemText;

inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputFile.files[0];
    if(file){
        const reader = new FileReader();
        reader.addEventListener('load', function(e){
            const readerResult = e.target.result;
            iconeImagem.innerHTML = `<img class="icons" src="${readerResult}" />`;
        });
        reader.readAsDataURL(file);
    }else{
        iconeImagem.innerHTML = iconeImagemText;
    }
});