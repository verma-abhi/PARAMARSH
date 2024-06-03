# PARAMARSH - "Facilitating Your Growth"

Paramarsh is a chat application designed to facilitate communication between students and mentors under the Student Mentorship Program of the college. The application allows students to join chat rooms, send messages, and receive real-time responses from their mentors.

## Features

- **Real-time Messaging**: Instant communication between students and mentors.
- **User Authentication**: Secure login for mentors and managers to access their respective chat rooms from admin page.
- **Mentor Notifications**: Mentors are notified when students join the chat room.
- **Message Notifications**: Users can see when the other party is typing a message.
- **Backend Control**: Manager can add , edit and  delete mentors. Mentors can join any chat Room listed. Chats can be seen later also.
- **Responsive Design**: Accessible on various devices with a user-friendly interface.

## Technologies Used

- **Backend**: Django, Channels
- **Frontend**: HTML, Tailwind CSS, JavaScript
- **Database**: SQLite (for development), PostgreSQL (for production)
- **WebSocket**: For real-time communication

## Setup and Installation

### Prerequisites

- Python 3.8+
- Node.js
- npm (Node Package Manager)

### Backend Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/verma-abhi/PARAMARSH.git
    cd paramarsh
    ```

2. **Create a virtual environment and activate it:**

    ```bash
    python3 -m venv env
    source env/bin/activate  # On Windows use `env\Scripts\activate`
    ```

3. **Install the required packages:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Run database migrations:**

    ```bash
    python manage.py migrate
    ```

5. **Create a superuser:**

    ```bash
    python manage.py createsuperuser
    ```

6. **Start the development server:**

    ```bash
    python manage.py runserver
    ```

### Frontend Setup

1. **Navigate to the `static` directory:**

    ```bash
    cd static
    ```

2. **Install the required npm packages:**

    ```bash
    npm install
    ```

3. **Build the frontend assets:**

    ```bash
    npm run build
    ```

### Running the Application

- Ensure both the backend and frontend servers are running.
- Open your browser and navigate to `http://127.0.0.1:8000/` to see the application in action.

## Project Structure

- `account/`: Contains user authentication and related models.
- `chat/`: Contains the main chat application logic.
- `core/`: Contains the core application templates like base,index,about.
- `static/`: Contains static files including JavaScript and CSS.
- `templates/`: Contains HTML templates.
- `manage.py`: Django management script.
- `requirements.txt`: Python dependencies.

## How to Use

1. **User Registration and Login**:
   - Mentors and Manager can register and log in using their credentials.
   - Mentors can join room and send message from chat-admin 
   - Manager can add/edit/delete mentor and can also delete room

2. **Joining a Chat Room**:
   - Students can join chat rooms entering their name creating unique room IDs.

3. **Sending and Receiving Messages**:
   - Students can send messages in the chat room.
   - Real-time updates ensure instant communication.

## About

This project is developed by Abhishek Verma a It aims to enhance communication and support for students through an efficient chat platform. 

## Connect with the Developer

Feel free to connect with me and give suggestions on LinkedIn:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Abhishek%20Verma-blue?logo=linkedin)](https://www.linkedin.com/in/abhishekverma0313/)


