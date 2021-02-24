package step_defs;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import functionalities.Invoice;
import functionalities.TaxHive;
import org.junit.Assert;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * Step def classes are initialized once per scenario.
 */
public class ReportSteps {

    private List<Invoice> invoiceList = new ArrayList<>();
    private double result;

    @Given("^User creates the invoice with amount (\\d+.\\d{2}) and name \"([^\"]*)\"$")
    public void name1(double amount, String name) {
        Invoice invoice = new Invoice(amount, name);
        invoiceList.add(invoice);
    }

    @When("^User sends the above invoices$")
    public void name2() {
        TaxHive tax = new TaxHive();
        result = tax.report(invoiceList);
    }


    /**
     * Junit(TestNG) and Cucumber
     *
     * one things that we use Junit in a Cucumber integrated framework
     * are asserts
     * and runner classes.
     * @param expected
     */
    @Then("^User should have (\\d+) in total invoices report$")
    public void name3(int expected) {
        Assert.assertEquals(expected, result, 0.0);
    }


    @Given("^the following invoices are created$")
    public void theFollowingInvoicesAreCreated(DataTable dataTable) {
//        System.out.println(dataTable);
//        //DataTable object stores rows and columns from the feature file data table.
//
//       System.out.println(dataTable.cells(0));
//       System.out.println(dataTable.cells(0).get(2).get(1));

       List<Map<String, String>> invoices = dataTable.asMaps(String.class, String.class);
       System.out.println(invoices);

       for (Map<String, String> invoice : invoices) {
           Invoice invoice1 = new Invoice(Double.parseDouble(invoice.get("amount")),
                   invoice.get("name"));
           invoiceList.add(invoice1);
       }
    }


    @Given("^the following invoices are created map$")
    public void theFollowingInvoicesAreCreatedMap(List<Map<String, String>> invoices) {
        for (Map<String, String> invoice : invoices) {
            Invoice invoice1 = new Invoice(Double.parseDouble(invoice.get("amount")),
                    invoice.get("name"));
            invoiceList.add(invoice1);
        }
    }

    @Given("^the following invoices are created object$")
    public void theFollowingInvoicesAreCreatedObject(List<Invoice> invoices) {
        invoiceList = invoices;
    }


}
