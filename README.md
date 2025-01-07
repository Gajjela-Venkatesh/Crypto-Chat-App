# Crypto Chat App

**Base64 Encoding:** The application uses base64 encoding to securely transform messages.

**Clipboard Functionality:** Easily copy encrypted or decrypted messages to your clipboard for effortless sharing.

**User-Friendly Interface:** The design is straightforward and intuitive, allowing for smooth user interaction.

**Password Protection:** Messages are protected from unauthorized access by requiring a password for decryption.

## Technologies Used
- **HTML:** Used to create the web page's structure.
- **CSS:** Used for styling and providing a responsive, modern look to the app.
- **JavaScript:** Manages the encryption and decryption logic, implementing base64 encoding and decoding.

## Installation
Follow these steps to get the Crypto Chat App up and running on your local machine:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/Gajjela-Venkatesh/crypto-chat-app.git
   ```
2. Navigate to the project folder:
   ```bash
   cd crypto-chat-app
   ```
3. Open the `index.html` file in your web browser.

There is no need for any server-side setup; the app runs entirely on the client side.

## Usage
Once you have the app open in your browser, here’s how to use it:

### Encrypt a Message:
1. Type your message into the message input box.
2. Enter a password in the password field.
3. Click the "Encrypt" button to generate the encrypted message.
4. The encrypted message (ciphertext) will appear on the screen.

### Decrypt a Message:
1. Paste the encrypted message into the message input box.
2. Enter the correct password used for encryption.
3. Click the "Decrypt" button to view the original message.

### Copy Messages:
After encryption or decryption, click the "Copy" button to copy the message to your clipboard for easy sharing.

## How It Works
- **Message Encryption:** The message is first converted into ASCII and then encoded into base64 format. This transformation makes the message unreadable without the correct password.
  
- **Message Decryption:** Users input the correct password to decrypt the message. The app reverses the encryption process, converting the base64 message back into the original text.

- **Base64 Encoding:** Base64 encoding is a common method used to encode binary data into a string format safe for transmission over text-based protocols. This app utilizes base64 for both the encryption and decryption of messages.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request if you have any suggestions, improvements, or bug fixes. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make changes and commit them:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

Thank you for using the Crypto Chat App! With this tool, you can send secure, encrypted messages, knowing that only the intended recipient with the correct password can decrypt and read them.

## Key Sections:
- **Features:** A detailed list of the app's core functionalities.
- **Technologies Used:** An overview of the technologies involved in the app's development.
- **Installation:** Clear and straightforward instructions for setting up the app locally.
- **Usage:** A step-by-step guide for interacting with the app.
- **How It Works:** An explanation of the underlying encryption and decryption processes.
- **Contributing:** A section that encourages collaboration from the development community.
- **License:** Information about the MIT License, commonly used for open-source projects.**Contributing:** A section that encourages collaboration from the development community.
- **License:** Information about the MIT License, commonly used for open-source projects.**Contributing:** A section that encourages collaboration from the development community.
- **License:** Information about the MIT License, commonly used for open-source projects.
