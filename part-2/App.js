function App() {
  return (
    <div>
      <Tweet
        name="Bob Saget"
        username="Aristocrats"
        date={new Date().toDateString()}
        message="RIP a legend"
      />
      <Tweet
        name="Pat Mahomes"
        username="Mahomeboy15"
        date={new Date().toDateString()}
        message="Superbowl or Bust"
      />
      <Tweet
        name="John Oliver"
        username="LastWeekTonight"
        date={new Date().toDateString()}
        message="I am the ultimate troll!!!"
      />
    </div>
  );
}
