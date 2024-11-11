import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col border border-black p-10">
      <button className="border-black border p-2 m-2 rounded-md hover:bg-gray-300 transition-all duration-100" onClick={() => {
        navigate('/user');
      }}>
        I am a User
      </button>
      <button className="border-black border p-2 m-2 rounded-md hover:bg-gray-300 transition-all duration-100" onClick={() => {
        navigate('/societyhead');
      }}>
        I am a society head
      </button>
      </div>
    </div>
  );
}

export default App;
