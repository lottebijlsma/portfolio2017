[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/thibmaek/lottebijlsma-be)

Portfolio showcase for Lotte Bijlsma at https://lottebijlsma.be

> Runs on Jekyll, Github Pages, CloudFlare and Travis CI. (Check out the stack above)

# Installing
1. Preferably set up your Ruby environment trough rbenv/rbenv and install Ruby 2.3.x
2. Run the setup script in `./bin/setup` by executing this in your shell: `chmod +x bin/setup && bin/setup`. This will install/upgrade `bundler` for you and fetch all the dependencies described in Gemfile.
3. Execute your Jekyll run commands trough bundler with `bundle exec …`. For staging/deployment there is a clean build script in `bin/clean_build`.
4. Optionally you can run this trough CI (Travis) which will use htmlproofer to check for html errors and validate
against whatwg or W3C.
5. Linting is provided for js files with eslint (trough babel parser).

# Deployment
The base branch (master) reflects deployment state for https://lottebijlsma.be.
Work on the develop + ft branches and let CI validate the tests before merging into develop/master.

Hosting is provided by Github Pages with CDN & SSL ran trough CloudFlare
