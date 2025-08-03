# Nabil Cheque Printer

A web-based application for generating and printing Nabil Bank cheques with proper formatting and Nepali number-to-words conversion.

## Features

- Generate cheques with payee name, amount, and date
- Automatic conversion of numbers to Nepali words (Lakh/Crore system)
- AC Payee checkbox option
- Print functionality with proper formatting
- Responsive design

## File Structure

```
cheque/
├── nabil.html          # Main HTML file
├── styles/
│   └── style.css      # External CSS styles
├── js/
│   └── script.js       # External JavaScript functionality
├── nabil.jpg          # Cheque background image
└── README.md          # This file
```

## Code Organization

### HTML (nabil.html)
- Clean, semantic HTML structure
- External CSS and JavaScript references
- Form elements for user input
- Cheque preview area

### CSS (styles/style.css)
- All styling separated into external file
- Responsive design
- Print-specific styles
- Cheque layout positioning

### JavaScript (js/script.js)
- Object-oriented approach using ES6 classes
- Modular functionality
- Event handling
- Number-to-words conversion
- Print functionality


## Usage

1. Fill in the payee name
2. Enter the amount (supports decimals up to 2 places)
3. Select the date (defaults to today)
4. Check "AC Payee" if needed
5. Click "Generate Cheque" to preview
6. Click "Print Cheque" to print


## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- The application uses Nepali number system (Lakh/Crore)
- Print functionality opens a new window for printing
- Background image path is relative to the CSS file location
