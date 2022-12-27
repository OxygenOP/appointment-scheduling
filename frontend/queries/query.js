import { gql } from "@apollo/client";

export const getAppointments = gql`
  query {
    appointments {
      data {
        id
        attributes {
          name

          StartTime
          EndTime
          engineer {
            data {
              id
              attributes {
                name
              }
            }
          }
          costs {
            data {
              id
              attributes {
                price
                duration
              }
            }
          }
        }
      }
    }
  }
`;
