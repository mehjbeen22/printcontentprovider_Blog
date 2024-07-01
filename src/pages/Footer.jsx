import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 p-4 text-center">
      <div>
        {' '}
        <Link to="/privacypolicy">Privacy Policy</Link> | Recalls | Product
        Recycling | Accessibility
        <br />
        Terms of Use | Use of Cookies
      </div>
      <p className="mt-4">
        Copyright © 2024 printcontentprovider. All Rights Reserved.
      </p>
    </footer>
  );
}
