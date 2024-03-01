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

## Nested Layouts

## Route Group Layout

-  To organize your project in a manner that doesn't affect the URL (route groups)
-  To selectively apply a layout to certain segments while leaving others unchanged

## Routing Metadata

-  Ensuring proper search engine optimization (SEO) is crusial for increasing visibility and attracting users
-  Next.js introduced the `Metadata API` which allows you to define metadata for each page
-  Metadata ensures accurate and relavent information is displayed when your pages are shared or indexed
-  Configuring Metadata
   -  Export a static metadata object
   -  Export a dynamic generateMetadata function
-  Metadata rules
   -  Both `layout.tsx` and `page.tsx` file can `export metadata`. If defined in a layout, it applies to all pages in that layout, but if defined in a page, it applies only to that page
   -  Metadata is read in order, from the root level down to the final page level
   -  When there's metadata in multiple places for the same route, they get combined, but page metadata will replace layout metadata if they have the same properties
   -  When multiple segments in a route exports metadata object, the properties are merged to form the final metadata object and during merging, the deepest segment takes priority

## Link Component Navigation

-  To enable client-side navigation Next.js provides us with the `Link` component
-  The `Link` component is a React component that extends the HTML `a` element, and its the primary way to navigate between routes in Next.js
-  The `replace` prop replaces the current history state instead of adding a new URL into the stack

## Navigating Programmitacally

## Templates

-  Layouts only mount the part representing the content of the newly loaded page but keep all the common elements untouched
-  Layouts don't remount shared components resulting in better performance
-  To override this behaviour and create a new instances of shared components everytime a component mounts, we use `template`
-  When a user navigates between routes that share a `template`, a new instance of the component is mounted, DOM elements are recreated, state is not preserved and effects are re-synchronized
-  Template also should accept a children prop which will render the nested segments in the route
-  It is possible to include both `layout.tsx` and `template.tsx` file
-  In such a scenario, `layout.tsx` renders first and the layouts children is replaced by the component exported by the `template.tsx` file

## Loading UI

-  `loading.tsx` file allows us to create loading state that are displayed to users while a specific route segment's content is loading
-  The loading state appears immediately upon navigation, giving users the assurence that the application is responsive and actively loading content
-  `loading.tsx` will automatically wrap `page.tsx` file and all its nested children within a `React Suspence boundry`

## Error Handling

-  Error Boundary are client component in Next.js
-  `error.tsx` file automatically wrap a route segment and its nested children in a React Error Boundary
-  Create error UI tailored to specifin segments using the file-system hierarchy to adjust granularity
-  Isolate errors to affected segments while keeping the rest of the application functional
-  Add functionality to attemp to recover from an error without a full page reload

## Component Hierarchy

```
<Layout>
   <Template>
      <ErrorBoundary fallback={<Error />}>
         <Suspense fallback={<Loading />}>
            <ErrorBoundary fallback={<NotFound />}>
               <Page />
            </ErrorBoundary>
         </Suspense>
      </ErrorBoundary>
   </Template>
</Layout>
```

## Recovering from Errors

## Handling Errors in Nested Routes

-  Errors bubble up to the closest parent error boundary
-  An `error.tsx` file will cater to errors for all its nested child segments
-  By positioning `error.tsx` file at different level in the nested folder of a route, you can acheive a more granular level of error handling

## Handling Errors in Layouts

-  An `error.tsx` file will handle errors for all its nested child segments
-  The error boundary does not catch errors thrown here because its nested inside the layouts component
