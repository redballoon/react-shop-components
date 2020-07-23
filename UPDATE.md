### Check for Security

See all issues, run:
```
npm audit
```

Try auto fixing:
```
npm audit fix
```

- run build and make sure everything works
- commit changes ```dev/package: security updates```


### Check for Updates

List outdated packages:
```
npm outdated
```

Can we update them wholesale? or do we
need to pick which one should be able to update?

if wholesale, update all at once:
```
npm update
```
- will update minor and patch versions
- will not touch major versions

- run build and test
- commit changes ```dev/package: updates dependencies```


### Compile Build
update the package MINOR version and commit changes
```
package.json
```

- commit changes ```dev/artifact: build new artifact; bump version to 1.1.0;```


### Release Update

create tag version:
```
git tag -a v[release version] [commit hash]
```

will prompt you to write a message, e.g
```
Release v1.1.0:
- Updated several packages to latest.
- Resolves audit issues.
```

push tags to remote
```
git push --tags
```
