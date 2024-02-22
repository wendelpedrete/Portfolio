<?php

    $nome = addcslashes($_post['nome']);
    $email = addcslashes($_post['email']);
    $mensagem = addcslashes($post['mensagem']);

    $para = "wpedrete56@gmail.com";
    $assunto = "Contato";

    $corpo = "nome: ".$nome."\n"."Email: ".$email."\n"."Mensagem: ".$mensagem;

    $cabeca = "From: wpedrete56@hotmail.com"."\n"."Reply-to: ".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    } else {
        echo("Houve um erro ao enviar o e-mail!");
    }

?>