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

## Custom Not Found page

-  To handle 404 pages create a `not-found.tsx` file inside the `src/app`
-  Not found pages can also be defined at the folder level

## File Colocation

-  Next.js uses a file system based router where each route segment map to a corresponding segment in the url path
-  The route isn't publically accessible until a `page.tsx` file is added to the respected route segment
-  Moreover even when a route become publically accessible only the content returned by `page.tsx` is sent to the client
-  The content return must be a default exported React component

## Private Folders

-  A private folder is not considered by the routing system
-  Prefix the folder name with an '\_'
-  If you want to include an underscore in URL segments, you can prefix the folder name with '%5F', which is the URL-encoded form of an underscore

## Route Groups

-  Allow us to logically group our routes and project files without affecting the URL path structure
-  To mark a folder as Route Group simply wrap it inside parenthesis `()`

## Layouts

-  You can define a layout by default exporting a React component from a `layout.tsx` file
-  That component should accept a children prop that will be populated with a child page during rendering
-  Next.js automatically generates this file even if you delete it
