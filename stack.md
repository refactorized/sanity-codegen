## Initial setup

start from empty repo

### create package subdirectories, init yarn, setup workspaces

We will be creating `web` and `sanity` directories later, but let's set yarn up
to recognize them as workspace directories now.

`yarn init` is dumb, especially for private repos, just create this
`package.json` for now:

```json
{
  "name": "repo-name",
  "version": "1.0.0",
  "private": true,
  "license": "UNLICENSED",
  "workspaces": ["web", "sanity"]
}
```

### configure package repositories

We will be using packages from HZ's private github packages repo. Creating this
`.npmrc` in web project allows us to specify a github packages access token in
an environment variable (which we will set in netlify later).

```ini
registry=https://registry.npmjs.com/
@hzdg:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

**IMPORTANT** make sure `GITHUB_TOKEN` is available in the local environment
and set to a token that has permissions to use hz github packages

### install prettier, eslint, gitignore

`-D` install as dev dependencies, `-W` don't nag about workspace root

```sh
  yarn add -WD @hzdg/eslint-config eslint prettier
```

in project root, add `.eslintrc`:

```json
{
  "extends": [
    "@hzdg",
    "@hzdg/eslint-config-typescript",
    "@hzdg/eslint-config-react"
  ]
}
```

also add `prettier.config.js`:

```js
module.exports = require('@hzdg/eslint-config/prettier.config.js');
```

dont't forget your `.gitignore` file. After adding that would be a good time for
an initial push!

now let's setup next

## Initial Next Project setup

from the project root run the following to bootstrap a minimal next app with a
static index page and example api function

```sh
yarn create next-app web
cd web
```

this will also affect our local setup, so make sure GITHUB_TOKEN is available in
your local env by whatever means suits you best

## netlify web setup

### Add next and yarn support with netlify.toml

We need to configure netlify to properly host next. Netlify has a plugin that
will run the netlify export step, set up serverless support functions as needed,
and output static assets into the `out` directory.

We also to need explicitly to inform the netlify tooling that we are using yarn.
_(Netlify usually detects yarn projects by the presence of a lockfile, but our
yarn workspace setup maintains a single lockfile in the root directory, which is
above the base directory)_

create this `web/netlify.toml`

```toml
[build]
command = "yarn build"
publish = "out"

[build.environment]
NETLIFY_USE_YARN = "true"

[[plugins]]
package = "@netlify/plugin-nextjs"
```

### private git packages

setup env `GITHUB_TOKEN` in environment varibles section of netlify site

1. commit to repo
2. in netlify click _New site from Git_ button
3. pick project repo and don't worry about any other options
4. change site name
5. Go to _Build and deploy_ menu then in _Build settings_ set the base directory
   to `web/`
6. commit and push changes or trigger deploy

## Initial Sanity setup

### create sanity dir and initialize santiy studio project

ensure we have the sanity cli tool installed

```sh
yarn global add @sanity/cli
```

from the base of the project:

```sh
mkdir sanity
cd sanity
sanity init
```

Use the CLI to create a new project, the API can be publicly accessible (it's
read-only). Select the clean project template, or another if you like.

### set up sanity studio in netlify

netlify does not have a global sanity cli set up so we need to add the package
locally too

```sh
yarn add @sanity/cli
```

add this `netlify.toml`:

```ini
[build]
command = "yarn build"
publish = "dist"

[build.environment]
NETLIFY_USE_YARN = "true"

# studio does all routing client side - rediect everything to the SPA root.
[[redirects]]
from = "/*"
status = 200
to = "/"
```

dont't forget to:

- set base dir to `sanity/`
  - set output dir to `sanity/dist/` if you want, but it is overridden by `netlify.toml`
- add `GITHUB_TOKEN` env var
