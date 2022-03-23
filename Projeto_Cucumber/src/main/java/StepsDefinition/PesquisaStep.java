package StepsDefinition;

import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import PageObjects.HomePageObject;
import PageObjects.ResultadoPesquisaPageObject;
import Reports.Report;
import Utils.Constante;
import Utils.WebDriverManager;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.*;

public class PesquisaStep {

	Report report;
	ChromeDriver driver;
	HomePageObject homePageObject;
	ResultadoPesquisaPageObject resultadoPesquisaPageObject;
	String resultadoNome;

	@Before
	public void before() {
		WebDriverManager webDriverManager = new WebDriverManager();
		driver = webDriverManager.getDriver();
		report = new Report();
		this.homePageObject = PageFactory.initElements(driver, HomePageObject.class);
		this.resultadoPesquisaPageObject = PageFactory.initElements(driver, ResultadoPesquisaPageObject.class);

	}

	@After
	public void tearDown() throws Exception {
		report.createReportDoc();
	  //  driver.close();

	}

	@Given("^Acessar o site \"([^\"]*)\"$")
	public void acessar_o_site(String site) throws InterruptedException {
		homePageObject.acessaSite(site);
		report.capturarText("Site acessado com sucesso");
		report.capturar();
	}

	@When("^Realizo uma pesquisa com o nome \"([^\"]*)\"$")
	public void pesquisoNome(String nome) throws InterruptedException {
		homePageObject.clickBotaoLupa();
		homePageObject.inputNomePesquisa(nome);
		resultadoNome = nome;
		homePageObject.clickBotaoPesquisa();
	}

	@Then("^Valido que foi exibido a mensagem de nenhum resultado encontrado$")
	public void validoResultadoNaoEncontrado() throws InterruptedException {

		Assert.assertEquals(resultadoPesquisaPageObject.getTextPesquisaNenhumResultado(),
				Constante.RESULTADO_NAO_ENCONTRADO);

	}
	
	@Then("^Valido que foi exibido o resultado para o nome informando$")
	public void validoResultadoEncontrado() throws InterruptedException {

		Assert.assertEquals(resultadoPesquisaPageObject.getTextPesquisaResultadoEncontrado(),
				resultadoNome);

	}

}
