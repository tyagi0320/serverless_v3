import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SocietyHead() {
    const navigate = useNavigate();
    const [societies, setSocieties] = useState(["Knuth", "NSS", "Optica"]);

  return (
    <div>
        <div className="p-7 text-2xl font-bold">
            Society Head
        </div>

        <div className="p-10">
            {
                societies.map((e,i) => {
                    return <div className="p-4">
                        <button className="border border-black px-2 text-lg hover:bg-gray-400" onClick={() => {
                            navigate(`/society?name=${e}`);
                        }}> {e} </button>
                    </div>
                })
            }
        </div>

    </div>
  )
}

export default SocietyHead