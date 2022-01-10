function App() {
  return (
    <div>
      <Person
        name="Boba Fett"
        age={63}
        hobbies={['Bounty hunting', 'Wearing helmets', 'Disintergrations']}
      />
      <Person
        name="The Kid"
        age={17}
        hobbies={['Moving rocks', 'Riding a pod', 'Eating stolen food']}
      />
      <Person
        name="Anakin Skywalker"
        age={53}
        hobbies={['Handstands', 'Fencing', 'Wearing hoodies']}
      />
    </div>
  );
}
