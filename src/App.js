import Button from "./components/Button";

function App() {
  return (
      <div className="flex gap-2 mt-2">
          <Button text=" Button" color="blueLight" size="lg" />
          <Button text=" Button" color="blueLight" size="lg" isLoading={true} />
          <Button text=" Button" color="blueLight" size="lg" disabled={true} />
          <Button text=" Button" color="blueLight" size="xlg" disabled={true} />
          <Button text=" Button" color="blueLight" size="sm" disabled={true} />
          <Button text=" Button" color="red" size="sm" />
      </div>
  )
}

export default App;
