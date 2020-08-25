function calcularImc(){

    if ( document.getElementById("altura-imc").value == "" || document.getElementById("peso-imc").value == "" ) {
        alert("Por favor! Preencha todos os campos.");
        document.getElementById("altura-imc").focus();
    }
    else 
    if ( document.getElementById("idade-menor").checked == false && document.getElementById("idade-maior").checked == false) {
        alert("Por favor! Preencha todos os campos.");
    }
    else {

    var s1 = parseFloat(document.getElementById("altura-imc").value);
    var s2 = document.getElementById("peso-imc").value;
    var s3 = parseFloat(s2)/ (parseFloat(s1) * parseFloat(s1));
    //alert(s3);

    var classificacao;
    var msg;
    var link;
    var linkImg;

    if ( document.getElementById("idade-menor").checked == true) {
        if (s3 <=18.5) {
            classificacao = "Abaixo do peso! ";
            msg = "Estar abaixo do peso é uma condição em que a pessoa pesa menos do que é considerado adequado para aquela altura e idade. Favor pesquisar mais sobre o assunto!";
            link = "https://www.hotmart.com/pt-BR?gclid=Cj0KCQjwp4j6BRCRARIsAGq4yMGrmm3SIJK3VgkZmOHdJMlIs8PZsU49p9hy0KsXq0RRUQpNpI-5QNEaAnfrEALw_wcB";
            linkImg = "imagens/magras.jpg"
            
        }
        else
            if (s3>18.5 && s3<=24.9){
                classificacao = "Peso Ideal Parabéns! ";
                msg = "Para manter o peso é importante manter uma dieta balanceada (não basta alimentos corretos, mas também quantidades corretas) para seu organismo. Favor pesquisar mais sobre o assunto!";
                linkImg = "imagens/pesoIdeal.jpg"
            }
            else
                if (s3>24.9 && s3<=29.9){
                    classificacao = "Levemente acima do peso! ";
                    msg = "O sobrepeso é uma condição em que a pessoa pesa mais do que é considerado adequado para aquela altura, idade e sexo. O sedentarismo e os maus hábitos alimentares levam ao aumento dessa parcela de indivíduos com sobrepeso a cada ano. Favor pesquisar mais sobre o assunto!";
                    linkImg = "imagens/obesidade.jpg"
                    }
                    else
                        if (s3>29.9 && s3<=34.9){
                            classificacao = "Obesidade grau 1! ";
                            msg = "O tratamento é realizado através de dieta apropriada com avaliação médica em conjunto com a prática de exercícios, desde que o paciente seja avaliado e liberado pelo médico. Favor pesquisar mais sobre o assunto!";
                            linkImg = "imagens/obesidade.jpg"
                        }
                        else
                            if (s3>34.9 && s3<=39.9){
                                classificacao = "Obesidade grau 2 (severa)! ";
                                msg = "Os riscos associados à obesidade de grau II são mais acentuados. Entre eles, estão a esteatose hepática, doenças articulares, hipertensão, diabetes mellitus, síndrome metabólica, cânceres, infarto agudo do miocárdio e acidente vascular cerebral, lembrando que estes dois últimos são as principais causas de morte no Brasil e no mundo. Favor pesquisar mais sobre o assunto!";
                                linkImg = "imagens/obesidade.jpg"
                            }
                            else
                                if (s3>=40){
                                    classificacao = "Obesidade grau 3 (mórbida)! ";
                                    msg = "Entre as patologias associadas à obesidade grau 3, estão os distúrbios hormonais, cardiopatias, morte súbita, dermatites, osteoporose, hipertensão, hepatopatias e insuficiência venosa. Porém, segundo a Organização Mundial de Saúde (OMS), a obesidade de grau III é a principal causa de morte evitável do mundo. Favor pesquisar mais sobre o assunto!";
                                    linkImg = "imagens/obesidade.jpg";
                                }
                                else {
                                    classificacao = "";
                                }
    }

    if ( document.getElementById("idade-maior").checked == true) {
        if (s3 < 22) {
            classificacao = "Abaixo do peso! ";
            msg = "Estar abaixo do peso é uma condição em que a pessoa pesa menos do que é considerado adequado para aquela altura e idade. Favor pesquisar mais sobre o assunto!";
            linkImg = "imagens/magras.jpg"
        }
        else
            if (s3>=22 && s3<=27){
                classificacao = "Peso Ideal Parabéns! ";
                msg = "Para manter o peso é importante manter uma dieta balanceada (não basta alimentos corretos, mas também quantidades corretas) para seu organismo. Favor pesquisar mais sobre o assunto!";
                linkImg = "imagens/pesoIdeal.jpg";
            }
            else
                if (s3 > 27){
                    classificacao = "Obesidade! ";
                    msg = "O tratamento é realizado através de dieta apropriada com avaliação médica em conjunto com a prática de exercícios, desde que o paciente seja avaliado e liberado pelo médico. Favor pesquisar mais sobre o assunto!";
                    linkImg = "imagens/obesidade.jpg";
                    }
    }
s3=s3.toString();



var result = document.getElementById("id-resultado");

var classsific = document.getElementById("id-classificacao");

var mensagem = document.getElementById("id-mensagem");

classsific.innerHTML = classificacao ;

mensagem.innerHTML = msg;
    var x = ""
for (i in s3){
    if (s3[i]!=null && i<4){
        x+=s3[i]
        
    }
    else break;
    }
    result.innerHTML="IMC : " + x;

    var node = document.getElementById("id-a");
    
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }

    

    var recomendacao = document.getElementsByTagName('div')[11];


    var recomendacaoElement = document.createElement('a');
    recomendacaoElement.setAttribute('href' , link);
    recomendacaoElement.setAttribute('id' , 'id-a');

    var imgElement = document.createElement('img');
    imgElement.setAttribute('src' , linkImg);

    recomendacaoElement.appendChild(imgElement);

    recomendacao.appendChild(recomendacaoElement);
    
}

}
