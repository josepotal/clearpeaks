# TEST Angular
## Description
This test takes 100 posts from the `https://jsonplaceholder.typicode.com/` REST API, and display it in the view. 
- We can order the posts ascendent and descendant by clicking on the header, the posts are ordered by the `post Id`
- We can delete (only locally) any post we like.

## Installation
To run the test, please download or clone the repository and type:
`bower install`
this will install all the dependecies

If `bower` is not install in you computer, type:
`npm install bower -g`
to install it globally

To run it simply, type in the cmd:
`http-server`

## API used
This test uses a fake API, thanks to  https://jsonplaceholder.typicode.com/
, in particular we used the posts endpoint:
`https://jsonplaceholder.typicode.com/posts` 