import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://www.studying-in-uk.org/wp-content/uploads/2019/05/study-in-london.jpg",
    address: "London Ave, London",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://www.studying-in-uk.org/wp-content/uploads/2019/05/study-in-london.jpg",
    address: "London Ave, London",
    description: "This is a second meetup",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  // fetch data from a database or an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
