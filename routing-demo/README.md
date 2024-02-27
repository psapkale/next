## Routing

-  All routes are defined inside of the `src/app` folder
-  Each folder defines a separate route (make sure to name the folders in lower case)
-  `page.tsx` file refers to its parent folder i.e. `page.tsx` inside `blog` will be executed for the route `/blog`, `page.tsx` inside `blog > first` will be executed for the route `/blog/first`, `page.tsx` inside `about` will be executed for the route `/about`
-  Nested route can be made by defining multiple folders inside of a parent folder: `blog > first` -> `/blog/first`, `blog > second` -> `/blog/second`

## Dynamic Routing

-  Folder name defines inside `[]` are treated as dynamic routes
-  Every page in the app router receives route parameter as a props
-  It is possible to create nested dynamic routes by having dynamic segments in the folder name

## Catch all

-  `[...slugs]` -> `...` is javascript spread operator and `slugs` is common convention when refering urls
-  `docs > [...slugs] > page.tsx` will match any url that contains `docs` segment in the path
-  Catch all segments routes captures all url segments and match them to single file (here `page.tsx` inside `docs > [...slugs]`) in the project
-  Going on `/docs` gives page not found, for this Next.js provides optional catch all route as well
-  To do so just warp `[...slugs]` in another pair of `[]`
