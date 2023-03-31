# How to use Next.js with ChatGPT ?

## About The Project

- This application was made to measure the amount of water you spend at home. Main reason of this development, how can you use Next.js with ChatGPT. <a href="https://next-chatgpt-last.vercel.app/" target="_blank">Demo Link</a>

- You can see that you have exceeded or not exceeded the intermediate and upper limit by entering the water you spend daily, estimated weekly and estimated monthly.

- If you enter daily value, you can learn amount the estimated weekly and monthly.

- According to the amount of water you spend daily, a message will be sent to you via ChatGPT.

- You can use state management with Redux Toolkit.

- This product integrated to PWA so you can use offline environment of internet connection.

## Built With

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width=48 height=48>
<img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" width=48 height=48 />
<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" width=48 height=48>
<img src="https://cdn.worldvectorlogo.com/logos/redux.svg" width=48 height=48>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" width=48 height=48>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg" width=100 height=25>

# Getting Started

## Prerequisites
```bash
npm install npm@latest -g
```

## Installation
- Clone the repo
```bash
https://github.com/brkcvn/next-chatgpt.git
```
- Get a API Key for ChatGPT at https://platform.openai.com/
- More information at https://platform.openai.com/docs/introduction/overview
- Enter your API in src/components/_daily.tsx
```bash
const API_KEY = "ENTER YOUR API";
```
