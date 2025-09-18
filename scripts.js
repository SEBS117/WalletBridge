// JavaScript for handling button actions
function showMessage(message) {
    const messageArea = document.getElementById('message-area');
    messageArea.textContent = message;
}

// QR Code generation functionality
const generateQRButton = document.getElementById('generate-qr');
if (generateQRButton) {
    generateQRButton.addEventListener('click', function () {
        const qrContainer = document.getElementById('qr-container');
        qrContainer.innerHTML = ''; // Clear previous QR code

        const qrCode = new QRCode(qrContainer, {
            text: "https://github.com/SEBS117/WalletBridge", // Replace with dynamic data if needed
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
    });
}

// Function to generate QR code for receiving
function generateReceiveQR() {
    const paymentPointer = document.getElementById('payment-pointer').value;
    const amount = document.getElementById('amount').value;

    if (!paymentPointer || !amount) {
        alert('Por favor, completa ambos campos: Payment Pointer y Monto.');
        return;
    }

    const qrContainer = document.getElementById('receive-qr-container');
    qrContainer.innerHTML = ''; // Clear previous QR code

    const qrCode = new QRCode(qrContainer, {
        text: `${paymentPointer}?amount=${amount}`,
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Function to send payment using Open Payments API
async function sendPayment() {
    const destinationPointer = document.getElementById('destination-pointer').value;
    const amount = document.getElementById('send-amount').value;
    const messageArea = document.getElementById('send-message-area');

    if (!destinationPointer || !amount) {
        messageArea.textContent = 'Por favor, completa ambos campos: Payment Pointer y Monto.';
        return;
    }

    const url = `${destinationPointer}?amount=${amount}`;
    const accessToken = CONFIG.ACCESS_TOKEN; // Use access token from config

    const requestData = {
        paymentPointer: destinationPointer,
        amount: parseFloat(amount),
    };

    try {
        const response = await fetch('https://api.openpayments.dev/outgoing-payments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify(requestData),
        });

        if (response.ok) {
            const responseData = await response.json();
            messageArea.textContent = `Pago realizado con éxito. ID de transacción: ${responseData.id}`;
        } else {
            const errorData = await response.json();
            messageArea.textContent = `Error al realizar el pago: ${errorData.message}`;
        }
    } catch (error) {
        messageArea.textContent = `Error de red: ${error.message}`;
    }
}

// Function to consult payment details using Open Payments API
async function consultPayment() {
    const paymentId = document.getElementById('payment-id').value;
    const messageArea = document.getElementById('payment-details');

    if (!paymentId) {
        messageArea.textContent = 'Por favor, ingresa un ID de pago.';
        return;
    }

    try {
        const paymentData = await getPaymentById(paymentId);
        messageArea.textContent = `Pago consultado: ${JSON.stringify(paymentData)}`;
    } catch (error) {
        messageArea.textContent = `Error: ${error.message}`;
    }
}

// Function to get payment details by ID
async function getPaymentById(paymentId) {
    const url = `https://api.openpayments.dev/outgoing-payments/${paymentId}`;
    const accessToken = CONFIG.ACCESS_TOKEN; // Use access token from config

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if (response.ok) {
            return await response.json(); // Return payment data
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message);
        }
    } catch (error) {
        throw new Error(`Error al consultar el pago: ${error.message}`);
    }
}

// Configuration object for API access
const CONFIG = {
    ACCESS_TOKEN: 'YOUR_TEST_ACCESS_TOKEN' // Replace with your test token for API access
};

