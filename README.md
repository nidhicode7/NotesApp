# NotesApp



## 📘 Project Notes: Firebase Login App

### 🧠 **Goal of This Project**
To create a **Login & Signup Web App** where users can:
- Sign up using their **email and password**
- Log in and log out securely
- All credentials are stored securely using **Firebase Authentication**
- Finally, host (publish) the app on the internet using **Firebase Hosting**

---

### 🛠️ **Technologies Used**
| Tool | Purpose |
|------|---------|
| **HTML** | To design the structure of the login page |
| **JavaScript** | To make the login/signup work (functionality) |
| **Firebase** | To store and manage user login info (authentication) and publish the site (hosting) |

---

### 🔧 Step-by-Step What We Did and Why

---

#### 1. **Set Up Firebase Project**

✅ Why?
> Firebase gives us ready-made tools to handle login/signup, so we don’t need to write backend code or create a database ourselves.

📝 Steps:
- Go to [Firebase Console](https://console.firebase.google.com/)
- Click **"Add project"** → Give project name (e.g., NotesApp)
- Click **"Build" > Authentication** → Enable **Email/Password sign-in**

---

#### 2. **Create HTML File (index.html)**

✅ Why?
> This is the **main webpage** where users enter their email and password.

📝 Includes:
- Simple form with email and password fields
- 3 buttons: **Sign Up**, **Log In**, **Log Out**
- Stylish design using embedded CSS

---

#### 3. **Write JavaScript Code (app.js)**

✅ Why?
> To **connect our webpage to Firebase** and make the SignUp, Login, and Logout buttons work.

📝 What happens in code:
- It connects to Firebase using your project’s unique config.
- Uses Firebase Authentication to create accounts or sign in users.
- Displays messages based on success or errors (e.g., wrong password).

---

#### 4. **Link Firebase to Our Code**

✅ Why?
> Firebase needs to know your web app is part of your Firebase project.

📝 How:
- We included Firebase script URLs in our HTML:
```html
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
```
- We added our project’s Firebase config in JavaScript to connect both.

---

#### 5. **Install Firebase CLI on Mac**

✅ Why?
> To run Firebase commands from the terminal like "deploy to web".

📝 Steps:
```bash
npm install -g firebase-tools   # Install Firebase tools globally
firebase login                  # Login to your Google account
```

---

#### 6. **Initialize Firebase Hosting**

✅ Why?
> To tell Firebase which project to use and where our files are.

📝 Steps:
```bash
firebase init hosting
```
- Choose: **Use existing project**
- Select your project: `notesapp-cd5b8`
- Set public directory: `.` (means current folder)
- Choose: **Yes for single-page app**
- Skip overwriting index.html: **No**

---

#### 7. **Deploy the App Online**

✅ Why?
> To publish your web app so anyone on the internet can visit and use it.

📝 Steps:
```bash
firebase deploy
```

🎉 After successful deploy, it gave you a public URL like:

👉 [https://notesapp-cd5b8.web.app](https://notesapp-cd5b8.web.app)

---

### 🔐 Where Are Credentials Stored?

- Firebase **does NOT store passwords directly**.
- It uses **secure hashing** and stores the info in Firebase Authentication backend.
- You can view users in **Firebase Console > Authentication > Users**.

---

### ✅ Features of This App

- Email & Password Login
- Sign Up
- Log Out
- Fully Hosted Online
- Secure using Firebase Authentication
- Stylish UI using only HTML + CSS

---

### 🌱 Future Add-ons (Optional Ideas)

- Add **Google Sign-In**
- Add **email verification**
- Add **forgot password/reset feature**
- Connect with **Firestore database** to save user notes
