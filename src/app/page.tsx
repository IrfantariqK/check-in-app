import Header from "@/components/Header/Header";
import Dashboard from "@/Dashboard";

export default function Home() {
  return (
    <div>
      <Header />
      {/* Adding margin to create a gap between Header and Dashboard */}
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        {" "}
        {/* Adjust both values as needed */}
        <Dashboard />
      </div>
    </div>
  );
}
