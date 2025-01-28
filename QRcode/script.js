document.getElementById('qrForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    var website = document.getElementById('website').value;

    if (website) {
        // Generate the QR code
        QRCode.toCanvas(document.getElementById('qrcode'), website, function(error) {
            if (error) {
                console.error(error);
                alert("There was an error generating the QR code.");
            }
        });
    } else {
        alert("Please enter a URL.");
    }
});
