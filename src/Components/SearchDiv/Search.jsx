
import { AiOutlineSearch } from 'react-icons/ai';
// import { BsHouseDoor, } from 'react-icons/bs';
// import { CiLocationOn, } from 'react-icons/ci';


const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action="">
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap- [10px] bg-blue-800 p-5 shadow-lg shadow-greyIsh-700'>

          <div className='flex gap-5 items-center'>
            <AiOutlineSearch className='text-[30px] icon text-white ' />
            <input type="text" className='bg-transparent text-white focus:outline-none w-[100%]' placeholder='Search Jobs Here...' />
          </div>

          <button className=' bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>GO</button>

        </div>
      </form>


      <div className='secDiv flex items-center gap-10 justify-center'>
        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="relevance" className=' text-[#808080] font-semibold' >Sort by: </label>


          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'> <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>

        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="type" className=' text-[#808080] font-semibold' >Type: </label>


          <select name="" id="type" className='bg-white rounded-[3px] px-4 py-1'> <option value="">Full Time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
            <option value="">Part-Time</option>
          </select>

        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="level" className=' text-[#808080] font-semibold' >Level: </label>


          <select name="" id="level" className='bg-white rounded-[3px] px-4 py-1'> <option value="">Senior</option>
            <option value="">Junior</option>
            <option value="">Student</option>
            <option value="">Advocate</option>
          </select>

        </div>

        <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
      </div >
    </div >
  )
}

export default Search