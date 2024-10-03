# nextjs-flash-message

A Next.js library for sending temporary messages from server functions to the client, displaying them as toast notifications.

This project is a port of [sveltekit-flash-message](https://github.com/ciscoheat/sveltekit-flash-message) by [Andreas Söderlund](https://github.com/ciscoheat). Credit goes to the original author for the concept and implementation.

## Features

- Send flash messages from server-side functions
- Display messages as toast notifications on the client-side
- Supports success and error message types
- Seamless integration with Next.js applications

## Installation

To install `nextjs-flash-message`, run the following command in your project directory:
`npm i nextjs-flash-message`

## Usage

The usage of `nextjs-flash-message` consists of two main steps:

1. Setting up the FlashMessage component
2. Sending flash messages from server actions

### 1. Setting up the FlashMessage component

First, you need to add the `FlashMessage` component to your layout or page where you want the toast notifications to appear. Typically, this would be in your root layout file.

### 2. Sending flash messages from server actions

In your server actions or server-side functions, you can use the `setFlash` function to send messages that will be displayed as toast notifications on the client side.

Here's an example of how to use `setFlash` in a server action:

```
'use server';
import { setFlash } from 'nextjs-flash-message';

export async function action(prevData: any, formData: FormData) {
    // do something in this actions...
    setFlash({ type: 'success', message: 'Item added successfully!' });
}
```
