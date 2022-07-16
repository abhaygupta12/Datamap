function Cards(props) {
  return (
    <>
      <div className="cards">
        <img src={props.img} alt="" />
        <h1>{props.title}</h1>
        <p>
          Just do the thing which are most important and lesitimate in reference
          of services
        </p>
        <a href={props.link}>Read More>></a>
      </div>
    </>
  );
}
export default Cards;
