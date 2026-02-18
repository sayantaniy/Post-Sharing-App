import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createpost = () => {

    
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        await axios.post('http://localhost:3000/createpost', formData).then((response)=>{
            navigate('/feed')
        }).catch((error)=>{
            console.log(error)
        })
        
        console.log(response.data)
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white px-4">
      <div className="w-full max-w-md bg-zinc-800 rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create Post
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Image Upload */}
          <label className="flex flex-col gap-2 text-sm text-zinc-300 border border-zinc-500 py-40 rounded-4xl p-6 items-center justify-center">
            Upload Image
            <input
              type="file"
              name="image"
              accept="image/*"
              className="file:mr-4 file:rounded-full file:border-0
                         file:bg-blue-700 file:px-4 file:py-2
                         file:text-sm file:font-semibold
                         file:text-white hover:file:bg-blue-800
                         cursor-pointer"
            />
          </label>

          {/* Caption */}
          <input
            type="text"
            name="caption"
            placeholder="Write a caption..."
            className="bg-transparent border-b-2 border-zinc-600
                       focus:border-blue-600 outline-none
                       px-1 py-2 text-white placeholder-zinc-400"
          />

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 bg-blue-700 hover:bg-blue-800
                       transition-colors duration-200
                       text-white font-semibold
                       rounded-xl py-2"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createpost;
