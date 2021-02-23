package functionalities;

public class Invoice {


    private double invoiceAmount;
    private String invoiceName;

    public Invoice(double invoiceAmount, String invoiceName) {
        this.invoiceAmount = invoiceAmount;
        this.invoiceName = invoiceName;
    }

    public double getInvoiceAmount() {
        return invoiceAmount;
    }

    public String getInvoiceName() {
        return invoiceName;
    }

    @Override
    public String toString() {
        return "Invoice{" +
                "invoiceAmount=" + invoiceAmount +
                ", invoiceName='" + invoiceName + '\'' +
                '}';
    }
}
