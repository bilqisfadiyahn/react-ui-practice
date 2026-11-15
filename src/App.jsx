import { useState, useEffect } from 'react';
import './App.css';

const initialStudents = [
  {
    nim: '2305101',
    nama: 'Nabila Khairunnisa',
    noHp: '085712349011',
    email: 'nabilakhairunnisa23@gmail.com',
    alamat: 'Bandung',
    prodi: 'Teknik Informatika',
    tahunMasuk: 2023,
  },
  {
    nim: '2305102',
    nama: 'Rizky Maulana',
    noHp: '081398765412',
    email: 'rizky.maulana02@gmail.com',
    alamat: 'Yogyakarta',
    prodi: 'Sistem Informasi',
    tahunMasuk: 2023,
  },
  {
    nim: '2305103',
    nama: 'Farhan Ramadhan',
    noHp: '082145678913',
    email: 'farhanramadhan.id@gmail.com',
    alamat: 'Semarang',
    prodi: 'Teknik Komputer',
    tahunMasuk: 2023,
  },
  {
    nim: '2305104',
    nama: 'Tari Puspitasari',
    noHp: '085233445514',
    email: 'taripuspita99@gmail.com',
    alamat: 'Surakarta',
    prodi: 'Teknik Informatika',
    tahunMasuk: 2023,
  },
  {
    nim: '2305105',
    nama: 'Bagas Adhi Nugroho',
    noHp: '081988776615',
    email: 'bagasnugroho.dev@gmail.com',
    alamat: 'Tangerang',
    prodi: 'Sistem Informasi',
    tahunMasuk: 2023,
  },
  {
    nim: '2405106',
    nama: 'Alya Rahmawati',
    noHp: '087811223316',
    email: 'alyarahmawati24@gmail.com',
    alamat: 'Bogor',
    prodi: 'Ilmu Komputer',
    tahunMasuk: 2024,
  },
  {
    nim: '2405107',
    nama: 'Dimas Prakoso',
    noHp: '089655443317',
    email: 'dimasprakoso.solo@gmail.com',
    alamat: 'Solo',
    prodi: 'Teknologi Informasi',
    tahunMasuk: 2024,
  },
  {
    nim: '2405108',
    nama: 'Salsabila Azzahra',
    noHp: '081277889918',
    email: 'salsabilaazzahra08@gmail.com',
    alamat: 'Depok',
    prodi: 'Sains Data',
    tahunMasuk: 2024,
  },
  {
    nim: '2405109',
    nama: 'Kevin Wijaya',
    noHp: '081566778819',
    email: 'kevinwijaya.kw@gmail.com',
    alamat: 'Bekasi',
    prodi: 'Teknik Informatika',
    tahunMasuk: 2024,
  },
  {
    nim: '2405110',
    nama: 'Putri Melati',
    noHp: '083899001120',
    email: 'putrimelati.pm@gmail.com',
    alamat: 'Cirebon',
    prodi: 'Sistem Informasi',
    tahunMasuk: 2024,
  },
];

function App() {
  const [students] = useState(initialStudents);
  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Student Management</h1>
        <p className="subheader">Daftar Data Mahasiswa</p>
      </header>

      <div className="info-bar">
        <div className="info-card">
          <span>Total Mahasiswa:</span>
          <strong>{students.length} Mahasiswa</strong>
        </div>
        <div className="info-card clock">
          <span>Waktu Saat Ini:</span>
          <strong>{clock.toLocaleTimeString('id-ID')} WIB</strong>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. Hp</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.nim}>
                <td>{student.nim}</td>
                <td>{student.nama}</td>
                <td>{student.noHp}</td>
                <td>{student.email}</td>
                <td>{student.alamat}</td>
                <td>{student.prodi}</td>
                <td>{student.tahunMasuk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;