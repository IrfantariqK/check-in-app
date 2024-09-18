"use client";

import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./lib/firebase";
import AddCheckInModal from "./components/AddChekin/AddCheckInModal";
import ProjectDetailsModal from "./app/ProjectDetailsModal";
import CheckInCard from "./components/AddChekin/CheckInCard";
import BannerText from "./components/AddChekin/BannerText";
import AddCheckInButton from "./components/AddChekin/AddCheckInButton";
import Image from "next/image"; 
interface CheckIn {
  id: string;
  title: string;
  imageUrl: string;
  date: string;
  owner: string;
}

export default function Dashboard() {
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCheckIn, setSelectedCheckIn] = useState<CheckIn | null>(null);

  useEffect(() => {
    fetchCheckIns();
  }, []);

  // Fetch Check-ins from Firestore
  const fetchCheckIns = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "checkIns"));
      const checkInsData = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() } as CheckIn)
      );
      setCheckIns(checkInsData);
    } catch (error) {
      console.error("Error fetching check-ins:", error);
    }
  };

  // Handle adding a new check-in
  const handleAddCheckIn = async (newCheckIn: Omit<CheckIn, "id">) => {
    try {
      await addDoc(collection(db, "checkIns"), newCheckIn);
      fetchCheckIns(); // Refetch data after adding
    } catch (error) {
      console.error("Error adding check-in:", error);
    }
    setIsAddModalOpen(false);
  };

  return (
    <Container maxWidth="lg">
      {/* Banner Section */}
      <Box
        sx={{
          position: "relative",
          height: "250px",
          borderRadius: "20px",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Image
          src="/banner.png"
          alt="Banner"
          layout="fill"
          objectFit="cover"
          priority
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "30px",
          }}
        >
          <BannerText />
          <AddCheckInButton onClick={() => setIsAddModalOpen(true)} />
        </Box>
      </Box>

      {/* CheckIn Section */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4, fontWeight: "bold" }}>
        Added Check-Ins
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {checkIns.map((checkIn) => (
          <Grid item xs={12} sm={6} md={4} key={checkIn.id}>
            <CheckInCard checkIn={checkIn} />
          </Grid>
        ))}
      </Grid>
      {/* Modals */}
      <AddCheckInModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddCheckIn}
      />

      {selectedCheckIn && (
        <ProjectDetailsModal
          project={selectedCheckIn}
          onClose={() => setSelectedCheckIn(null)}
        />
      )}
    </Container>
  );
}
