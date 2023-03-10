<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token");
header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-Token-Auth, Authorization');
header("Content-Type: application/json");



require("conexion.php"); // IMPORTA EL ARCHIVO CON LA CONEXION A LA DB

$conexion = conexion(); // CREA LA CONEXION
$params = json_decode(file_get_contents('php://input'));


$modIncidencia = mysqli_query($conexion, "UPDATE incidencia SET feedback = '" . $params->feedback . "', estado ='" . $params->estado . "' WHERE codInci = " . $params->codInc);

// VALIDA SI LA INSERCIÓN FUE EXITOSA
if ($modIncidencia) {
    $incidenciaOK="true";
   
} else {
    $incidenciaOK="false";
}

$json = json_encode($incidenciaOK); // GENERA EL JSON CON LOS DATOS OBTENIDOS
  
echo $json; // MUESTRA EL JSON GENERAD
mysqli_close($conexion); // CIERRA LA CONEXION
