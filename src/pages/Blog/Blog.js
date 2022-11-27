import React from 'react';

const Blog = () => {
    return (
        <div className='mx-12 my-5'>
            <h2 className='text-2xl'>1. What are the different ways to manage a state in a React application?</h2>
            <p className='text-white'>There are four main types of state we need to properly manage in your React apps: Local state, Global state, Server state, URL state.<br></br>
                Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.<br></br>
                Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.<br></br>
                Server state – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.<br></br>
                URL state – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
            </p>
            <h2 className='text-2xl'>2. How does prototypical inheritance work?</h2>
            <p className='text-white'>Prototypal inheritance uses the concept of prototype chaining. Let’s explore that concept. Every object created contains [[Prototype]], which points either to another object or null. Envision an object C with a [[Prototype]] property that points to object B. Object B’s [[Prototype]] property points to prototype object A. This continues onward, forming a kind of chain called the prototype chain.<br></br>

                This concept is used when searching our code. When we need to find a property in an object, it is first searched for in the object, and if not found, it is searched for on that object’s prototype, and so on. Thus, the entire prototype chain is traversed until the property is found or null is reached.</p>
            <h2 className='text-2xl'>3. What is a unit test? Why should we write unit tests?</h2>
            <p className='text-white'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.<br></br><br></br>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
            <h2 className='text-2xl'>4. React vs. Angular vs. Vue?</h2>
            <p className='text-white'>The sizes of the libraries won’t be as big of a factor since caching and minification are pretty standard nowadays. Although there can be a significant difference between the sizes of the frameworks (e.g. Angular is the largest), they are still small compared to the average webpage size (about 2MB according to the most recent data). Additionally, if you use a popular CDN to load these libraries, it is highly probable that a user has the library already loaded in their local system.<br></br><br></br>In Angular, components are referred to as directives. Directives are just markers on DOM elements, which Angular can track and attach specific behavior too. Therefore, Angular separates the UI part of components as attributes of HTML tags, and their behaviors in the form of JavaScript code. This is what sets it apart when looking at Angular vs React.<br></br><br></br>React, interestingly, combines the UI and behavior of components. For instance, here is the code to create a hello world component in React. In React, the same part of the code is responsible for creating a UI element and dictating its behavior.<br></br><br></br>When looking into Vue vs React, in Vue, UI and behavior are also a part of components, which makes things more intuitive. Also, Vue is highly customizable, which allows you to combine the UI and behavior of components from within a script. Further, you can also use pre-processors in Vue rather than CSS, which is a great functionality. Vue is great when it comes to integration with other libraries, like Bootstrap.</p>
        </div>
    );
};

export default Blog;