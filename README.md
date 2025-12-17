

## Auto Git Push

Auto Git Push is a web app that lets you upload a .zip file and automatically push its contents to a GitHub repository. No more manual git commands—just upload, fill in your GitHub info, and push.

Perfect for developers who want to quickly update projects or share files to a repository without touching the terminal.


---

## Features

```
i am not getting any data from website 
```

Upload a .zip file and extract all files automatically.

Commit and push to your GitHub repository with one click.

Fully customizable: GitHub username, email, token, repository URL, and commit message.

Clean, simple web interface—works in any modern browser.

Secure: no personal info is stored, your GitHub token stays private.



---

## Demo & Contact

GitHub: mikey177013


Follow me for updates, tips, and cool projects.


---

## How It Works

1. Upload a .zip file with your project.


2. Fill in your GitHub repository URL, username, email, personal access token, and commit message.


3. Click Upload & Push.


4. The server extracts the zip, commits all files, and pushes them to your repo automatically.



It’s that simple!


---

## Installation (For Local Use)

1. Clone this repository:

```

git clone https://github.com/mikey177013/auto-git-push-generic.git
cd auto-git-push-generic
```
2. Install dependencies:


```
npm install
```
3. Start the server:


```
npm start
```
4. Open your browser:


```
http://localhost:3000
```
5. Fill in the GitHub info, upload your zip, and click Upload & Push.




---

## Deployment (Render)
```
Root directory: project root (auto-git-push-generic/)

Build command: npm install

Start command: npm start

The server automatically uses Render’s PORT environment variable.

```

---

## Security & Privacy

Your GitHub token is never stored—it’s used only to push files in that session.

All user input (username, email, token, repo URL) is temporary and not logged or saved.

No files or credentials are shared with anyone.

Feel free to use this safely with your private repos.



---

## Technology Stack

Node.js & Express – Backend server

Multer – Handles file uploads

Adm-Zip – Extracts zip files

Simple-Git – Runs Git commands programmatically

HTML/CSS – Web interface



---

## License

This project is MIT Licensed.


---

