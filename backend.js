<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="/VW/adminRedirect.js" defer></script>
        <link rel = "stylesheet" href = "/VW/styles.css">
        <title>Sample Event Creation</title>
        <script src="/VW/userpopout.js" defer></script>
        <script src="/VW/login.js" defer></script>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        handleLoginState();
    });
    </script>
    </head>
<body>
   <header class="header">
    const rectangleId = event.target.getAttribute('data-rectangle-id');
    const rectangle = document.querySelector(`.user-rectangle[data-rectangle-id='${rectangleId}']`);
        <div class="logo"><a href = "/VW/admin.html"><img src="/VW/images/image3.png" alt=""></div></a>  
        <a href="manage-events"><h1 class="title">Manage Events</h1> </a>
        <a href="event-creation.html"><h1 class="title">Create Event</h1></a>

         <div class="right-items"> 
             <a href="userinfo.html" class="title hidden" id="update"><h1 class="title"></h1></a>
            <h1 class="title hidden" id="signout" onclick="signOut()">Sign Out</h1>
        </div>

        <div class="circle" id="userButton" onclick="checkbutton()">
            <div class="login-icon">
                <img src="/VW/images/user.png" alt="Login">
            </div>
        </div>
    </header>
<div class = "apply-page">
    <h1><br><br></h1>

        <div id="output-container">
            <!-- Content will be printed here -->
        </div>
    <script>
            window.onload=fetchData(); 
            async function fetchData() {
  try {
    const response = await fetch('https://vast-wave-12355-e83778ef23ea.herokuapp.com/events-data');
    
    // Check if the response is not successful (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    
    // Check if the response is JSON
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      displayData(data);
    } else {
      throw new Error('Unexpected response format: Not JSON');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
    
function displayData(data) {
        const outputContainer = document.getElementById('output-container');
        if (data.length === 0) {
            outputContainer.innerHTML = '<p>No data available.</p>';
        } else {
            let htmlContent = '';
            data.forEach(item => {
                // Wrap each event rectangle in an anchor tag with the appropriate href
                htmlContent += 
                    `<a href="javascript:void(0);" class="event-link"  onclick="showEventDetails('${item.eventId}')">
                        <div class="event-rectangle">
                            <div class="text-wrap">
                                <p class="text"> <b> Event: </b>${item.eventName}</p>
                                <p class="text"> <strong>Description: </strong>${item.description}</p>
                                <p class="text"> <strong>Dates: </strong>${item.startDate} - ${item.endDate}</p>
                                <p class="text"> <strong>Time: </strong>${item.time}</p>
                                <p class="text"> <strong>Location: </strong>${item.location}</p>
                            </div>  
                        </div>
                    </a>`;
            });

            outputContainer.innerHTML = htmlContent;
        }
    }

    async function showEventDetails(eventId) {
    try {
        const response = await fetch(`https://vast-wave-12355-e83778ef23ea.herokuapp.com/application-data?eventId=${eventId}`);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const applications = await response.json(); 
        console.log('Applications found:', applications);
        displayApplicants(applications, eventId);
    } catch (error) {
        console.error('Error:', error);
    }
}

async function displayApplicants(applications, eventId) {

    
    const outputContainer = document.getElementById('output-container');
    const fetchEventData = async (eventId) => {
            
            
            try {
                const response = await fetch(`https://vast-wave-12355-e83778ef23ea.herokuapp.com/event-data?eventId=${eventId}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const eventinfo = await response.json();
                console.log('userinfo found:', userinfo);
                return userinfo;
            } catch (error) {
                console.error('Error fetching user data:', error);
                return null; // Handle the error as needed
            }
        };
    
    if (Array.isArray(applications)) {
        let htmlContent = '';

        // Define a separate async function for fetching user data
        const fetchUserData = async (userId) => {
            
            
            try {
                const response = await fetch(`https://vast-wave-12355-e83778ef23ea.herokuapp.com/user-data?userId=${userId}`);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }

                const userinfo = await response.json();
                console.log('userinfo found:', userinfo);
                return userinfo;
            } catch (error) {
                console.error('Error fetching user data:', error);
                return null; // Handle the error as needed
            }
        };

        // Use Promise.all to wait for all fetchUserData promises to resolve
        const userPromises = applications
            .filter(app => app.userId)
            .map(app => fetchUserData(app.userId));

        const userDataArray = await Promise.all(userPromises);

        // Generate HTML content after all user data has been fetched
        userDataArray.forEach(userinfo => {
            if (userinfo) {
                var uniqueId = Math.random().toString(16).slice(2)
                htmlContent +=
                    `<div class="user-rectangle" id="rectangle-border">
                        <img src="/VW/images/usericon.png" alt="" class="usericon">
                        <p class="text"><b> Name: </b>${userinfo.name}<br><b> Phone: </b>${userinfo.phone}<br><b> Email: </b>${userinfo.email}<br><b> DOB: </b>${userinfo.bday}</p>
                        <p class="text"><b> Street: </b>${userinfo.address}<br><b> City: </b>${userinfo.city}<br><b> Zipcode: </b>${userinfo.zipcode}</p>
                        <p class="text"><b> Emergency Contact: </b>${userinfo.ename}<br><b> Emergency Number: </b>${userinfo.enumber}
                        </div>
                        <div class="accept-box" data-event-id='${eventId}' data-user-id=${userinfo.userId} id="accept" alt="accept" onclick='approved(event)'>Accept</div>
                        <div class="deny-box" data-event-id='${eventId}' data-rectangle-id=${uniqueId} data-user-id=${userinfo.userId} id="deny" alt="deny" onclick='denied(event)'>Deny</div>
                        
                    </div>`;
            }
        });

        // Set the content of outputContainer
        outputContainer.innerHTML = htmlContent;
    }
}
        async function approved(event) {          
                const rectangleId = event.target.getAttribute('data-rectangle-id');
                const rectangle = document.querySelector(`.user-rectangle[data-rectangle-id="${rectangleId}"]`);
                console.log(rectangle)
                const eventId = event.target.getAttribute('data-event-id');
                const userId = event.target.getAttribute('data-user-id');
                try {
        const response = await fetch('https://vast-wave-12355-e83778ef23ea.herokuapp.com/accept', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://jdelemos.github.io'
            },
            body: JSON.stringify({ userId: userId, eventId: eventId })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.text();
        console.log(result);
        // Handle the response here (e.g., show a success message)
    } catch (error) {
        console.error('Error:', error);
        // Handle the error here (e.g., show an error message)
    }
                if (rectangle) {
        rectangle.style.borderColor = '#093813'; // or any color you prefer
                    console.log("is a rectangle")
    }else{
      console.log("is not a rectangle")
    }
                
            }

        async function denied(event) {          
                const eventId = event.target.getAttribute('data-event-id');
                const userId = event.target.getAttribute('data-user-id');
                try {
        const response = await fetch('https://vast-wave-12355-e83778ef23ea.herokuapp.com/deny', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://jdelemos.github.io'
            },
            body: JSON.stringify({ userId: userId, eventId: eventId })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.text();
        console.log(result);
        // Handle the response here (e.g., show a success message)
    } catch (error) {
        console.error('Error:', error);
        // Handle the error here (e.g., show an error message)
    }
            }
            
    </script>        
</div>
<script src="/VW/scalingfactor.js"></script>

</body>
</html>
