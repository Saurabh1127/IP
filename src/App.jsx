import { useState } from 'react'
import './App.css'

function App() {
  const [jobQueue, setJobQueue] = useState([]);
  const [copies, setCopies] = useState(1);
  const [color, setColor] = useState("Black & White");
  const [paperSize, setPaperSize] = useState("A4");
  const [side, setSide] = useState("Single-sided");

  const handleUploadClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.click();

    fileInput.addEventListener("change", function (event) {
      const file = event.target.files[0];

      if (file) {
        const jobText = `Copies: ${copies}, ${color}, ${paperSize}, ${side}, File: ${file.name}`;

        const newJob = `#${jobQueue.length + 1} - ${jobText} (Pending)`;

        setJobQueue([...jobQueue, newJob]);

        alert("Job added to queue!");
      } else {
        alert("No file selected!");
      }
    });
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h1>Photocopy Automation</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Automate Your Photocopy Needs</h2>
        <p>
          Upload documents, choose your copy preferences, and let automation handle the rest.
          Fast, reliable, and contactless photocopying.
        </p>
      </section>

      {/* Main Content */}
      <main className="main">
        {/* Upload Form */}
        <div className="form-card">
          <div className="upload-box">
            <button onClick={handleUploadClick}>Upload Document</button>
          </div>

          <label>Number of copies</label>
          <input
            type="number"
            min="1"
            value={copies}
            onChange={(e) => setCopies(e.target.value)}
          />

          <label>Color</label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option>Black & White</option>
            <option>Color</option>
          </select>

          <label>Paper Size</label>
          <select value={paperSize} onChange={(e) => setPaperSize(e.target.value)}>
            <option>A4</option>
            <option>A3</option>
          </select>

          <label>Print Side</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="side"
                value="Single-sided"
                checked={side === "Single-sided"}
                onChange={(e) => setSide(e.target.value)}
              />
              Single-sided
            </label>
            <label>
              <input
                type="radio"
                name="side"
                value="Double-sided"
                checked={side === "Double-sided"}
                onChange={(e) => setSide(e.target.value)}
              />
              Double-sided
            </label>
          </div>
        </div>

        {/* Job Queue */}
        <div className="queue-card">
          <h3>Job Queue</h3>
          <ul id="jobList">
            {jobQueue.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Photocopy Automation. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
