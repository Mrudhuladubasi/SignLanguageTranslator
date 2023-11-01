// Get access to the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        const video = document.getElementById('camera');
        video.srcObject = stream;
    })
    .catch(function (error) {
        console.error('Error accessing the camera:', error);
    });
