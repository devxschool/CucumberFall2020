package sshConnection;

public class Test {

    public static void main(String[] args) {

        LocalSession l = new LocalSession();
        System.out.println(l.sendCommand("java -version"));

        String result = "java version \"1.8.0_241\"\n" +
                "Java(TM) SE Runtime Environment (build 1.8.0_241-b07)\n" +
                "Java HotSpot(TM) 64-Bit Server VM (build 25.241-b07, mixed mode)";
    }
}