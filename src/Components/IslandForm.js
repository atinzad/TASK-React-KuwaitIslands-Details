import { useState } from "react";

export default function IslandForm({ island, updateCounters }) {
  const [phone, setPhone] = useState("");
  const [customerName, setCustomerName] = useState("");

  function message() {
    const confirm = window.confirm(
      `Are you sure you want to book to ${island.name} with the Name: ${customerName}, phone: ${phone}, ${island.id}`
    );

    if (confirm) {
      updateCounters(island.id);
    }
  }

  const changeCustomerName = (event) => {
    setCustomerName(event.target.value);
  };
  const changePhone = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" onChange={changeCustomerName} />
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        placeholder="Type Phone Number"
        onChange={changePhone}
      />
      <button className="book" onClick={message}>
        Book for today!
      </button>
    </div>
  );
}
