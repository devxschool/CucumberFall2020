package sshConnection;

public class SSHSession implements AppSession{

    @Override
    public String sendCommand(String str) {
        return null;
    }

    @Override
    public boolean isAppRunning(String appName) {
        return false;
    }

    @Override
    public boolean startJavaApp(String appName) {
        return false;
    }

    @Override
    public boolean stopJavaApp(String appName) {
        //
        return false;
    }
}
