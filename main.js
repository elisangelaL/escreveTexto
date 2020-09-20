const text = '"Pense, fale, compre, beba\nLeia, vote, não se esqueça\nUse, seja, ouça, diga\nTenha, more, gaste e viva"  \n(Pitty Leone)    '

let index = 0;

function escreveFrase(){
    document.getElementById('texto').innerText = text.slice(0, index)
    
    index++;
    if(index > text.length-1){
        index=0;
    }
}

setInterval(escreveFrase,300)

