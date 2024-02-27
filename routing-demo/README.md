## Routing

-  All routes are defined inside of the `src/app` folder
-  Each folder defines a separate route (make sure to name the folders in lower case)
-  `page.tsx` file refers to its parent folder i.e. `page.tsx` inside `blog` will be executed for the route `/blog`, `page.tsx` inside `blog > first` will be executed for the route `/blog/first`, `page.tsx` inside `about` will be executed for the route `/about`
-  Nested route can be made by defining multiple folders inside of a parent folder: `blog > first` -> `/blog/first`, `blog > second` -> `/blog/second`

## Dynamic Routing

-  Folder name defines inside `[]` are treated as dynamic routes
-  Every page in the app router receives route parameter as a props
-  It is possible to create nested dynamic routes by having dynamic segments in the folder name
