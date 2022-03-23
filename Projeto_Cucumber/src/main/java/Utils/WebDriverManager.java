package Utils;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

public class WebDriverManager {
	
	ChromeDriver driver;
	
	@SuppressWarnings("deprecation")
	public  ChromeDriver getDriver () {		
		
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+File.separator+"resources"+File.separator+"drivers"+File.separator+"chromedriver.exe");
		ChromeOptions options = new ChromeOptions(); 
		DesiredCapabilities capabilities = DesiredCapabilities.chrome();
		capabilities.setCapability(ChromeOptions.CAPABILITY, options);
		driver = new ChromeDriver(capabilities);
		return driver;
	}

}
