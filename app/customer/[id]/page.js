'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CustomerDetailPage({ params }) {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    async function fetchCustomer() {
      const data = await fetch(`${API_BASE}/customer/${params.id}`, { cache: "no-store" });
      const customerData = await data.json();
      setCustomer(customerData);
    }
    fetchCustomer();
  }, [API_BASE, params.id]);

  if (!customer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold mb-4">Customer Details</h1>
      <p className="font-bold text-xl text-blue-800">{customer.name}</p>
      <p>Date of Birth: {new Date(customer.dateOfBirth).toLocaleDateString()}</p>
      <p>Member Number: {customer.memberNumber}</p>
      <p>Interests: {customer.interests.join(', ')}</p>
      
      <button 
        onClick={() => router.push('/customer')}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Back to Customers
      </button>
    </div>
  );
}