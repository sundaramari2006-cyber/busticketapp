// TicketDownload.js
import jsPDF from 'jspdf';

const TicketDownload = (passengerDetails, bus) => {
  passengerDetails.forEach((p) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Bus Ticket", 90, 20);
    doc.setFontSize(12);
    doc.text(`Name: ${p.name}`, 20, 40);
    doc.text(`Age: ${p.age}`, 20, 50);
    doc.text(`Sex: ${p.sex}`, 20, 60);
    doc.text(`Prize: 450`, 20, 70);
    doc.text(`Seat: ${p.seat}`, 20, 80);
    doc.text(`From: ${bus.from}`, 20, 90);
    doc.text(`To: ${bus.to}`, 20, 100);
    doc.text(`Date: ${bus.date}`, 20, 110);
    doc.text(`Time: ${bus.time}`, 20, 120);
    doc.text(`Bus: ${bus.name}`, 20, 130);
    doc.save(`Ticket_${p.name}_${p.seat}.pdf`);
  });
};

export default TicketDownload;
