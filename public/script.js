document.addEventListener('DOMContentLoaded', function () {
    const inputElement = document.getElementById('Input');
    const generateButton = document.getElementById('Generate');
    const qrCodeCanvas = document.getElementById('qrCode');
    const downloadButton = document.getElementById('download');

    function generateDemoQRCode() {
        const demoValue = "www.instagram.com/Priyannxhuu";
        new QRious({
            element: qrCodeCanvas,
            value: demoValue,
            size: 240,
        });
        inputElement.value = demoValue;
    }

    generateDemoQRCode();

    generateButton.addEventListener('click', function () {
        const inputValue = inputElement.value;

        if (inputValue.trim() !== '') {
            qrCodeCanvas.innerHTML = '';
            new QRious({
                element: qrCodeCanvas,
                value: inputValue,
                size: 240,
            });
        } else {
            alert('Please enter a valid URL or data.');
        }
    });

    downloadButton.addEventListener('click', function () {
        const qrCodeDataURL = qrCodeCanvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = qrCodeDataURL;
        downloadLink.download = 'qrcode.png';
        downloadLink.click();
    });
});
