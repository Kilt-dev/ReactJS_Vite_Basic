import { useState } from 'react';
import './App.css';
import FromStudent from '../components/FromStudent';
import InforStudent from '../components/inforStudent';

function App() {
  const [student, setStudent] = useState({});

  // Hàm để xử lý dữ liệu từ biểu mẫu
  const handleSubmit = (data) => {
    setStudent(data);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
    <div style={{ flex: 1, marginRight: '20px' }}>
      <FromStudent onSubmit={handleSubmit} />
    </div>
      
    <div style={{ flex: 1 }}>
      {student && <InforStudent student={student} />} {/* Hiển thị thông tin sinh viên bên cạnh*/}
    </div>
  </div>
);
}
export default App;
