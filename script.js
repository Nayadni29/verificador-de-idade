function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 4){
                //Bebê
                img.setAttribute('src', 'foto-bebe-m.png');
                document.body.style.background = '#d18e3f';
            }else if(idade < 11){
                //Criança
                img.setAttribute('src', 'foto-crianca-m.png');
                document.body.style.background = '#ad967b';
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-m.png');
                document.body.style.background = '#b0b0ae';
            }else if(idade < 40){
                //Jovem Adulto
                img.setAttribute('src', 'foto-jovemadulto-m.png');
                document.body.style.background = '#e2dcde';
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png');
                document.body.style.background = '#85766b';
            }else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png');
                document.body.style.background = '#adb6b5';
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 4){
                //Bebê
                img.setAttribute('src', 'foto-bebe-f.png');
                document.body.style.background = '#f1e257';
            }else if(idade < 11){
                //Criança
                img.setAttribute('src', 'foto-crianca-f.png');
                document.body.style.background = '#e9b9ab';
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-jovem-f.png');
                document.body.style.background = '#7cb0b4';
            }else if(idade < 40){
                //Jovem Adulto
                img.setAttribute('src', 'foto-jovemadulto-f.png');
                document.body.style.background = '#c7ab68';
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png');
                document.body.style.background = '#ef5620';
            }else{
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png');
                document.body.style.background = '#98a32a';
            }
        }
        res.style.textAlign = 'center';
        
        res.innerHTML = (`Detectamos ${gênero} com <strong>${idade} anos</strong>.`);
        res.appendChild(img);
    }
}