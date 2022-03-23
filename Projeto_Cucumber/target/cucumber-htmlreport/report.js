$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Pesquisa.feature");
formatter.feature({
  "line": 1,
  "name": "Consultar vagas",
  "description": "",
  "id": "consultar-vagas",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validar a funcionalidade de pesquisar com nome inexistente",
  "description": "",
  "id": "consultar-vagas;validar-a-funcionalidade-de-pesquisar-com-nome-inexistente",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Acessar o site \"\u003csite\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Realizo uma pesquisa com o nome \"\u003cnomePesquisa\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Valido que foi exibido a mensagem de nenhum resultado encontrado",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "consultar-vagas;validar-a-funcionalidade-de-pesquisar-com-nome-inexistente;",
  "rows": [
    {
      "cells": [
        "site",
        "nomePesquisa"
      ],
      "line": 10,
      "id": "consultar-vagas;validar-a-funcionalidade-de-pesquisar-com-nome-inexistente;;1"
    },
    {
      "cells": [
        "https://blogdoagi.com.br/",
        "haha�"
      ],
      "line": 11,
      "id": "consultar-vagas;validar-a-funcionalidade-de-pesquisar-com-nome-inexistente;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4576527200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validar a funcionalidade de pesquisar com nome inexistente",
  "description": "",
  "id": "consultar-vagas;validar-a-funcionalidade-de-pesquisar-com-nome-inexistente;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Acessar o site \"https://blogdoagi.com.br/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Realizo uma pesquisa com o nome \"haha�\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Valido que foi exibido a mensagem de nenhum resultado encontrado",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://blogdoagi.com.br/",
      "offset": 16
    }
  ],
  "location": "PesquisaStep.acessar_o_site(String)"
});
formatter.result({
  "duration": 5693086700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "haha�",
      "offset": 33
    }
  ],
  "location": "PesquisaStep.pesquisoNome(String)"
});
formatter.result({
  "duration": 1826885500,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaStep.validoResultadoNaoEncontrado()"
});
formatter.result({
  "duration": 43824400,
  "status": "passed"
});
formatter.after({
  "duration": 664347200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Validar a funcionalidade de pesquisar com nome valido",
  "description": "",
  "id": "consultar-vagas;validar-a-funcionalidade-de-pesquisar-com-nome-valido",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "Acessar o site \"\u003csite\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Realizo uma pesquisa com o nome \"\u003cnomePesquisa\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Valido que foi exibido o resultado para o nome informando",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "consultar-vagas;validar-a-funcionalidade-de-pesquisar-com-nome-valido;",
  "rows": [
    {
      "cells": [
        "site",
        "nomePesquisa"
      ],
      "line": 20,
      "id": "consultar-vagas;validar-a-funcionalidade-de-pesquisar-com-nome-valido;;1"
    },
    {
      "cells": [
        "https://blogdoagi.com.br/",
        "Open banking"
      ],
      "line": 21,
      "id": "consultar-vagas;validar-a-funcionalidade-de-pesquisar-com-nome-valido;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3260332000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validar a funcionalidade de pesquisar com nome valido",
  "description": "",
  "id": "consultar-vagas;validar-a-funcionalidade-de-pesquisar-com-nome-valido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "Acessar o site \"https://blogdoagi.com.br/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Realizo uma pesquisa com o nome \"Open banking\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Valido que foi exibido o resultado para o nome informando",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://blogdoagi.com.br/",
      "offset": 16
    }
  ],
  "location": "PesquisaStep.acessar_o_site(String)"
});
formatter.result({
  "duration": 4800624000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open banking",
      "offset": 33
    }
  ],
  "location": "PesquisaStep.pesquisoNome(String)"
});
formatter.result({
  "duration": 1729408600,
  "status": "passed"
});
formatter.match({
  "location": "PesquisaStep.validoResultadoEncontrado()"
});
formatter.result({
  "duration": 65579400,
  "status": "passed"
});
formatter.after({
  "duration": 83272300,
  "status": "passed"
});
});