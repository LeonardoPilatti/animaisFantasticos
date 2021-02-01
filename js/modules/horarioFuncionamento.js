export default function initFuncionamento() {
    const funcionamento = document.querySelector('[data-semana]');
    const diasSemana = funcionamento.dataset.semana.split(',').map(Number);  // com o split estou transformando a nodeList funcionamento em Array; e com o map(Number) estou transformando a array que era string em Number; estou pegando o dia da semana de funcionamento aqui;
    const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);  // aqui estou pegando o horario de funcionamento
    // console.log(diasSemana);   // me retorna os dias da semana que coloquei lá no html;
    
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();  /// aqui estou pegando o dia da semana que é;
    const horarioAgora = dataAgora.getHours();  /// aqui estou pegando a hora da semana que é
    // console.log(diaAgora);  /// me retornou 3 pois hoje é quarta
    // console.log(horarioAgora);  /// me retornou 13, pois agora são 13 horas;
    
    // const teste = [1,2,3,4,5].indexOf(6);  /// vai me retornar "-1", pois 6 não tem no array, se tiver, ele me retorna o index da posicao do numero no array
    const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;       // console.log(semanaAberto)
    /// na constante semanaAberto, está verificando se diasSemana é diferente de "-1", se for diferente é true, se for igual, é false.
    
    // se horario agora é maior que horario de abrir e horario semana é menor que horario de fechar
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
    
    if(semanaAberto && horarioAberto) {     // aqui estou verificando se a constante SemanaAberto e a constante HorarioAberto são true, se sim, irá executar a função, se não, não irá executar a função
        funcionamento.classList.add('aberto');
    }
    
    
    // console.log(horarioAberto)
}






// const agora = new Date();  // me retorna o horario de agora, com dia e mês
// agora;
// Semana Mês Dia Ano HH:MM:SS GMT
// agora.getDate() // Dia
// agora.getDay() // Dia da Semana ex: 5 = Fri  // 0 é domingo e sabado é 7
// agora.getMonth() // Número dia mês  /// 0 é janeiro e 11 é dezembro
// agora.getFullYear() // Ano
// agora.getHours() // Hora
// agora.getMinutes() // Minutos
// agora.getTime() // ms desde 1970  /// mostra os milisegundos desde 1970
// agora.getUTCHours() - 3 // Brasília  /// para definir de acordo com o horário de brasilia, sem ser pelo horario do pc da pessoa
