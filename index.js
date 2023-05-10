import './style.css';

const privacyPolicy = `<h1>Privacy Policy</h1>

<p>This privacy policy explains how we collect, use, and protect your personal information when you use our application.</p>

<h2>Information We Collect</h2>

<p>When you use our application, we may collect the following types of information:</p>

<ul>
  <li><strong>Personal Information:</strong> We may collect personal information, such as your name and email address, if you provide it to us when using our application.</li>
  <li><strong>Usage Information:</strong> We may collect information about how you use our application, such as the pages you visit and the actions you take.</li>
  <li><strong>Device Information:</strong> We may collect information about the device you are using to access our application, such as the type of device, operating system, and browser.</li>
</ul>

<h2>How We Use Your Information</h2>

<p>We may use your information for the following purposes:</p>

<ul>
  <li>To provide and improve our application;</li>
  <li>To communicate with you, such as to respond to your inquiries and provide customer support;</li>
  <li>To personalize your experience using our application;</li>
  <li>To analyze how you use our application and improve our services;</li>
  <li>To prevent fraud and protect our legal rights.</li>
</ul>

<h2>How We Protect Your Information</h2>

<p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

<h2>Third-Party Services</h2>

<p>Our application may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these third-party websites or services. We recommend that you review the privacy policies of these third-party websites or services before providing any personal information.</p>

<h2>Children's Privacy</h2>

<p>Our application is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and you believe that your child has provided us with personal information, please contact us so that we can delete the information.</p>

<h2>Changes to this Privacy Policy</h2>

<p>We reserve the right to update or modify this privacy policy at any time, without prior notice to you. Your continued use of our application after any such changes constitutes your acceptance of the revised privacy policy.</p>

<h2>Contact Us</h2>

<p>If you have any questions or concerns about this privacy policy or our privacy practices, please contact us at [contact information].</p>`;

const appDiv = document.getElementById('app');
appDiv.innerHTML = privacyPolicy;
