# UI Boilerplate
- React
- Redux
- Semantic-UI

## Semantic UI
List of elements: [Semantic-UI-React](https://react.semantic-ui.com/elements)

## Clone this repo
```
git clone --depth=1 -b master -o ui-boilerplate https://github.com/guyb7/ui-boilerplate.git your-project-name
cd your-project-name
yarn install
```

## Development
1. Run `yarn start:dev`
2. Open [localhost:3020](http://localhost:3020)
3. Edit the files in `client/` and refresh the page

When you add your own repo, make sure to create a new remote:
```
git remote add origin https://github.com/user/repo.git
```

## Merge with newest version
```
git checkout master
git fetch ui-boilerplate
git merge ui-boilerplate/master
yarn install
```
