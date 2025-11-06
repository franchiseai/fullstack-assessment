![image](https://github.com/user-attachments/assets/0eb09a37-b8f8-41e9-ad2d-dc9539f11899)


### **Introduction**

NASA’s Astronomy Picture of the Day (APOD) is a popular online resource that showcases images of the universe, along with informative descriptions written by professional astronomers. The APOD images are accessible through the free [NASA  API](https://api.nasa.gov/), which provides metadata and imagery for a given date range.

In this task, you will build a full-stack web application that allows users to explore APOD images, create named collections, add personal notes, and manage their saved content using a React-based frontend and a Node.js/Express backend with a PostgreSQL database.

Please fork this repository to begin your submission. There is no time limit.

We expect this task to take between 4 and 6 hours. Focus on the non-optional requirements first. If you feel you are spending an unreasonable amount of time on this task then stop and we can discuss the submission as-is.

If you wish to extend your submission, you are welcome add features in place of those listed below as "optional".

### **Requirements:**

**Frontend (React + TypeScript + Tailwind):**
-   Search for APOD images over a date range
-   Display fetched images, titles, and descriptions in a _reasonably_ clean UI.
-   Allow users to create named collections of their favourite images.
-   Allow users to add notes to images in their collections. _(optional)_
- Allow user to see if any images in the search results are already in a collection, and if so, which one. _(optional)_
-   View lists of images in their respective collections, with their notes if applicable.
-   Responsive design for mobile and desktop. _(optional)_

**Backend (Bun/Express + TypeScript):**
-   Create API routes to:
    -   Fetch APOD data from NASA API over a specified date range.
    -   Save, edit, delete and retrieve user collections and (optionally) notes.
-   Validate incoming API requests.
- Testing _(optional)_

**Database (SQLite with Drizzle ORM):**
-   Store data for later retrieval as determined by frontend and backend requirements.
- Sensible table structure.
- Use appropriate indexing and data types.
- Uses Drizzle ORM with SQLite for local development and easy setup.

_**A deployed demo is optional but encouraged**_
_**User authentication / accounts are not required**_


### LLM Assistance
 - You are permitted to use LLMs to assist you in this task, please document exactly how and when you are using LLM tools, and all steps taken to ensure generated code works as intended
 - We will discuss your usage of AI tools in your follow up review.
 - Don't worry about being honest! We use AI heavily at work.
   
### **Evaluation Criteria**

Your submission will be evaluated based on the following criteria, in order of importance:

1.  **Functionality**
    
    -   Correct implementation of all required features, including searching for APOD images, creating collections, and adding notes.
    -   Smooth interaction between frontend and backend, with appropriate API usage and data persistence.
    -   Proper error handling and validation for API requests and user input.
2.  **Code Quality**
    - Library choices - we are likely to discuss this in your follow up interview
    -   Clean, readable, and maintainable code with clear separation of concerns.
    -   Effective full-stack use of TypeScript
3.  **Database Design**
    
    -   Proper schema design with indexing and data normalization.
    -   Efficient queries and appropriate data types for scalability.
4.  **UI/UX Design**
    
    -   A well-structured UI that provides a decent user experience.

### Submission
 - Submit by email to bill@franchisesystems.ai
 - Include
	- Link to forked repository
	- Demo video _and / or_ a live demo link


Thank you for taking the time to complete this task. We look forward to seeing and discussing your submission.
Please reach out to bill@franchisesystems.ai for any questions or clarification.
Asking any questions will _not_ affect our judgement of your submission.

---

## Setup Instructions

### Prerequisites
- [Bun](https://bun.sh/) installed (for server)
- Node.js and npm/yarn (for client)

### Installation

**Server Setup:**
```bash
cd server
bun install
```

**Client Setup:**
```bash
cd client
npm install  # or yarn install
```

### Database Setup

This project uses **Drizzle ORM** with **SQLite** (via Bun's built-in SQLite driver) for the database.

**Database Schema:**
- `collections` - Stores user-created collections
  - id (integer, primary key)
  - name (text)
  - createdAt (timestamp)

- `images` - Stores APOD images saved to collections
  - id (integer, primary key)
  - collectionId (foreign key)
  - date, title, url, hdurl, explanation, mediaType, copyright
  - createdAt (timestamp)

- `notes` - Stores user notes for images (optional feature)
  - id (integer, primary key)
  - imageId (foreign key)
  - noteText (text)
  - createdAt, updatedAt (timestamps)

**Initialize the database:**
```bash
cd server

# Generate migrations from schema
bun run db:generate

# Apply migrations (or use db:push for development)
bun run db:push
```

**Database Commands:**
- `bun run db:generate` - Generate migration files from schema
- `bun run db:migrate` - Apply pending migrations
- `bun run db:push` - Push schema changes directly (for development)
- `bun run db:studio` - Open Drizzle Studio (visual database browser)

### Environment Variables

Copy `.env.example` to `.env` in the server directory:
```bash
cd server
cp .env.example .env
```

Edit `.env` with your NASA API key (optional, defaults to DEMO_KEY).

### Running the Application

**Start the server:**
```bash
cd server
bun run dev
```

**Start the client:**
```bash
cd client
npm run dev  # or yarn dev
```

### Database Location

The SQLite database file is stored at `server/data/apod.db` by default. You can customize this location by setting the `DB_PATH` environment variable in your `.env` file.
