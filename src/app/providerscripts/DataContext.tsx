"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

// Define the shape of the data based on your User model
interface User {
  id: number;
  fullname: string;
  phone: string;
  aboutagent: string;
}

interface DataContextProps {
  users: User[];
}

// Create context
export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

// Provider Component
export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get("/api/agent_contact");
        setUsers(response.data);
        console.log(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <DataContext.Provider value={{ users }}>{children}</DataContext.Provider>
  );
};
