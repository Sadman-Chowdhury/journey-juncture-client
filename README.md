# React + Vite

Website name: Journey juncture

Live site URl:

Category: Europe

- Responsive Design: Ensures optimal viewing experience across various devices including mobile, tablet, and desktop.
- Private Route Handling: Users won't be redirected to the login page after reloading a private route.
- Security: Utilizes environment variables to conceal Firebase config keys and MongoDB credentials.
- Creative Design: Unique and creative design elements to differentiate from past projects or existing websites.
- Navbar: Includes navigation links such as Home, All Tourists Spot, Add Tourists Spot (private route), My List (private route), Login, Register, and user profile when logged in.
- Authentication: Allows users to login using email/password, Google, or Github. Registration also supported.
- Password Verification: Ensures password strength by enforcing requirements for uppercase, lowercase, and minimum length characters.
- Homepage Sections: Features a navbar, banner/slider, tourist spots section, countries section, 2 extra sections, and a footer.
- Banner: Incorporates a slider with 6 slides containing meaningful information.
- Tourist Spots Section: Displays 6 cards of tourist spots with "View Details" buttons leading to detailed pages.
- Extra Sections: Includes 2 additional “User review” and “user support and assistance” sections to enhance user experience.
- Add Tourists Spot Page: Provides a form for users to add tourist spots including image, name, location, description, cost, seasonality, travel time, and user details.
- All Tourists Spot Page: Shows all tourist spots added by users with sorting functionality based on average cost.
- View Details Page: Displays detailed information about a specific tourist spot.
- My List Page: Allows logged-in users to view and manage their added tourist spots in a tabular format.
- Update Page: Enables users to update tourist spot information either through a separate page or modal.
- Delete Feature: Users can delete tourist spots with a confirmation prompt.
- Footer: Presents a meaningful footer with website name, copyright, contact information, and social media links.
- 404 Page: Includes a custom 404 page for handling not found errors.
- Loading Spinner: Displays a loading spinner during data loading states to improve user experience.
- Country Selection: Offers a selection of 6 countries with information displayed on short description and image.
- Country Details Page: Allows users to view all tourist spots of a specific country with "View Details" buttons for each spot.
- Dark/Light Theme Toggle: Implements a toggle for switching between dark and light themes on the homepage.

Implemented two additional pakages. React-tooltip and React-simple-typewriter

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
