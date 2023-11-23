const Box = (props) => {
  //  Write your code here.
  const { size, className } = props;
  const containerClassName = `box ${className}`;
  return (
    <div className={containerClassName}>
      <p className="box-title">{size}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="boxes">Boxes</h1>
    <div className="boxes-container">
      <Box size="Small" className="box1" />
      <Box size="Medium" className="box2" />
      <Box size="Large" className="box3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
