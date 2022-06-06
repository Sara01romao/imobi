<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
include_once 'conexao.php';

$imoveis = "SELECT * FROM `imoveis` ORDER BY id ASC";
$busca = mysqli_query($conexao, $imoveis);

$i=0;

if($busca){
    while ($array= mysqli_fetch_array($busca)){
        $lista[$i]=[
            'id'=> $array['id'],
            'titulo'=> $array['titulo'],
            'descricao'=> $array['descricao'],
            'preco'=> $array['preco'],
            'data'=> $array['data'],
        ];
        $i++;
    };
    http_response_code(200);
    echo json_encode($lista);

}else{
    http_response_code(404);
    echo "Error";
};

?>