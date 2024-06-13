# Phishing Instagram Firebase

This repository contains a simulated Instagram login page created using HTML5, CSS, and JavaScript. The page is designed for educational purposes to demonstrate how phishing attacks can be carried out. It is connected to Firebase to simulate data collection and storage.

## Features

- **Responsive Design**: Created using HTML5 and CSS to closely mimic the Instagram login interface.
- **Interactive Elements**: JavaScript is used to handle user inputs and form submission.
- **Firebase Integration**: Captured login credentials are stored in a Firebase database for demonstration purposes.

## Disclaimer

**This project is intended for educational purposes only.** It is designed to raise awareness about phishing attacks and to help individuals learn how to protect themselves from such threats. Using this tool to collect real user data without consent is illegal and unethical.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/sameerahmad005/phishing-Instagram-firebase.git
   cd phishing-Instagram-firebase
   ```

2. Open `index.html` in a web browser to view the phishing page.

3. To connect to Firebase, configure your Firebase project settings in `app.js`:
   ```javascript
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT_ID.appspot.com",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   firebase.initializeApp(firebaseConfig);
   ```

## Educational Resources

- [How Phishing Works](how-phishing-works?.md)
- [Protecting Yourself from Phishing Attacks](https://example.com/phishing-protection)
- [Firebase Documentation](https://firebase.google.com/docs)

## Contribution

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to update the HTML, CSS and JAVA with any additional information or customization you'd like!
