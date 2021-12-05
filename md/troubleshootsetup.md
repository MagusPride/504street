git & github issues


error: file too long
    solution: 
        git config --system core.longpaths true
        https://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows

error: no access rights
    solution: 
        generate ssh key
        connect generated ssh key to github account
        publish repository

eror: repo 404
    solution: 
        git commit --allow-empty -m "Trigger rebuild"
