# Property Manager (Released Clone)

## Live Demo (Frontend Only)

You can view the deployed frontend here: [https://zealous-water-0458bc600.1.azurestaticapps.net/](https://zealous-water-0458bc600.1.azurestaticapps.net/)

This project is a clone of the Released property manager app, built to demonstrate proficiency with the Released technology stack. It features a modern Vue 3 frontend and an ASP.NET Core backend, with SQL Server as the database.

## Tech Stack

- **Frontend:** Vue 3, Vite, Vue Router, Jest
- **Backend:** ASP.NET Core (.NET 8), Entity Framework Core, Swashbuckle (Swagger/OpenAPI)
- **Database:** SQL Server

---

## Features

- Property management: add, edit, delete, and list properties
- Modern, responsive UI
- RESTful API with Swagger documentation
- SQL Server integration for persistent data storage

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- .NET 8 SDK
- SQL Server (local or Docker)

---

## Frontend Setup (`client/`)

1. Install dependencies:
   ```sh
   cd client
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. Run tests:
   ```sh
   npm run test
   ```

---

## Backend Setup (`PropertyManager.Api/`)

1. Configure your SQL Server connection string in `PropertyManager.Api/appsettings.Development.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=localhost,1433;Database=PropertyManagerDb;User Id=sa;Password=Your_password123;"
   }
   ```
2. Apply database migrations (if any):
   ```sh
   cd PropertyManager.Api
   dotnet ef database update
   ```
3. Run the API:
   ```sh
   dotnet run
   ```
4. Access Swagger UI at [https://localhost:5001/swagger](https://localhost:5001/swagger) (or the port shown in your terminal).

---

## Project Structure

- `client/` - Vue 3 frontend
- `PropertyManager.Api/` - ASP.NET Core backend

---

## Notes
- This project is for demonstration purposes and may use mock data or simplified logic.
- For a production deployment, review security, environment variables, and database setup.

---

## License

This project is for educational and demonstration purposes only. 