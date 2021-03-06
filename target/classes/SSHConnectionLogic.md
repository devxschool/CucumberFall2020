####Version deployment automation

Our apps run on linux servers. 

In order to ensure our test framework is running against the latest version of an 
application, we had to add a feature to our test framework that will be able to
connect to remote and local linux environments and able to send any linux commands.

Commands:
1. String sendCommand(String str);       - any command and return result of that command. ex: cat anyFile
2. boolean isAppRunning(String appName); - ps -ef | grep AppName
3. boolean startJavaApp(String appName); - java appname
4. boolean stopJavaApp(String appName);  - kill -9 appname