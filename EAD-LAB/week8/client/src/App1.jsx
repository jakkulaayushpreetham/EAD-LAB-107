import React, { useState } from "react";

const studentsData = [
  { id: 101, name: "Aarav", age: 20 },
  { id: 102, name: "Diya", age: 19 },
  { id: 103, name: "Kiran", age: 21 },
  { id: 104, name: "Meena", age: 22 },
  { id: 105, name: "Rohit", age: 20 },
  { id: 106, name: "Neha", age: 23 },
  { id: 107, name: "Vikram", age: 21 },
  { id: 108, name: "Sneha", age: 19 },
  { id: 109, name: "Arjun", age: 22 },
  { id: 110, name: "Kavya", age: 20 },
];

const App1 = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const perPage = 5;

  const filtered = studentsData.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / perPage);
  const current = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <h2>Student Table</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {current.length ? (
            current.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No results found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: 10 }}>
        <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>
          Prev
        </button>

        <span style={{ margin: "0 10px" }}>
          {page} / {totalPages || 1}
        </span>

        <button
          onClick={() => setPage(p => p + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App1;