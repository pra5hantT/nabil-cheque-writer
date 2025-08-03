# Nabil Bank Cheque Writer

A professional web application for generating and printing Nabil Bank cheques with proper formatting and Nepali number-to-words conversion.

## 🏦 Features

### Core Functionality
- **Cheque Generation**: Create properly formatted Nabil Bank cheques
- **Nepali Number Conversion**: Automatic conversion of amounts to Nepali words (Lakh/Crore system)
- **AC Payee Support**: Optional AC Payee watermark for account payee cheques
- **Print Functionality**: High-quality print output with proper formatting
- **Date Formatting**: Automatic date formatting in DDMMYYYY format

### User Experience
- **Clean Interface**: Modern, responsive design with intuitive controls
- **Real-time Validation**: Input validation for decimal places and form fields
- **Auto-date**: Automatically sets today's date
- **Professional Layout**: Properly positioned elements matching bank cheque format

### Technical Features
- **Cross-browser Compatible**: Works on all modern browsers
- **Print Optimized**: Dedicated print styles for perfect output
- **Modular Code**: Separated CSS and JavaScript for maintainability
- **Responsive Design**: Works on desktop and mobile devices

## 📁 File Structure

```
Cheque Writer - Nabil Bank Nepal/
├── nabil.html          # Main HTML file
├── styles/
│   └── style.css      # All styling and layout
├── js/
│   └── script.js      # JavaScript functionality
├── nabil.jpg          # Cheque background image
└── README.md          # This documentation
```

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser
- Git (optional, for cloning the repository)

### Method 1: Direct Download
1. **Download** the project files from the repository
2. **Extract** the ZIP file to your desired location
3. **Navigate** to the extracted folder
4. **Open** `nabil.html` in your web browser

### Method 2: Git Clone
```bash
# Clone the repository
git clone https://github.com/pra5hantT/nabil-cheque-writer.git

# Navigate to the project directory
cd nabil-cheque-writer

# Open in your default browser
start nabil.html  # Windows
open nabil.html   # macOS
xdg-open nabil.html  # Linux
```

### Method 3: Manual Setup
1. **Create** a new folder for the project
2. **Download** all required files:
   - `nabil.html` (main application)
   - `styles/style.css` (styling)
   - `js/script.js` (functionality)
   - `nabil.jpg` (cheque background)
3. **Ensure** the directory structure is correct:
   ```
   your-project-folder/
   ├── nabil.html
   ├── styles/
   │   └── style.css
   ├── js/
   │   └── script.js
   └── nabil.jpg
   ```
4. **Open** `nabil.html` in your browser

### Verification
After installation, verify that:
- ✅ The application loads without errors
- ✅ All form fields are visible and functional
- ✅ The cheque background image displays correctly
- ✅ Print functionality works properly

### Troubleshooting Installation
**If the application doesn't load:**
- Check that all files are in the correct locations
- Ensure file names match exactly (case-sensitive)
- Verify that JavaScript is enabled in your browser
- Check browser console for any error messages

**If the background image doesn't appear:**
- Confirm `nabil.jpg` is in the root directory
- Check file permissions
- Verify the image file is not corrupted

## 📖 Usage

### Step 1: Enter Cheque Details
1. **Payee Name**: Enter the recipient's name
2. **Amount**: Enter the amount in numbers (supports decimals up to 2 places)
3. **Date**: Select the cheque date (defaults to today)
4. **AC Payee**: Check the box if this is an account payee cheque

### Step 2: Generate Cheque
- Click **"Generate Cheque"** to preview the formatted cheque
- The application will:
  - Convert the amount to Nepali words
  - Format the date properly
  - Position all elements correctly
  - Add AC Payee watermark if selected

### Step 3: Print
- Click **"Print Cheque"** to open the print dialog
- The print version is optimized for:
  - Proper paper size (7.5" x 3.5")
  - Clean formatting without borders
  - Accurate positioning for bank processing

## 🔧 Technical Details

### Number Conversion System
The application uses the Nepali numbering system:
- **Lakh**: 100,000 (1,00,000)
- **Crore**: 10,000,000 (1,00,00,000)
- **Paisa**: Decimal amounts (up to 2 places)

### Example Conversions
- `1,250` → "One Thousand Two Hundred Fifty Rupees Only"
- `1,250.50` → "One Thousand Two Hundred Fifty Rupees and Fifty Paisa Only"
- `1,00,000` → "One Lakh Rupees Only"
- `1,00,00,000` → "One Crore Rupees Only"

### CSS Positioning
The cheque uses absolute positioning for precise element placement:
- **Date**: Top-right corner with proper spacing
- **Payee Name**: Centered below date
- **Amount in Words**: Left side with proper line spacing
- **Amount in Figures**: Bottom-right corner
- **AC Payee**: Diagonal watermark when enabled

### Print Optimization
- Dedicated `@media print` styles
- Removed borders and shadows for clean output
- Adjusted positioning for print accuracy
- Optimized font sizes for readability

## 🛠️ Customization

### Modifying Styles
Edit `styles/style.css` to customize:
- Colors and fonts
- Layout positioning
- Print formatting
- Responsive behavior

### Adding Features
Modify `js/script.js` to add:
- Additional validation
- New cheque fields
- Export functionality
- Data persistence

### Bank Template
To adapt for other banks:
1. Replace `nabil.jpg` with the new bank's cheque image
2. Adjust positioning in `styles/style.css`
3. Update any bank-specific formatting

## 🔒 Security & Best Practices

### Data Privacy
- **No Data Storage**: All data is processed locally in the browser
- **No Server Communication**: No data is sent to external servers
- **Client-side Only**: Complete privacy and security

### Input Validation
- **Decimal Limitation**: Maximum 2 decimal places for amounts
- **Date Validation**: Ensures valid date format
- **XSS Prevention**: Proper input sanitization

## 🐛 Troubleshooting

### Common Issues

**Cheque not generating:**
- Check browser console for JavaScript errors
- Ensure all files are in the correct directory structure
- Verify file permissions

**Print layout issues:**
- Use the "Print Cheque" button (not browser print)
- Check printer settings for proper paper size
- Ensure print margins are set to minimum

**Background image not loading:**
- Verify `nabil.jpg` is in the correct directory
- Check file name spelling (case-sensitive)
- Ensure image file is not corrupted

## 📝 License

This project is developed for Nabil Bank cheque printing.

## 🤝 Contributing

To contribute to this project:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Note**: This application is designed specifically for Nabil Bank cheques. For other banks, the positioning and formatting may need adjustment to match their specific cheque layout.
