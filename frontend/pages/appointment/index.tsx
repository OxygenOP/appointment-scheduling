import { useQuery } from "@apollo/client/react";
import React from "react";
import { getAppointments } from "../../queries/query";
import AppoinmentCard from "../../components/appointment/appoinmentCard";

type Props = {};

function index({}: Props) {
  const { data, error, loading } = useQuery(getAppointments);
  if (data) {
    console.log(data.appointments.data);
  }

  return (
    <>
      {data ? (
        <div>
          {data.appointments.data.map((item: any) => (
            <AppoinmentCard
              name={item.attributes.name}
              engineerName={item.attributes.engineer.data.attributes.name}
              startTime={item.attributes.StartTime}
              endTime={item.attributes.EndTime}
              costs={item.attributes.costs.data}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default index;
