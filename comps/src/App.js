import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5">
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>See Deal!</Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary>Something!</Button>
      </div>
    </div>
  );
}

export default App;
