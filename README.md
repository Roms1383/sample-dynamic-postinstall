# Dynamic postinstall

Sample at making NPM *postinstall* hook dynamic based on where `npm install` is run :

Let's imagine 2 repositories :
1. **imported** repository to be consumed
2. **importer** repository which consumes it as a dependency
   1. if no `.buildrc` is specified : *build all*
   2. if `client` is specified in `.buildrc` : *build client files only*
   3. if `server` is specified in `.buildrc` : *build server files only*

---

## install

### imported
```sh
npm i
```

### importer

if tested locally, simulate install without symlinks :
```sh
npm install $(npm pack ../imported | tail -1)
```

---

## built

### imported

have a look at generated `./dist` after install

### importer

have a look at generated `./node_modules/imported/dist` after install