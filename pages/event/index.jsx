import ev from "./events.json";

const index = () => {
  const eventDetails = ev.eventImage.eventDetails;
  // const activeEvent = eventDetails.filter((event) => event.status === "active");
  // const pastEvent = eventDetails.filter((event) => event.status === "past");
  // const upcomingEvent = eventDetails.filter(
  //   (event) => event.status === "upcoming"
  // );
  // console.log(activeEvent);
  // console.log(pastEvent);
  // console.log(upcomingEvent);

  // if (!eventDetails) {
  //   return <div>Loading...</div>;
  // }
  // if (eventDetails.length === 0) {
  //   return <div>No Event Found</div>;
  // }
  if(eventDetails.status === "upcoming"){
    return(
      <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center my-4">Events</h1>
      <br />
      <br />
      <h2 className="text-3xl  text-center my-4">Upcoming Event</h2>
      <div className="">
        <p className="text-xl text-center">There is no upcomung event yet</p>
      </div>
      <br />
      <br />
      <h2 className="text-3xl  text-center my-4">Past Event</h2>
      <div className="grid grid-cols-3 gap-6 ">
        {eventDetails.map((event) => (
          <div className="flex flex-col justify-center items-center gap-8 text-center" key={event.id}>
            <div className="">
              <img

                className="h-48 w-48"
                src={event.imageUrl}
                alt={event.title}
              />
              <div className="">
                <h5 className="text-center capitalize">{event.title}</h5>
                <p className="">{event.description}</p>
                <button className="bg-green-800 px-4 py-2 rounded-lg shadow-xl">{event.status}</button>
                </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
    );
  }
  return (
    <div className="max-w-screen-lg mx-auto px-4 md:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-center my-4">Events</h1>
      <br />
      <br />
      <h2 className="text-3xl  text-center my-4">Upcoming Event</h2>
      <div className="">
        <p className="text-xl text-center">There is no upcomung event yet</p>
      </div>
      <br />
      <br />
      <h2 className="text-3xl  text-center my-4">Past Event</h2>
      <div className="grid grid-cols-3 gap-6 ">
        {eventDetails.map((event) => (
          <div className="flex flex-col justify-center items-center gap-8 text-center" key={event.id}>
            <div className="">
              <img
                className="h-48 w-48"
                src={event.imageUrl}
                alt={event.title}
              />
              <div className="">
                <h5 className="text-center capitalize">{event.title}</h5>
                <p className="">{event.description}</p>
                <button className="bg-red-800 px-4 py-2 rounded-lg shadow-xl">{event.status}</button>

              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/events");
  const data = await res.json();
  return {
    props: { events: data },
  };
};


export default index;
