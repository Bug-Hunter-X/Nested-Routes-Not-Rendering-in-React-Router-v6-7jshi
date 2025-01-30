# React Router v6 Nested Route Rendering Issue

This repository demonstrates a common issue encountered when working with nested routes in React Router v6. The problem lies in how nested routes are defined and handled, leading to unexpected behavior where nested routes fail to render despite seemingly correct configuration.

## Problem Description

The provided `bug.js` file contains a simple React application using React Router v6.  Despite having nested routes defined, only the parent route renders. Navigating to nested routes results in the parent route being displayed, but not the child components.

## Solution

The `bugSolution.js` file offers a solution by ensuring proper use of the `useParams` hook to access URL parameters and correct route path definitions.  This resolves the issue, allowing the nested routes to render correctly.

## How to reproduce the issue

1. Clone this repo.
2. Navigate to the directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.
5. Observe the behavior and the solution provided.