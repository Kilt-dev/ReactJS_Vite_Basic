import React from 'react';

export default function InforStudent({ student }) {
  return (
    <div>
      <h2>Thông tin sinh viên</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Thành phần</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Thông tin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>First Name</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{student.name  }</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Last Name</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{student.lastName  }</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Email</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{student.email }</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Contact</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{student.contact }</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Gender</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{student.gender }</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Best Subject</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{student.bestSubjects}</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>URL</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{student.url }</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>About</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{student.about }</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
