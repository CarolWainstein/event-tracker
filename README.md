# Event Tracker

Event Tracker is a React application for managing events. It is built using TypeScript and SCSS. This application allows users to view, add, and manage events in a calendar interface.

## Getting Started

To get started with this project locally, follow the steps below:

### Prerequisites

1. **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed. This project requires Node.js 14 or higher.

2. **npm**: This project uses npm for package management. Ensure you have npm installed with Node.js.

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/event-tracker.git
   cd event-tracker```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Set Up JSON Server**
To mock the backend, this project uses JSON Server. Follow these steps to set it up:

- Install JSON Server
  ```bash
  npm install -g json-server
  ```

- Create a db.json file
  In the root of the project, create a file named db.json and add your events data.

- Run JSON Server

In the root directory of your project, start the JSON Server:

```bash
json-server --watch db.json --port 8080
```

4. **Update the Fetch URL**
   In your project, update the URL used to fetch data from the JSON Server. Open the file where the fetch request is made (e.g., src/state/selectors.ts), and change the URL in the fetch call to:

   ```bash
   const respostaHttp = await fetch('http://localhost:8080/eventos')
   ```
5. **Run the Application**
   ```bash
   const respostaHttp = await fetch('http://localhost:8080/eventos')
   ```
The application will be available at http://localhost:3000.

### Troubleshooting
- **Network Issues:** If you encounter network errors, ensure that the JSON Server is running and accessible at http://localhost:8080.


