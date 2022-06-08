<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

include_once 'conexao.php';

   
    $reponse_json = file_get_contents("php://input");
    $id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);
    $sql="DELETE FROM `imoveis`  WHERE id = $id";;


    $deletar= mysqli_query($conexao, $sql);

        if($deletar){
            $response =[
                "erro" => false,
                "messagem" => "Removido com Sucesso",
            ];
            
            http_response_code(200);
            echo json_encode($id);
        
        }else{
            $response =[
                "erro" => true,
                "messagem" => "Removido com Sucesso",
            ];
            
           
        };
    http_response_code(200);
    echo json_encode($response)

?>