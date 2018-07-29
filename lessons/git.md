# git cheat sheet

in this course, lessons are organized using git

the following list of git commands and concepts should be sufficient to get you through


## concepts

### git repo

a repo (repository) is a directory wil any files, using git to track changes

in the course each workboook will be a new repo, and so will end up in a new directory on your machine - it is good to organize them into one main directory (eg ~/code/react-course)

in the real world, a repo usually contains all the code and tests for an application, or a module which will be shared between applications


git repos will always have a directory called ```.git``` in them

we will use the ```git clone``` command to load an entire repo

eg

```
# make react-course home main directory (once)
$ mkdir -p ~/code/react-course

# change to react-course main directory
$ cd ~/code/react-course

# clone a workbook
$ git clone https://github.com/nikfrank/react-course-workbook-2

# now we can change into the cloned repo's directory
$ cd react-course-workbook-2
```



### git commit, status, push

commit is how code gets saved - a commit is a snapshot of all the files in a repo (except files listed in the .gitignore file)


you'll only be using ```git commit``` in this course if you want to publish your code to github (for code review) or heroku (for deployment)

often in this case a ```commit``` will be followed by a ```push```

eg

```
$ cd ~/code/react-course/react-course-workbook-2

# ... do some work in the text editor ...

$ git status
# status will tell us we have uncommitted work

$ git commit -am "I did some work"
$ git status
# now status will tell us our work is committed

$ git push origin master
# now our code will be saved to our online repo
```


### git branch

when we do a number of commits, they pile up on top of eachother

sometimes though it is useful to have different versions of the entire repo - to try something out, or to save an old version

to do this we use git branch to make branches, which will keep our work separated (from our other work or our teammates' work)

we use ```git checkout some-branch``` to switch to a branch and ```git checkout -b some-new-branch``` to make a branch

eg
```
$ cd ~/code/react-course/react-course-workbook-2

# we want to start work on a new branch

$ git checkout -b some-feature-branch
$ git status
# we're now on a branch called some-feature-branch

# ... do some work ...

$ git commit -am "did some work on the feature"
$ git push origin some-feature-branch
# now the work is saved to the remote on a branch

$ git checkout master
# we're back to the master branch
```

in this course, I've organized "checkpoints" into each workbook using branches 

eg
```
$ cd ~/code/react-course/react-course-workbook-2

$ git checkout step2
# now our code is fast forwarded to step2
```

changing branches is only possible when all of our code is committed!

the default branch for a new git repo is called "master" and is not special unless you make it special (some systems will apply admin permissions to master)



### git remote

a "remote" is a place to save our repo other than our own computer

for this course that will usually be somewhere on github.com or another code hosting site

we can see or change the url of our remotes using the ```git remote``` command


```
$ cd ~/code/react-course/react-course-workbook-2
$ git remote -v
# we'll see the url printed out like
# origin https://github.com/nikfrank/react-course-workbook-2

# if you want to add a remote for your own github so I can review your progress online
$ git remote add progress https://github.com/myGithubAccountName/react-course-workbook-2

# you will need to make an account on github, then make a repo on github to push to
# the url of course has to match - github will instruct you about it online

$ git checkout -b working-branch

# ... did some work ...
$ git commit -am "some work I want reviewed"
$ git push progress working-branch
```

---


[back to index](https://github.com/nikfrank/react-course)
