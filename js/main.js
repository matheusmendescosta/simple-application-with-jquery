function consultaCep() {
  $(".barra-progresso").show();
  var cep = document.getElementById("cep").value;

  if(cep.length === 0){
    $(".alerta-cep-vazio").show();
  }

  var url = "https://viacep.com.br/ws/" + cep  + "/json/";

  console.log(url);
  $.ajax({
    url: url,
    type: "GET",
    dataType: "json",

    success: function (response) {
      console.log(response);
      $("#logradouro").html(response.logradouro);
      $("#bairro").html(response.bairro);
      $("#localidade").html(response.localidade);
      $("#uf").html(response.uf);
      $("#titulo_cep").html("CEP: " + response.cep);
      $(".cep").show();
      $(".barra-progresso").hide();
      $(".alerta-cep-vazio").hide();
    },
  });
}


$(function(){
  $(".cep").hide();
  $(".barra-progresso").hide();
  $(".alerta-cep-vazio").hide();
})
