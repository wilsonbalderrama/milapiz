function DetallePermutaCtrl($scope, Data, $cookieStore){
	Data.prepForBroadcast($cookieStore.get('profesor'));
	Data = $cookieStore.get('Data');
	console.debug(Data);
	$scope.profesor = Data.datosDetallePermuta.profesor;
	$scope.permuta = Data.datosDetallePermuta.permuta;
	$scope.handlerBack = function(){
		window.history.back();
	};
}
