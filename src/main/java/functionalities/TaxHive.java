package functionalities;

import java.util.List;

public class TaxHive {


    public double report(List<Invoice> invoices) {

        double sum  = 0;

        for (Invoice i : invoices) {
            sum+=i.getInvoiceAmount();
        }

        return sum;
    }
}
