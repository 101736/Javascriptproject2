function processForm(event) {
    event.preventDefault(); 


    const tickets = parseInt(document.getElementById("tickets").value);
    const isDiscountChecked = document.getElementById("discount").checked;
    const ticketPrice = isDiscountChecked ? 10 : 15;
    const totalPrice = tickets * ticketPrice;


    document.getElementById("ticket-form-container").style.display = "none";

 
    const orderBox = document.getElementById("order-box");
    orderBox.style.display = "block"; 

    const confirmationMessage = `
        <h2>Bedankt voor uw bestelling!</h2>
        <p>U heeft ${tickets} kaarten gereserveerd.</p>
        <p>Het totaalbedrag voor uw bestelling is €${totalPrice}.</p>
        <p>Hieronder vindt u de kaarten die u heeft gereserveerd:</p>
    `;

    orderBox.innerHTML = confirmationMessage;


    const ticketsContainer = document.createElement('div');
    ticketsContainer.classList.add('tickets-list'); 

    for (let i = 0; i < tickets; i++) {
        const ticketDiv = document.createElement('div');
        ticketDiv.classList.add('ticket');

        const ticketName = document.createElement('p');
        ticketName.innerText = 'Naam: ' + document.getElementById("name").value; 
        ticketDiv.appendChild(ticketName);


        const qrCodeImg = document.createElement('img');
        qrCodeImg.src = "/Projectweek2/images/qrcode.png";  
        qrCodeImg.alt = "QR Code";
        qrCodeImg.classList.add('qr-code');
        ticketDiv.appendChild(qrCodeImg);


        ticketsContainer.appendChild(ticketDiv);
    }

    orderBox.appendChild(ticketsContainer); 
}