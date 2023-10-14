const ClientItem = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item.avatar} />
        <p>{item.title}</p>
        <img src={item.stars} />
      </div>
      <p>{item.review}</p>
      <p>{item.emoji}</p>
    </div>
  );
};

export default ClientItem;
