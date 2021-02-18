###Maven

What is maven?


dependency -> your project dependencies -> cucumber, Junit, sql, api and many other libraries.

Maven is a java project and depedency(library) management tool that has been designed to write 
java applications and compile and deploy artifacts like jar, war in an easy fashion. 

Maven originally has been designed for developers. As automation engineers we take advanage of it as well. 

Maven automated many processes and most configurations happen in pom.xml.
So pom.xml is a center of the whole maven project flow.
1. adding new libraries(dependecies)
2. application(project) version are also managed in the pom.xml


###.m2 Maven depedency life cycle.  

repository(repo) - storage. 
there are two type of repositories - 
1) raw code repository - GitHub, Bitbucket, Gitlab.
2) executable files(jar, .exe)  repo -> maven repo like Nexus(internal tool).

Internal tools and projects -  tools and projects that are used inside the company itself only, not available
to public. 


central repository(Nexus) - is a cloud based storage for all company project, and all 
 external libraries needed for the company are stored in there. 
 
Maven is a tool that connects to a company central repository(Nexus). 


.m2 is a local maven repository - a folder where all of the libraries that we have ever used are stored.
they are not deleted automatically, if you need extra memory you could manually go there and delete unnesseray
libraries.

if the library doesnt exist in your local .m2 repo. maven is going download from your company central repo.


###Maven LifeCyle(Maven Goals) (Maven Phases)
Target folder - a folder which contains all complied code and the program
is run from these bytecode. 

For Devs.
main src(source) folder is a folder for real(actual) application code.
test stc folder is a folder for unit tests of classes in main folder. 


For SDETs
We can use main and test folder however we wish.

Dev in mind.
1. Clean - cleans(deletes) previously compiled code in target folder.
2. Validate - prepares for the new compilation. 
3. Compile - compiles .java files to .class files and puts them in a newly created
target folder. 
4. Test - runs specified tests under test folder. (there is an option to skip tests.) In scenario
Tests take time. 
5. package - creates a jar file or war file depending which packaging options is chosen 
in the target folder. All tests must pass in order to create a jar file.
6. verify runs tests extra tests and generates reports. 
7. install - pushes your newly created jar file(new version) to your local repository. 
8. deploy - pushes your newly creted jar file from local repo to central(remote) repo of your company.



Release version - real version that devs are giving a shot to push all the way to prod
Snapshot version - temp version for sanity testing. and they are remoted both from local and 
remote repo after 1 week. 

Each enviroment dev, qa servers have maven installed in them. 
on qa02 server QAs would only need to run a command(specific to a company)
to pull the application version you are looking to install on the server from
company central repo. Application Deployement - application installation.