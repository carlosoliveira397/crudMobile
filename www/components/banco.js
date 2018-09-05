// This is a JavaScript file
$(document).on("click","#btnEnviar", function(){
  var parametros = {
    "nome": $("#txtNome").val(),
    "cpf": $("#txtCpf").val()
  };
  
  $.ajax({
    type:"post",
    url: "https://crudmobile3i2-carlos397.c9users.io/cadastro.php",
    data: parametros,
    sucess: function(data){

    },
    error: function(data){
      navigator.notification.alert("erro: "+data);
    }
  })

});
