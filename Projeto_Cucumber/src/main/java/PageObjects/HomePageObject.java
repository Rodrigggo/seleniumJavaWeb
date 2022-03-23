package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import Utils.Constante;

public class HomePageObject {

	private WebDriver driver;
	private WebDriverWait wait;

	@FindBy(xpath = "//*[@id=\"search-open\"]")
	private WebElement botaoLupa;

	@FindBy(xpath = "(//input[@type='search'])[1]")
	private WebElement inputNomePesquisa;

	@FindBy(xpath = "(//input[@type='submit'])[1]")
	private WebElement botaopesquisa;

	public HomePageObject(WebDriver driver) {
		this.driver = driver;
		wait = new WebDriverWait(driver, Constante.TIMEOUT);
	}

	public void clickBotaoLupa() {
		wait.until(ExpectedConditions.visibilityOf(botaoLupa));
		botaoLupa.click();
	}

	public void clickBotaoPesquisa() {
		botaopesquisa.click();
	}

	public void acessaSite(String url) {
		driver.get(url);
		driver.manage().window().maximize();
	}

	public void inputNomePesquisa(String nome) {
		inputNomePesquisa.sendKeys(nome);
	}

}
