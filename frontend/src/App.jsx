import { useEffect, useState } from "react";

function App() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost/pharmacy-management/backend/api/categories/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        return response.json();
      })
      .then((result) => {
        if (result.success) {
          setCategories(result.data);
        } else {
          setError(result.message || "Something went wrong");
        }
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Pharmacy Management System</h1>

      <h2>Categories</h2>

      {loading && <p>Loading categories...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <strong>{category.name}</strong>

              {category.description && <span> — {category.description}</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
