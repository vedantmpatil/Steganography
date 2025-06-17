# 🕵️‍♂️ Image & Linguistic Steganography Web App

A web-based steganography platform that allows users to **hide and reveal secret messages** using two techniques:  
**1. Image Steganography** and **2. Linguistic Steganography**.  
The app is simple, secure, and runs entirely in the browser without uploading any data to servers.

---

## ✨ Features

### 🔒 Image Steganography
- Hide secret text inside image files using least significant bit (LSB)-like techniques.
- Reveal hidden text from previously encoded images.
- Client-side only — no image is uploaded to any server.

### 🗣️ Linguistic Steganography
- Encode hidden messages within text using synonym substitution or special patterns.
- Decode stego-text to retrieve the original secret message.
- Simple interface to try out natural language hiding techniques.

### 📱 Responsive Interface
- Built using **HTML**, **CSS**, and **JavaScript**.
- Works smoothly across desktops, tablets, and mobile browsers.

---

## 🛠️ Technologies Used

| Component      | Technology        |
|----------------|-------------------|
| UI & Structure | HTML5             |
| Styling        | CSS3              |
| Logic          | JavaScript (ES6)  |
| Versioning     | Git               |

---

## 🚀 How to Use

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/steganography-web-app.git
   cd steganography-web-app
   ```

2. **Open `index.html` in your browser**  
   > No server setup needed — the entire app runs in your browser.

---

## 📁 File Structure

```
steganography-web-app/
├── index.html        # Main web interface
├── script.js         # Handles encoding & decoding logic
├── style.css         # UI styling
```

---

## 💡 Use Cases

- Secure message sharing through images or linguistically camouflaged text.
- Educational tool for understanding basic steganography.
- Simple testing platform for proof-of-concept stego techniques.

---

## ⚠️ Disclaimer

This app is a basic prototype intended for **educational and demonstration purposes only**. It does not offer industrial-grade encryption or steganographic resistance against forensic analysis.

---



## 🙌 Acknowledgments

- Inspired by traditional steganography techniques and beginner-level cryptography.
- HTML5 canvas image manipulation for encoding.
