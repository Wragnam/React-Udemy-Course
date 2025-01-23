import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
