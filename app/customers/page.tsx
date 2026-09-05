"use client";

import { ChangeEvent, useMemo, useState } from "react";
import realCustomers from "./customers.json";

const CustomerPage = () => {
  const [search, setSearch] = useState("");

  const customers = useMemo(() => {
    const customers = realCustomers.filter((customer) => {
      const nameLowerCase = customer.name.toLowerCase();
      return nameLowerCase.includes(search.toLowerCase());
    });
    return customers;
  }, [search]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  return (
    <div>
      <input
        name={"search"}
        className="border"
        placeholder="input search"
        onChange={handleSearch}
        value={search}
      />
      <div className={"flex gap-4 flex-wrap"}>
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white shadow p-4">
            <p>{customer.name}</p>
            <p>age: {customer.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerPage;
