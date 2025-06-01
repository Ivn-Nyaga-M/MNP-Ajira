  // Preloader Functionality
$(window).on("load", function () {
    $(".preloader").delay(1500).animate(
        { opacity: "0" },
        1500,
        function () {
            $(this).css("display", "none");
            $("#content").fadeIn(); // Show the main content
        }
    );
});

$(document).ready(function () {
    let percentage = 0;
    let duration = 3000;
    let intervalTime = duration / 100;
    
    let interval = setInterval(() => {
        percentage++;
        $("#loading-percentage").text(percentage + "%");

        if (percentage >= 100) {
            clearInterval(interval);
            $(".preloader").delay(500).animate(
                { opacity: "0" },
                1500,
                function () {
                    $(this).css("display", "none");
                    $("#content").fadeIn();
                }
            );
        }
    }, 35); // Adjust speed as needed
});


  // Toggle Search Overlay
  function toggleSearch() {
    const overlay = document.getElementById('searchOverlay');
    overlay.style.display = (overlay.style.display === 'flex') ? 'none' : 'flex';
  }

  // Handle Enter Key
  function handleEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      performSearch();
    }
  }

  // Perform Search and Display Results
  function performSearch() {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultsContainer = document.getElementById('resultsList');
    const resultsBox = document.getElementById('searchResults');

    if (!resultsContainer || !resultsBox) {
      console.error("Missing #resultsList or #searchResults in HTML.");
      return;
    }

    resultsContainer.innerHTML = ''; // Clear previous results

    if (!query) {
      resultsContainer.innerHTML = '<li>Please enter a search term.</li>';
    } else {
      const pages = [
        { name: 'About Us', url: 'about.html' },
        { name: 'Contact', url: 'contact.html' },
        { name: 'Our Services', url: 'our-services.html' },
        { name: 'Training - Data Entry', url: 'data-entry.html' },
        { name: 'Mentors', url: 'mentor.html' }
      ];

      const filtered = pages.filter(page =>
        page.name.toLowerCase().includes(query)
      );

      if (filtered.length > 0) {
        filtered.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `<a href="${item.url}">${item.name}</a>`;
          resultsContainer.appendChild(li);
        });
      } else {
        resultsContainer.innerHTML = '<li>No matching pages found.</li>';
      }
    }

    // Show the results box
    resultsBox.classList.remove('d-none');
  }

  // Close Results
  function closeSearchResults() {
    const resultsBox = document.getElementById('searchResults');
    if (resultsBox) resultsBox.classList.add('d-none');
  }
