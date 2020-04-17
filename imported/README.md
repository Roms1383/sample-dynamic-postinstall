`process.cwd()` : from which location the scripts is executed

# symlink
parent script :
-> kroms-linker
> npm i ../kroms-linked
> kroms-linked@1.0.0 postinstall /Users/romain/Development/sandbox/try-postinstall/kroms-linker/node_modules/kroms-linked
> node scripts/postinstall.js

> installed as a dependency ? false
> executed from /Users/romain/Development/sandbox/try-postinstall/kroms-linked
so here in real life : `/Users/romain/Development/sandbox/try-postinstall/kroms-linker/node_modules/kroms-linked`
as it was installed like : npm i ../kroms-linked
> executed at /Users/romain/Development/sandbox/try-postinstall/kroms-linked/scripts/postinstall.js
> launched from scripts/postinstall.js
here mostly related to `scripts/postinstall.js`
> location of this js file /Users/romain/Development/sandbox/try-postinstall/kroms-linked/scripts
> between both ..

---

# no symlink
parent script :
> npm install $(npm pack ../kroms-linked | tail -1)

> installed as a dependency ? false
> executed from /Users/romain/Development/sandbox/try-postinstall/kroms-linker/node_modules/kroms-linked
> executed at /Users/romain/Development/sandbox/try-postinstall/kroms-linker/node_modules/kroms-linked/scripts/postinstall.js
> launched from scripts/postinstall.js
> location of this js file /Users/romain/Development/sandbox/try-postinstall/kroms-linker/node_modules/kroms-linked/scripts
> between both ..