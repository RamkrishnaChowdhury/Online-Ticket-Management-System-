let tickets = [];
let ticketId = 0;

document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('ticket-title').value;
    const description = document.getElementById('ticket-description').value;

    const ticket = {
        id: ticketId++,
        title: title,
        description: description,
        status: 'pending'
    };

    tickets.push(ticket);
    document.getElementById('ticket-form').reset();
    renderUserTickets();
    renderAdminTickets();
});

function renderUserTickets() {
    const ticketList = document.getElementById('ticket-list');
    ticketList.innerHTML = '';
    tickets.forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `${ticket.title} - ${ticket.status}`;
        ticketList.appendChild(li);
    });
}

function renderAdminTickets() {
    const adminTicketList = document.getElementById('admin-ticket-list');
    adminTicketList.innerHTML = '';
    tickets.forEach(ticket => {
        const li = document.createElement('li');
        li.textContent = `${ticket.title} - ${ticket.status}`;
        
        const statusSelect = document.createElement('select');
        const statuses = ['pending', 'ongoing', 'resolved'];
        statuses.forEach(status => {
            const option = document.createElement('option');
            option.value = status;
            option.textContent = status.charAt(0).toUpperCase() + status.slice(1);
            if (ticket.status === status) {
                option.selected = true;
            }
            statusSelect.appendChild(option);
        });

        statusSelect.addEventListener('change', function() {
            ticket.status =

