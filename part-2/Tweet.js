function Tweet(props) {
  return (
    <div>
      <span>{props.name}</span>
      <br />
      <span>@{props.username}</span>
      <br />
      <span>{props.date}</span>
      <p>{props.message}</p>
    </div>
  );
}
