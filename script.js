function calcularContribuicao() {
	// Obter e ajustar os valores de cada tipo de atividade
	let totalServicos    = document.getElementById("totalServicos").value.replace(",", ".");
	let totalBens        = document.getElementById("totalBens").value.replace(",", ".");
	let totalHoteleiras  = document.getElementById("totalHoteleiras").value.replace(",", ".");
	let totalSubsidios   = document.getElementById("totalSubsidios").value.replace(",", ".");
	
	totalServicos        = parseFloat(totalServicos);
	totalBens            = parseFloat(totalBens);
	totalHoteleiras      = parseFloat(totalHoteleiras);
	totalSubsidios       = parseFloat(totalSubsidios);

	const taxaContributiva = parseFloat(document.getElementById("taxaContributiva").value);
	const variacao         = parseFloat(document.getElementById("variacao").value);

	// Verificar se os valores foram inseridos corretamente
	if (isNaN(totalServicos) || totalServicos < 0 || isNaN(totalBens) || totalBens < 0 ||
		isNaN(totalHoteleiras) || totalHoteleiras < 0 || isNaN(totalSubsidios) || totalSubsidios < 0) {
		document.getElementById("resultado").innerText = "Por favor, insira valores válidos para todas as categorias.";
		return;
	}

	// Dividir os totais por 3 para obter a média mensal
	const mediaMensalServicos   = totalServicos / 3;
	const mediaMensalBens       = totalBens / 3;
	const mediaMensalHoteleiras = totalHoteleiras / 3;
	const mediaMensalSubsidios  = totalSubsidios / 3;

	// Calcular o rendimento relevante para cada categoria
	const rendimentoRelevanteServicos   = mediaMensalServicos * 0.70;
	const rendimentoRelevanteBens       = mediaMensalBens * 0.20;
	const rendimentoRelevanteHoteleiras = mediaMensalHoteleiras * 0.20;
	const rendimentoRelevanteSubsidios  = mediaMensalSubsidios * 0.20;

	// Calcular o rendimento total ajustado com a variação
	const rendimentoAjustado = (rendimentoRelevanteServicos + rendimentoRelevanteBens +
								rendimentoRelevanteHoteleiras + rendimentoRelevanteSubsidios) * variacao;

	// Calcular a contribuição mensal aplicando a taxa selecionada
	const contribuicaoMensal = rendimentoAjustado * taxaContributiva;

	document.getElementById("resultado").innerText = "A contribuição mensal à Segurança Social é de: €" + contribuicaoMensal.toFixed(2).replace(".", ",");
}