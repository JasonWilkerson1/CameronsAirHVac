# CameronsAirHVac

Welcome to the CameronsAirHVac project! This is a static website built using the Arsha Bootstrap template, customized for Bowdens Heating & Air, a HVAC service business run by a brother duo with over five years of experience. The site targets local SEO for areas like Olive Branch, MS, and St. Louis, offering AC repair, installation, and maintenance services. It includes a booking feature integrated with Google Calendar for appointment scheduling.

## Project Overview

- **Purpose**: Showcase HVAC services, attract local customers, and enable online appointment booking.
- **Target Audience**: Homeowners and businesses in Olive Branch, MS, and surrounding areas.
- **Technologies**: HTML5, CSS3, Bootstrap 5.3.3, JavaScript.
- **Features**:
  - Responsive design for mobile and desktop.
  - SEO-optimized meta tags and content (e.g., "HVAC Olive Branch MS").
  - Google Calendar widget for scheduling appointments.
  - Contact information (phone: 901-315-7735, email: bowdenshvac@gmail.com).

## Getting Started

### Prerequisites
- A code editor (e.g., Visual Studio Code).
- A web browser (e.g., Chrome, Firefox) for testing.
- Optional: Node.js or Python for local server setup.

### Installation
1. **Download the Project**:
   - Clone or download the repository: `git clone <repository-url>` (if hosted on GitHub) or download the ZIP from the source.
   - Extract the files to a local directory (e.g., `CameronsAirHVac`).

2. **Run Locally**:
   - **Using VS Code with Live Server**:
     - Install VS Code and the Live Server extension.
     - Open the project folder in VS Code.
     - Right-click `index.html` and select "Open with Live Server" to view at `http://127.0.0.1:5500`.
   - **Using Python**:
     - Navigate to the project folder in a terminal: `cd CameronsAirHVac`.
     - Run `python -m http.server 8000` (Python 3).
     - Open `http://localhost:8000` in your browser.

3. **Verify**:
   - Ensure all assets (CSS, JS, images) load correctly.
   - Test responsiveness by resizing the browser.

## Customization
- **Edit Content**:
  - Update `index.html` with your services, testimonials, and contact details.
  - Replace placeholder images in `assets/img/` with your HVAC photos (compress to <100KB for performance).
- **SEO Optimization**:
  - Modify `<meta name="description">` and `<meta name="keywords">` in `<head>` with local keywords (e.g., "AC repair Olive Branch MS").
  - Add alt text to images (e.g., `alt="HVAC technician in Olive Branch, MS"`).
- **Booking Widget**:
  - Integrate a Google Calendar iframe or a service like SimplyBook.me (free tier) for appointment scheduling. Add the embed code in a new `<section>` (e.g., `#booking`).

## Deployment
- **Platform**: Deploy to Netlify (recommended for free tier with SEO support).
- **Steps**:
  1. Sign up at [netlify.com](https://www.netlify.com/).
  2. Drag the `CameronsAirHVac` folder into the Netlify dashboard.
  3. Get a default URL (e.g., `cameronsairhvac.netlify.app`) or connect a custom domain (e.g., `camandac.com`) via DNS.
  4. Enable HTTPS in Netlify settings for SEO.
- **Performance**: Use Lighthouse to monitor Load Time (target <4s) and Total Blocking Time (target <600ms).

## Usage
- **Navigation**: Use the header menu ("Home," "About," "Services") to explore pages.
- **Booking**: Click "Schedule An Appointment" or visit the booking section to set an appointment, syncing with Google Calendar.
- **Contact**: Call 901-315-7735 or email bowdenshvac@gmail.com for inquiries.

## Contributing
This is a personal project, but contributions are welcome. Please fork the repository and submit pull requests for enhancements (e.g., additional SEO tweaks, new features).

## License
- Based on the Arsha template by BootstrapMade, licensed under [Creative Commons Attribution 3.0](https://bootstrapmade.com/license/).

## Roadmap
- Add more service pages (e.g., "AC Repair," "Maintenance").
- Enhance SEO with a sitemap and Google Search Console submission.
- Upgrade to a paid hosting plan for PHP forms as revenue grows toward $100K.

## Contact
- **Phone**: 901-315-7735
- **Email**: bowdenshvac@gmail.com
- **Website**: [Deployed URL to be added post-deployment]

Happy building! Let’s get those HVAC appointments rolling!