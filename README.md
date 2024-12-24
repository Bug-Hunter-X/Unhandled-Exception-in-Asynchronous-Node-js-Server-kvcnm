# Unhandled Exception in Asynchronous Node.js Server

This repository demonstrates a common error in Node.js: unhandled exceptions within asynchronous callbacks.  The server crashes silently without proper error handling when a specific route is requested.  The solution demonstrates how to implement proper error handling to prevent unexpected server crashes.

## Bug

The `bug.js` file contains a simple HTTP server.  When the `/error` route is requested, an exception is thrown within the asynchronous `setTimeout` callback.  Because this exception is not caught, it causes the server to crash.

## Solution

The `bugSolution.js` file provides a corrected version with improved error handling.  The `try...catch` block within the asynchronous callback gracefully handles the exception, preventing the server from crashing.