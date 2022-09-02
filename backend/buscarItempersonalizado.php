<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");

include_once 'conexao.php';

    //receber conteudo 
    $reponse_json = file_get_contents("php://input");
    $i=0;
    $busca = filter_input(INPUT_GET, 'busca', FILTER_SANITIZE_NUMBER_INT);
    $sql = "SELECT  `id`,  `titulo`, `descricao`, `preco`, `data` FROM `imoveis` WHERE `titulo` LIKE '%$busca%'";

    // faça um fetch em
    // http://localhost/imobi/backend/buscarItempersonalizado.php?busca="+ busca

    $buscar= mysqli_query($conexao, $sql);

        if($buscar){
            while ($array= mysqli_fetch_array($buscar)){
                $item[$i]=[
                    'id'=> $array['id'],
                    'titulo'=> $array['titulo'],
                    'descricao'=> $array['descricao'],
                    'preco'=> $array['preco'],
                    'data'=> $array['data'],
                ];
                $i++;
            };
            http_response_code(200);
            echo json_encode($item);
        
        }else{
            http_response_code(404);
            echo "Error";
        };
        
        

    

   




?>