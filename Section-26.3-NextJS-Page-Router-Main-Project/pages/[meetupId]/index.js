import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {
  const meetupDetails = props.meetupDetails;

  return (
    <MeetupDetail
      image={meetupDetails.image}
      title={meetupDetails.title}
      address={meetupDetails.address}
      description={meetupDetails.description}
    />
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  // fetch data

  return {
    props: {
      meetupDetails: {
        id: meetupId,
        image:
          "https://www.studying-in-uk.org/wp-content/uploads/2019/05/study-in-london.jpg",
        title: "First meetup in London",
        address: "Some street in London, London",
        description: "The meetup description",
      },
    },
  };
}
