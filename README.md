# Fun with GPT-3

My solution to Shopify's Front End Developer Intern Challenge.

**Live URL**: [https://shopify-gpt3.netlify.app](https://shopify-gpt3.netlify.app)

## Features

- View responses to submitted prompts.

- Save responses if the user leaves or reloads the page.

## Technologies Used

The libraries and tools I used in the project include the following:

- [React](https://reactjs.org/), to handle the UI.

- [SASS](https://sass-lang.com/), to style the app.

## Getting Started

The following contains the steps required to get the application up and running on your local workspace.

### Prerequisites

- node v16.13.2
- yarn v1.22.17
- git v2.20.1

### Running locally

To run the app locally, follow the steps below:

1. Clone the repository to your PC using your terminal. For more info, refer to this [article.](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)

2. Navigate into the repository using the command:

   ```
   cd fun-with-gpt3
   ```

3. Install the dependencies in the package.json using the command:

   ```
   yarn install
   ```

4. After the dependencies have been installed successfully:

   1. Create a `.env` file at the root of the repository.

   2. Copy the contents of the `.env.sample` file into the `.env` file.

   3. Configure the environment variables in the now populated `.env` file with your own values.

5. Run the app in your terminal using the command:

   ```
   yarn start
   ```
