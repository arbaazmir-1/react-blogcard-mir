# react-blogcard-mir
This is a simple React component for displaying a blog post card, created as an experiment.

Installation
To use this component in your project, you can install it via npm:

Copy code

``` 
npm install react-blog-card 
```

Usage
To use the component in your React application, import it and use it in your code:


```
import React from 'react';
import { BlogCard } from 'react-blog-card';

const MyComponent = () => {
  return (
    <BlogCard
      title="My Blog Post"
      url="https://example.com/my-blog-post"
      image="https://example.com/my-blog-post-image.jpg"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      imageHeight="200px"
      widthCard="100%"
    />
  );
};

```

Props
The component accepts the following props:


* title (string, required): The title of the blog post.
* url (string, required): The URL of the blog post.
* image (string, required): The URL of the image to display for the blog post.
* description (string, required): A short description of the blog post.
* imageHeight (string, optional): The height of the image, as a CSS value. Default is "200px".
* widthCard (string, optional): The width of the card, as a CSS value. Default is "100%".


License
This project is licensed under the MIT License - see the LICENSE file for details.



## This was an experimental work. Use with caution please!
