# Crypto Chat App 

Crypto Chat App is a secure messaging application that ensures privacy and confidentiality by encrypting and decrypting messages using a password. The app uses base64 encoding to transform text into unreadable ciphertext; only those with the correct password can decrypt it back to the original message. This makes it an ideal tool for sending sensitive information securely.

Features
•	Message Encryption: Provide a password to encrypt any text message. The message is converted into unreadable ciphertext, ensuring its confidentiality.
•	Message Decryption: Decrypt an encrypted message using the correct password to retrieve the original text.
•	Base64 Encoding: The app uses base64 encoding for secure message transformation.
•	Clipboard Functionality: Copy encrypted or decrypted messages to the clipboard for easy sharing.
•	User-Friendly Interface: Simple and intuitive design for smooth user interaction.
•	Password Protection: Protects messages from unauthorized access by requiring a password to decrypt.

Technologies Used
HTML: Used to create the web page's structure.
CSS: Used for styling and providing a responsive, modern look to the app.
JavaScript: Handles the encryption and decryption logic, implementing base64 encoding and decoding.
  
Installation
Follow the steps below to get the Crypto Chat App up and running on your local machine:

1. Clone this repository to your local machine:
git clone https://github.com/Gajjela-Venkatesh/crypto-chat-app.git
Navigate to the project folder:
cd crypto-chat-app
Open the index.html file in your web browser.

There is no need for any server-side setup. The app runs entirely on the client side.

Usage
Once you have the app open in your browser, here’s how you can use it:

Encrypt a Message:

Type your message into the message input box.
Enter a password in the password field.
Click the Encrypt button to generate the encrypted message.
The encrypted message (ciphertext) will appear on the screen.
Decrypt a Message:

Paste the encrypted message into the message input box.
Enter the correct password that was used for encryption.
Click the Decrypt button to view the original message.
Copy Messages:

After encryption or decryption, click the Copy button to copy the message to the clipboard for easy sharing.
How It Works
Message Encryption: The message is first encoded into ASCII, then converted into base64 format. This transformation makes the message unreadable without the proper password.
Message Decryption: The user inputs the correct password to decrypt the message. The app will reverse the encryption process, converting the base64 message back into the original text.
Base64 Encoding: Base64 encoding is a common method for encoding binary data into a string format safe for transmission over text-based protocols. This app is used for both encryption and decryption of messages.
Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have any suggestions, improvements, or bug fixes. Here's how you can contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make changes and commit them (git commit -am 'Add new feature').
Push the branch (git push origin feature/your-feature-name).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Thank you for using the Crypto Chat App! With this tool, you can send secure, encrypted messages knowing that only the intended recipient with the correct password can decrypt and read them.

Key Sections:
o	Features: Detailed list of the app's core functionality.
o	Technologies Used: Highlights the technologies involved.
o	Installation: Simple instructions for setting up the app locally.
o	Usage: Step-by-step guide for interacting with the app.
o	How It Works: Explains the underlying encryption and decryption process.
o	Contributing: Encourages collaboration from the developer community.
o	License: Includes the MIT license, which is commonly used for open-source projects.
