import { MoveHorizontal } from "lucide-react";
import React from "react";
import Button from "../../components/Button";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { apiService } from "../../services/apiService";
import type { journey } from "../../types";

const Homepage = () => {
  const journeys = async () => {
    const response = await apiService({
      method: "get",
      url: "/journeys/discover",
    });

    return response;
  };

  const discoverJourney = useQuery({
    queryKey: ["discover"],
    queryFn: journeys,
  });

  console.log(discoverJourney?.data);
  if (!discoverJourney.data) {
    return null;
  }
  return (
    <main className="pt-14 px-5  space-y-3.5   text-white">
      <h2 className="text-3xl font-bold text-center">Pick your route</h2>
      <div className="flex justify-center gap-4 items-center">
        <select
          id="from"
          className="border border-gray-300  text-white rounded-md p-2"
        >
          <option value="">Where from?</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <MoveHorizontal />
        <select
          id="to"
          className="border border-gray-300  text-white rounded-md p-2"
        >
          <option value="" disabled selected>
            Where to?
          </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <Button variant="tertiary" label="Go" onClick={() => {}} />
      </div>

      <div>
        <h2 className="text-2xl font-semibold pt-14">Available Routes</h2>
      </div>

      <div>
        {discoverJourney.data.routes.map((route: journey) => (
          <div>
            <h2>{route.name}</h2>{" "}
            <span>
              {route.mode === "danfo" && (
                <img height={40} width={40} src="/danfo.jpg" />
              )}
              {route.mode === "brt" && (
                <img height={40} width={40} src="/danfo.jpg" />
              )}
              {route.mode === "keke" && (
                <img height={40} width={40} src="/danfo.jpg" />
              )}
              {route.mode === "okada" && (
                <img height={40} width={40} src="/danfo.jpg" />
              )}
              {route.mode === "ferry" && (
                <img height={40} width={40} src="/danfo.jpg" />
              )}
              {route.mode === "rail" && (
                <img height={40} width={40} src="/danfo.jpg" />
              )}
            </span>
            <p>direction {route.direction}</p>
            <p>from {route.from.name} </p>
            <p>to {route.to.name}</p>
            <p>via {route.via[0].name}</p>
            <p>
              fare: {route.estimatedFare.range.min} -{" "}
              {route.estimatedFare.range.max}
            </p>
            <p>period: {route.estimatedFare.period} </p>
            <p>distance: {route.distanceKm} km</p>
            <p>time: {route.estimatedDurationMinutes} minutes</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Homepage;
