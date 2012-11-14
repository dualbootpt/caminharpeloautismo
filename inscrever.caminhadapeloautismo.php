<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="pt-PT">
<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
	<title>Caminhada pelo Autismo 2012</title>
	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8"/>
	<meta name="keywords" content="Caminhada, Autismo, SONRISE" />
	<meta name="description" content="Inscricao Caminhada pelo Autismo"/>
	<link rel="stylesheet" type="text/css" media="all" href="caminhadapeloautismo.css"/>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="http://cdn.jquerytools.org/1.2.6/full/jquery.tools.min.js"></script>
	<script type="text/javascript" src="utils.js"></script>
	
	<script type="text/javascript">
	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-9038842-10']);
	  _gaq.push(['_trackPageview']);

	  (function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();
	</script>	
</head>
<body>
	<div class="confirmacao">
		<?php
			echo "Obrigado pela Inscricao.\n<p>Ira receber as instrucoes no seu e-mail: ";
			echo $_POST["email"];

			if($_POST["telef"]=="") {
				$dt = getdate();
				$ref = $dt["seconds"].$dt["minutes"].$dt["hours"].$dt[mday];
			} else 
				$ref = $_POST["telef"];
			//$to = "geral@erreeme.pt";
			$to = $_POST["email"].",paulo.alexandre.romualdo@gmail.com";
			$subject = "Caminhada pelo Autismo: 15-Abril 10:30";
			$message = "\n
						\nCaminhada pelo Autismo: 15-Abril 10:30 Matosinhos
						\n
						\nInstruções de Conclusao da inscricao de ".$_POST["nome"]."
						\n
						\nNIB: 0035 0328 00015775800 23
						\nReferencia: ".$ref." 
						\n5 Caminhadas
						\n
						\nLevante a T-Shirt do evento no local da caminhada no dia 15 10H30 junto ao Monumento ao Pescador (extremo Norte da Marginal de Matosinhos)
						\n
						\nObrigado pela sua PARTICIPACAO.";
			$from = "caminharpeloautismo.organizacao@caminharpeloautismo.com";
			$headers = "From:" . $from;
			mail($to,$subject,$message,$headers);
			//echo "Mail Sent.";
		?>
		<p> <a href="index.html">regressar</a>
	</div>
	<script type="text/javascript">
		setTimeout("location.href='index.html'",10000);
	</script>
</body>
</html>