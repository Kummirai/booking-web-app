import Card from "@/components/blocks/Card";
import Hero from "@/components/blocks/Hero";

export default function Home() {
  const rooms = [
    {
      id: 1,
      name: "Cozy Single Room",
      pricePerNight: 89,
      rating: 4.5,
      beds: 1,
      bathrooms: 1,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 2,
      name: "Deluxe Family Suite",
      pricePerNight: 220,
      rating: 4.9,
      beds: 4,
      bathrooms: 2,
      image:
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 3,
      name: "Executive King Room",
      pricePerNight: 185,
      rating: 4.8,
      beds: 2,
      bathrooms: 1,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 4,
      name: "Garden View Room",
      pricePerNight: 135,
      rating: 4.6,
      beds: 2,
      bathrooms: 1,
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 5,
      name: "Penthouse Suite",
      pricePerNight: 350,
      rating: 5.0,
      beds: 3,
      bathrooms: 2,
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    },
    {
      id: 6,
      name: "Ocean View Double",
      pricePerNight: 175,
      rating: 4.7,
      beds: 2,
      bathrooms: 1,
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <>
      <Hero />
      <div className="grid grid-cols-3 max-w-5xl gap-10 mx-auto py-20">
        {rooms.map((room) => {
          return <Card key={room.id} {...room} />;
        })}
      </div>
    </>
  );
}
