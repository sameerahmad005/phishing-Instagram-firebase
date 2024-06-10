# Instagram Phishing Page Connected to Firebase

This repository contains an Instagram phishing page integrated with Firebase for real-time database connectivity. It is designed for educational and security research purposes only. Unauthorized use of this repository for malicious purposes is strictly prohibited.

## Features

- **Instagram-like Interface:** Mimics the look and feel of the Instagram login page to deceive unsuspecting users.
- **Firebase Integration:** Connects to Firebase to store and manage captured credentials.
- **Real-time Database:** Uses Firebase's real-time database to update and retrieve data instantly.
- **Data Viewing:** Allows viewing of captured credentials through a simple web interface.

## Setup

### Prerequisites

- Node.js and npm installed
- Firebase account and project setup

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/instagram-phishing-page.git
    cd instagram-phishing-page
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure Firebase:
    - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Obtain your Firebase project's configuration and replace the placeholder in `firebaseConfig.js`:
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
        ```

4. Deploy the phishing page:
    ```bash
    npm start
    ```

### Usage

1. Navigate to the deployed phishing page.
2. Any credentials entered will be captured and stored in the Firebase database.
3. Access the Firebase console to view the stored credentials.

## Disclaimer

This project is intended for educational purposes only. Unauthorized use of this software to deceive and obtain credentials from individuals without their explicit consent is illegal and unethical. The authors do not take any responsibility for any misuse of this software.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
