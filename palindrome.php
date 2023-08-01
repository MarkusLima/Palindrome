<?php 

    $str = $_GET['txt'];//captura o texto enviado

    $str = str_replace(" ", "", $str);//retira os espaços

    $str = strtolower($str);;//transforma toda a string em minuscula

    $strLen = strlen($str)-1; //tamanho da string

    
    $revStr = '';//armazena a string invertida
    
    for( $i = $strLen; $i >= 0; $i--){
        
        $revStr .= $str[$i];//monta a string invertida

    }

    if($revStr == $str)
        echo json_encode(["data" => 'PALINDROME']);
    else
        echo json_encode(["data" => 'NÃO É PALINDROME']);

?>