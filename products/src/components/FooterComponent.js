import React from "react";
import Table from "react-bootstrap/Table";


const FooterComponent = () => {
    return (
      <Table>
        <thead className="table-head-allignment">
          <tr>
            <th>Customer Care</th>
            <th>My Account</th>
            <th>Discover</th>
            <th>Find Us</th>
            <th>Populer Searches</th>
          </tr>
        </thead>
        <tbody className="table-body-allignment">
          <tr>
            <td>Help & FAQSs</td>
            <td>Shipping</td>
            <td>Strore Locator</td>
            <td>Contact Us</td>
            <td>Careers</td>
          </tr>
          <tr>
            <td>Strore Locator</td>
            <td>Contact Us</td>
            <td>Careers</td>
            <td>Our Story</td>
          </tr>
          <tr>
            <td>Contact Us</td>
          </tr>
          <tr>
            <td>Careers</td>
          </tr>
        </tbody>
      </Table>
    );
  };

  export default FooterComponent;
  