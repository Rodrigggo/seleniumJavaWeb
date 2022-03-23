package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Utils.Constante;

public class ResultadoPesquisaPageObject {

	private WebDriver driver;
	private WebDriverWait wait;

	@FindBy(xpath = "//*[@id=\"primary\"]/section/header/h1")
	private WebElement pesquisaNenhumResultado;
	
	@FindBy(xpath = "//*[@id=\"primary\"]/header/h1/span")
	private WebElement resultadoEncontrado;



	public ResultadoPesquisaPageObject(WebDriver driver) {
		this.driver = driver;
		wait = new WebDriverWait(driver, Constante.TIMEOUT);
	}

	public String getTextPesquisaNenhumResultado() {
		return pesquisaNenhumResultado.getText();
	}
	
	public String getTextPesquisaResultadoEncontrado() {
		return resultadoEncontrado.getText();
	}

}
