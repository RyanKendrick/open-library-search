Q: How long did you spend on the coding assignment? 

A: I spent aproximately 24 total hours over a span of 3 days to complete the assignment. If I had more time I would add a loading animation instead of only the "Loading..." text 
to make the loading screen more visually appealing. I would also save the search results in localStorage so that when the page is refreshed, the user can still see the results from their previous seach. I would also add a default book cover image for results that do not have an image included, as it currently only renders as blank. User authentication could also be added which could enable users to save their own lists of books, to like and share book results and to have a rating system for results. 


Q: What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

A: React recently released version 18 on March 29, 2022 which added a number of new Hooks including 'useId' which I used in this project. The 'useId' hook is used to easily give unique keys to data. For example when my app maps each book result based on the search input, each result needs to be assigned a unique id or key as per best practices. Each result is automatically assigned a unique key by using the new 'useId' hook. Previously this could be accomplished by using the npm 'uuid' package which requires installation. 

Code Snippet:

```javascript
...
import { useId } from 'react';
...

const Results = ({data}) => {

  
  const key = useId()
 
  return (
    <>
      <div className='results-container'>
        {data.map((i) => {
          return <>
            <div className='result-container' key={key} data-testid='results-item'>
...
```

Q: How would you track down a performance issue in production? Have you ever had to do this?

A: When I encounter a performance issue in production or in development, the first thing I check is the Network tab in Chrome devtools to see what may be slowing down the application.
Refreshing the page and watching the assets load in real time shows you exactly what is taking longer to load. The results can be sorted according to the time it took for each item to load and the problem can be identified this way. In my experience I have used this method to fix performance issues caused by high resolution images that have not been optimized for web viewing, or inefficient code that is triggering more processes than necessary.

Q: How would you improve the API that you just used?

A: One improvement could be to add more URL formatting options to limit the results that are returned. For example there could be an option added to return only essential data keys such as author, title, date published etc., rather than the full extensive results. Another simple improvement would be to include a default cover image for books that do not have one. 

Q: Please describe yourself using correctly formatted JSON.

```json
{
    "in three words": {
        "curious": "I have an innate desire to understand everything that I encounter.",
        "organized": "Organization gives me peace of mind and allows me to accomplish large goals in small steps.",
        "confident": "My natural confidence is an asset in persisting through tough development problems accomplishing goals." 
    },
    "hobbies": {
        "computers": [
            "software engineering",
            "building them",
            {
                "internet": [
                    "podcasts",
                    "music",
                    "reading",
                    "gaming"
                ]
            }
        ],
        "outdoors-activies": [
            "biking",
            "fishing",
            "camping",
            "hiking",
            "golf",
            "tennis",
            "skiing",
        ],
        "sports-watching": [
            "basketball",
            "hockey",
            "football",
            "golf (its relaxing!)"
        ]
    },
}
```



