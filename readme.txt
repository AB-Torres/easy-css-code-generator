# CSS Snippet Generator Tool v2.1 Rev 1.1

## **Overview**
The **CSS Snippet Generator Tool** is designed to simplify the creation of custom CSS styles. It provides an interactive and user-friendly interface to quickly configure visual properties and generate ready-to-use CSS code.

This version, **v2.1 Rev 1.1**, introduces multiple enhancements and features, including dark mode, real-time previews, and options to copy or download the generated code.

---

## **Key Features**

### **1. CSS Code Generation**
Enables users to generate CSS code based on visual configurations such as:
- **Button Styles:** Background color, text color, border radius, hover color.
- **Typography Styles:** Font size, font weight, line height, and text color.

The generated CSS code is displayed in a text area in real-time.

---

### **2. Real-Time Previews**
- Changes to CSS properties are immediately reflected in an interactive preview of the button and text.
- Configurations include an optional grid to visually align elements.

---

### **3. Dark Mode**
- Allows toggling between light and dark color schemes to enhance the user experience.
- Dark mode remains active even after performing actions like "Generate CSS."

---

### **4. Export Options**
- **Copy CSS to Clipboard:** A dedicated button to copy the generated CSS code to the clipboard, ready to paste into a stylesheet or project.
- **Download CSS:** Allows downloading the generated code as a `.css` file with a single click.

---

## **Project Structure**
The tool follows a well-organized file structure to facilitate customization and maintenance:

```
CSS-Snippet-Generator-Tool/
├── index.html           # Main HTML file
├── styles/
│   ├── styles.css       # Base styles for the tool
│   ├── dark-mode.css    # Styles for dark mode
├── scripts/
│   ├── app.js           # Main interaction logic
│   ├── css-generator.js # Functions to generate CSS code
│   ├── jszip.min.js     # Library for handling ZIP file downloads
├── README.md            # Project documentation
```

---

## **How to Use the Tool**

1. **Open the Tool:**
   - Open the `index.html` file in a web browser.

2. **Configure Styles:**
   - Select the visual options for your button and typography.
   - The preview updates in real-time as you make changes.

3. **Copy or Download CSS:**
   - Use the "Copy CSS" button to copy the code to the clipboard.
   - Click "Download CSS" to save a file ready for your project.

4. **Dark Mode:**
   - Toggle the color scheme with the "Toggle Dark Mode" button.

---

## **Changes in This Version (v2.1 Rev 1.1)**

1. **Fixes and Improvements:**
   - Dark mode remains active after generating CSS.
   - Fixed the page reload issue caused by the "Generate CSS" button.

2. **New Features:**
   - Added an option to copy CSS to the clipboard.
   - The CSS code preview is now interactive and real-time.

3. **Improved Structure:**
   - Optimized file organization and CSS styles.

---

## **System Requirements**
- A modern web browser supporting HTML5, CSS3, and JavaScript.

---

## **Credits**
Developed by the **CSS Snippet Generator Tool** team. Includes the [JSZip](https://stuk.github.io/jszip/) library under the MIT license.

---

## **License**
This project is licensed under the MIT License. You are free to use, modify, and distribute it, provided attribution to the original author is maintained.

