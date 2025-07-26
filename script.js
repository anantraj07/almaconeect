const alumniData = [
  { name: "Nagraj Gurumurthy", batch: "1995", qualification: "Madras University and CIT, Coimbatore", profession: "", linkedin: "", email: "nagraj.gurumurthy@gmail.com" },
  { name: "Sumit Banerjee", batch: "2001", qualification: "DEE, BBA", profession: "", linkedin: "https://www.linkedin.com/in/sumit-banerjee-1ba2b614", email: "sumit.bannerjee@gmail.com" },
  { name: "Ritwik Bhattacharya", batch: "2001", qualification: "Msc. Microbial food technology", profession: "", linkedin: "", email: "ritwik.bhattacharya9@gmail.com" },
  { name: "Arindam Banerjee", batch: "2001", qualification: "BE, MBA", profession: "", linkedin: "", email: "arindamban@gmail.com" },
  { name: "Saswati Roy", batch: "2001", qualification: "MBBS, MS", profession: "", linkedin: "", email: "saswatiroy1984@gmail.com" },
  { name: "Sourav Sinha", batch: "2001", qualification: "BE (Civil), MBA (IIM C)", profession: "", linkedin: "", email: "sinha_sourav@outlook.com" },
  { name: "Pritam Ghosh", batch: "2001", qualification: "PhD", profession: "", linkedin: "https://www.linkedin.com/in/pritamghosh81", email: "pritam.r.g@gmail.com" },
  { name: "Arnab Sen", batch: "2001", qualification: "PhD", profession: "", linkedin: "", email: "arnabsen.physics@gmail.com" },
  { name: "Soumyadeep Roy", batch: "2001", qualification: "BTech, MBA", profession: "", linkedin: "", email: "roy.soumyadeep@gmail.com" },
  { name: "Sabyasachi Naskar", batch: "2001", qualification: "MBBS, MS (Ortho)", profession: "", linkedin: "", email: "sabyasachinaskar2009@gmail.com" },
  { name: "Subhadeep Sen", batch: "2001", qualification: "MBA, CFA", profession: "", linkedin: "", email: "subhadeepsen@ymail.com" },
  { name: "Debayan Mitra", batch: "2001", qualification: "MBA", profession: "", linkedin: "", email: "debayanm12@gmail.com" },
  { name: "Arnab Mandal", batch: "2001", qualification: "PhD (IIT Bombay)", profession: "", linkedin: "", email: "arnabmandal2002@gmail.com" },
  { name: "Sangeeta Das", batch: "2001", qualification: "MSc, BEd", profession: "", linkedin: "", email: "sangeetadas.k@gmail.com" },
  { name: "Tanmoy Ghosh", batch: "2001", qualification: "MBBS, MS (ENT)", profession: "", linkedin: "", email: "ghoshtanmoy81@gmail.com" },
  { name: "Saumitra Saha", batch: "2001", qualification: "MCA", profession: "", linkedin: "", email: "saumitrasaha@yahoo.com" },
  { name: "Debabrata Sinha", batch: "2001", qualification: "MS (Computer Science)", profession: "", linkedin: "", email: "debabratasinha76@gmail.com" },
  { name: "Sandip Bhattacharya", batch: "2001", qualification: "MBA", profession: "", linkedin: "", email: "sandipbhattacharya87@gmail.com" },
  { name: "Sandip Ghosh", batch: "2001", qualification: "MS", profession: "", linkedin: "", email: "sandip.ghosh14@gmail.com" },
  { name: "Sourav Kumar Das", batch: "2001", qualification: "MSc", profession: "", linkedin: "", email: "souravdas.sk@gmail.com" },
  { name: "Moutushi Das", batch: "2001", qualification: "BSc, BEd", profession: "", linkedin: "", email: "moutushi.sarkar@gmail.com" },
  { name: "Debasree Saha", batch: "2001", qualification: "MA, BEd", profession: "", linkedin: "", email: "sahadebasree15@gmail.com" },
  { name: "Parijat Ghosh", batch: "2001", qualification: "MSc", profession: "", linkedin: "", email: "parijat.rghosh@gmail.com" },
  { name: "Anirban Roy", batch: "2001", qualification: "PhD", profession: "", linkedin: "", email: "anirbanroy@iitkgp.ac.in" }
];
// Function to display alumni results
function displayAlumniResults(results) {
  const resultsContainer = document.getElementById('alumniResults');
  resultsContainer.innerHTML = results.map(alumni => `
    <div class="alumni-card">
      <h4>${alumni.name}</h4>
      <p>Batch of ${alumni.batch}</p>
      <p>${alumni.qualification}</p>
      <p>${alumni.profession || "Profession not provided"}</p>
      ${alumni.linkedin ? `<p><a href="${alumni.linkedin}" target="_blank">🔗 LinkedIn</a></p>` : ""}
      <button onclick="window.location='mailto:${alumni.email}?subject=Alumni Connect&body=Hi ${alumni.name}, I’d love to connect!'">Connect</button>
    </div>
  `).join('');
}

// Event listeners for filters
document.getElementById('yearFilter').addEventListener('change', filterAlumni);
document.getElementById('professionFilter').addEventListener('change', filterAlumni);
document.getElementById('alumniSearch').addEventListener('input', filterAlumni);

// Function to filter alumni based on selected criteria
function filterAlumni() {
  const year = document.getElementById('yearFilter').value;
  const profession = document.getElementById('professionFilter').value.toLowerCase();
  const searchQuery = document.getElementById('alumniSearch').value.toLowerCase();

  const filtered = alumniData.filter(alumni => {
    const matchesYear = year ? alumni.batch === year : true;
    const matchesProfession = profession ? alumni.profession.toLowerCase().includes(profession) : true;
    const matchesSearch = alumni.name.toLowerCase().includes(searchQuery);
    return matchesYear && matchesProfession && matchesSearch;
  });

  displayAlumniResults(filtered);
}

// Initial display of all alumni
displayAlumniResults(alumniData);
