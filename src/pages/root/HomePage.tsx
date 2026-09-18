import { MoveHorizontal } from "lucide-react";
import React from "react";
import Button from "../../components/Button";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Homepage = () => {
  const routesService = async () => {
    const response = await axios.get("http://localhost:4000/routes");
    return response.data;
  };

  const route = useQuery({ queryFn: routesService, queryKey: ["routes"] });

  console.log(route.data);

  if (route.isLoading) {
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
          <option value="" disabled selected>
            Where from?
          </option>
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
    </main>
  );
};

export default Homepage;
