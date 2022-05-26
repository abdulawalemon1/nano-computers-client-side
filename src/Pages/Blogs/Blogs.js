import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-12'>
            <h2 className='text-center text-primary font-bold text-4xl mb-10'>Blogs</h2>
            <div className=''>
                <h2 className='text-2xl text-center font-bold text-primary mb-10'>How will you improve the performance of a React Application?</h2>

                <p>To Optimize the performance of our React App is very important. Some techniques to optimize the performance of React Apps is discussed below:</p>
                <h2 className='font-bold my-3'>1. Using Immutable Data Structure:</h2>
                <p>Data immutability is not an architecture or design pattern, it’s an opinionated way of writing code. This forces you to think about how you structure your application data flow. In my opinion, data immutability is a practice that revolves around a strict unidirectional data flow.</p>
                <h2 className='font-bold my-3'>2. Function/Stateless Components and React.PureComponent</h2>
                <p>In React, function components and PureComponent provide two different ways of optimizing React apps at the component level.

                    Function components prevent constructing class instances while reducing the overall bundle size as it minifies better than classes.

                    On the other hand, in order to optimize UI updates, we can consider converting function components to a PureComponent class (or a class with a custom shouldComponentUpdate method). However, if the component doesn’t use state and other life cycle methods, the initial render time is a bit more complicated when compared to function components with potentially faster updates.</p>

                <h2 className='font-bold my-3'>3. Multiple Chunk Files</h2>
                <p>Your application always begins with a few components. You start adding new features and dependencies, and before you know it, you end up with a huge production file.

                    You can consider having two separate files by separating your vendor, or third-party library code from your application code by taking advantage of CommonsChunkPlugin for webpack. You’ll end up with vendor.bundle.js and app.bundle.js. By splitting your files, your browser caches less frequently and parallel downloads resources to reduce load time wait.</p>
            </div>
            <div>
                <h2 className='text-2xl text-center font-bold text-primary mb-10'> What are the different ways to manage a state in a React application?</h2>
                <p>React gives developers complete freedom over how state is managed within a component. React has two types of components: class components and functional components, which were introduced in React v16.However, since most React developers now use React functional components, we’ll be focusing on functional components and their state, which is managed using React hooks.</p>
                <h2 className='font-bold my-3'>1.Use useReducer for Complex State</h2>
                <p>Sometimes the useState hook won’t cut it, especially when dealing with complex state behavior that may involve large objects. The useReducer hook is a powerful provided React hook for dealing with complex state management that doesn’t require third-party dependencies. Also, it reduces the amount of data recreated with each render.</p>
                <h2 className='font-bold my-3'>2. Custom Hooks</h2>
                <p>When using React hooks, you can sometimes end up with incredibly complex state logic within one component that utilizes multiple types of hooks to achieve one purpose.

                    Thankfully, we can make custom React hooks to encompass complex logic into a single accessible hook. This can come in handy for forms, toggles, asynchronous behavior, and anything else where you end up with a mess of hooks in your component.
                </p>
                <h2 className='font-bold- my-3'>3. Global State Management</h2>
                <p>In most cases, you don’t need a state management library. Only in larger applications that are dealing with complex states should you bring in an external library to manage it.

                    Even then, reconsider if you can’t just use the provided Context API to share data between components.

                    If you decide you need an external state management tool, I highly recommend checking out Recoil, which is a super lightweight and easy tool for managing global state. Another popular library is Redux.</p>
                <h2 className='text-2xl text-center font-bold text-primary mb-10 mt-5'> How does prototypical inheritance work?</h2>
                <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.All JavaScript objects inherit properties and methods from a prototype:</p>
                <ul className='list-disc ml-10'>
                    <li>Date objects inherit from Date.prototype.</li>
                    <li>Array objects inherit from Array.prototype.
                    </li>
                    <li>Player objects inherit from Player.prototype.
                    </li>

                </ul>
                <p>The Object.prototype is on top of the prototype inheritance chain. ​ Date objects, Array objects, and Player objects all inherit from Object.prototype.</p>
            </div>
            <div>
                <h2 className='text-2xl text-center font-bold text-primary mb-10 mt-5'> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?

                </h2>
                <p className='mb-3'>From the question we can see that, we have an array of products. So to find a product by name from an array of products we can use  different JavaScrpit array methods like find() ,filter(),includes() etc.

                </p>
                <p>We can simply solve the problem with find() method. For example, if the name of the array is products and the array has key,value pairs of different product.So, to find the products by name as a key, we can use products.find(0= &gt; 0.name==='name'). Here, 'name' is the name of each product to search for.</p>
            </div>
            <div>
                <h2 className='text-2xl text-center font-bold text-primary mb-10 mt-5'>What is a unit test? Why should write unit tests?</h2>
                <p className='mb-3'>Software testing is a detailed procedure that requires many steps. It is an essential part of the software development process and is done so that only the best product reaches the end-user. Unit testing is a method that is used to test programs and applications to see if they function according to the clients’ specifications.

                    If any problems persist, they should ideally be taken care of earlier on so that they don’t show up when the final version is sent out to clients. Software unit testing mainly involves checking individual modules for errors.

                </p>
                <p className='mb-3'>Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.</p>
                <h2 className='font-bold my-3'>Why do we need Unit testing?</h2>
                <p>To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:</p>
                <ul className='list-disc ml-10'>
                    <li>Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</li>
                    <li>Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</li>
                    <li>It simplifies the debugging process.
                    </li>
                    <li>Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.</li>
                    <li>Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                    </li>
                    <li>Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</li>
                    <li>In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback. </li>
                </ul>
            </div>

        </div>
    );
};

export default Blogs;