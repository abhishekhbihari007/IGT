# External Site Integration Guide

## Back to IGT Homepage Functionality

To enable users to return to the IGT homepage from external sites, implement the following:

### 1. URL Parameters
The IGT website passes a `return` parameter with the homepage URL:
- **ProLearn**: `https://prolearn.org.in/?return=https://your-igt-domain.com`
- **AR & VR Technology**: `https://igt-red.vercel.app/?return=https://your-igt-domain.com`

### 2. JavaScript Implementation
Add this code to your external site to detect the return URL and provide a back button:

```javascript
// Get the return URL from query parameters
function getReturnUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('return');
}

// Create a back button
function createBackButton() {
    const returnUrl = getReturnUrl();
    if (returnUrl) {
        const backButton = document.createElement('button');
        backButton.textContent = '← Back to IGT Homepage';
        backButton.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #d32f2f;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            z-index: 1000;
            font-family: Arial, sans-serif;
        `;
        
        backButton.onclick = () => {
            window.location.href = returnUrl;
        };
        
        document.body.appendChild(backButton);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', createBackButton);
```

### 3. Alternative: Simple Link
If you prefer a simple link instead of a button:

```html
<a href="javascript:history.back()" style="position: fixed; top: 20px; right: 20px; background: #d32f2f; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
    ← Back to IGT
</a>
```

### 4. CSS Styling
You can customize the back button appearance:

```css
.igt-back-button {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #d32f2f;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    z-index: 1000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-weight: 500;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
}

.igt-back-button:hover {
    background: #b71c1c;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
```

### 5. Implementation Notes
- The return URL is automatically passed by the IGT website
- Users can click the back button to return to the IGT homepage
- The button appears in the top-right corner of the external site
- The functionality works across all browsers and devices

This integration ensures a seamless user experience between the IGT website and external program sites.
