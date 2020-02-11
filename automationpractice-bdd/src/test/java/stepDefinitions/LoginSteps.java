package stepDefinitions;

import base.ApplicationPageBase;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import objects.HomePage;
import objects.LoginPage;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

public class LoginSteps extends ApplicationPageBase {

    /**
     *
     * Given → Precondition
     * goToSigninPage()
     *
     * When → Some action
     * doLogin()
     *
     * Then  → Outcome
     * validateOutcome()
     *
     * */
    HomePage homePage = PageFactory.initElements(driver, HomePage.class);
    LoginPage loginPage = PageFactory.initElements(driver, LoginPage.class);


    @Given("^User need to be in the sign in page$")
    public void user_need_to_be_in_the_sign_in_page()  {
        homePage.getLogInPage();
    }

    @When("^Login in with invalid email and password$")
    public void login_in_with_invalid_email_and_password()  {
        loginPage.login("spam@spam.com", "abcd1234");
    }

    @Then("^User shall not be allowed to login, error message shown$")
    public void user_shall_not_be_allowed_to_login_error_message_shown() {
        String actualErrorMessage = loginPage.getErroMessage();
        Assert.assertEquals(actualErrorMessage, "There is 1 error");
    }

}
