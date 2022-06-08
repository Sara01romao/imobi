<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

include_once 'conexao.php';

    //receber conteudo 
    $reponse_json = file_get_contents("php://input");
    $dados = json_decode($reponse_json, true);

    if($dados){
        $sql="UPDATE `imoveis` SET `titulo`='$dados[titulo]', `descricao`='$dados[descricao]', `preco`='$dados[preco]', `data`='$dados[data]' WHERE id = $dados[id]";
        $inserir= mysqli_query($conexao, $sql);
    
        if($inserir){
            http_response_code(200);
            
        
        }else{
            http_response_code(404);
        };
        
        $response =[
            "erro" => false,
            "messagem" => "Editado com Sucesso",
        ];
        
    
    }else{
        $response =[
            "erro" => true,
            "messagem" => "Erro ao editar"
        ];
    };
    
    http_response_code(200);
    echo json_encode($response);


    

?>