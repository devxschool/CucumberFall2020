package runners;

import org.junit.Assert;
import org.junit.Test;

public class AmazonTest {


    @Test
    public void test1(){
        System.out.println("Junit Test");
    }

    @Test
    public void test2(){
        System.out.println("Junit Test 2 ");
    }

    @Test
    public void test3(){
        Assert.fail();
    }

}
