import React from 'react';
import "../App.css";
// All Components
import Card from "./Card";


const BlogSection = () => {
    return (
        <article className="row my-3">
            <Card
                title="Mastering React: Essential Tips for Beginners"
                description="Discover key strategies and best practices for mastering React. This guide covers foundational concepts, common pitfalls, and tips to help you build scalable and efficient React applications."
                date="19 Sep 2024"
            />

            <Card
                title="Building Dynamic Websites with HTML, CSS, and JavaScript"
                description="Learn how to create interactive and visually appealing websites using HTML, CSS, and JavaScript. This article provides step-by-step tutorials and practical examples to enhance your front-end development skills."
                date="19 Sep 2024"
            />

            <Card
                title="Exploring the MERN Stack: Building Full-Stack Applications"
                description="Dive into the MERN stack (MongoDB, Express.js, React, Node.js) and learn how to build powerful full-stack applications. This post includes an overview of each technology and practical guidance for developing modern web applications."
                date="19 Sep 2024"
            />

            <Card
                title="Advanced CSS Techniques for Modern Web Design"
                description="Elevate your web design skills with advanced CSS techniques. This article explores modern CSS features like Flexbox, Grid Layout, and animations, offering insights and examples to help you create stunning, responsive designs."
                date="19 Sep 2024"
            />

            <Card
                title="Leveraging AI Tools to Boost Your Coding Efficiency"
                description="Discover how AI tools can enhance your coding workflow and productivity. From code completion to automated testing, this post explores various AI-powered tools that can streamline your development process and improve your coding efficiency."
                date="19 Sep 2024"
            />

            <Card
                title="Introduction to Node.js: Building Scalable Server-Side Applications"
                description="Get started with Node.js and learn how to build scalable server-side applications. This guide covers the basics of Node.js, including its architecture, key modules, and how to set up a simple server to handle HTTP requests."
                date="19 Sep 2024"
            />
        </article>
    )
}

export default BlogSection
