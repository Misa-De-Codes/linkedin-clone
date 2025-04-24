import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import FeedIcon from '@mui/icons-material/Feed';
import Post from './Post';

// firebase
import { db } from '../firebase.js';
import { collection, addDoc, getDocs, orderBy, Timestamp, query, documentId } from 'firebase/firestore';


function Feed() {
  const [input, setInput] = useState("")
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getUsers() {
      try {
        // 💥 FIXED: orderBy is inside query()
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
  
        const postsArray = [];
        querySnapshot.forEach((doc) =>
          postsArray.push({
            id: doc.id,
            data: doc.data()
          })
        );
        setPosts(postsArray);
  
      } catch (e) {
        console.error("Error fetching users:", e);
      }
    }
  
    getUsers();
  }, [input]);


  // FOR SENDING POSTS TO THE DATABASE OF FIRESTORE
  const sendPost = e => {
    e.preventDefault();

    if (!input) return;
    setInput("")
    
    async function addUser() {
      try {
        const number = Math.random()

        const docRef = await addDoc(collection(db, 'posts'), {
          name: `musa`,
          email: `musa@gmail.com`,
          message: input,
          photoUrl: `https://i.pravatar.cc/60?${number}`,
          createdAt: Timestamp.now()
        });

      } catch (e) {
        console.error('Error adding document:', e.name);
      }
    }
    addUser()
  }

  return (
    <div className=" flex flex-col flex-3/5 min-w-[350px] max-w-[600px] m-10 md:m-0 md:mr-10 lg:mr-0 mt-18 md:mt-20 ">
      <div className='mb-3 px-5 pt-5 bg-gray-50 rounded-2xl shadow-md'>
        <div className="mb-5 rounded-2xl font-serif border-1 border-gray-300 hover:border-gray-500">
          <form className='flex p-2 gap-3 justify-around'>
            <CreateIcon />
            <input className="w-full ml-1.5 outline-0 "
              onChange={(e) => setInput(e.target.value)}
              value={input}
              required
              type='text'
            ></input>
            <button onClick={sendPost} ></button>
          </form>
        </div>
        <div className="flex justify-around ">
          <InputOptions Icon={InsertPhotoIcon} title={"Photo"} color={"blue"} />
          <InputOptions Icon={SubscriptionsIcon} title={"Video"} color={"yellow"} />
          <InputOptions Icon={EventAvailableIcon} title={"Event"} color={"gray"} />
          <InputOptions Icon={FeedIcon} title={"Write article"} color={"green"} />
        </div>
      </div>

      <div >
        {posts?.length > 0 ? (
          posts.map(({ id, data: { name, email, message, photoUrl, createdAt } }) => (
            <Post
              key={id}
              name={name}
              email={email}
              message={message}
              photoUrl={photoUrl}
            />
          ))
        ) : <div className="flex flex-col items-center justify-center py-5 rounded-2xl bg-gray-50 text-gray-800">
              <h1 className="text-6xl font-bold mb-4 text-red-600">404</h1>
              <p className="text-xl font-semibold mb-2">Page Not Found</p>
              <p className="text-sm text-gray-500 mb-6">U-Um... the page you're looking for doesn't exist...</p>
              <a href="/" className="px-4 py-2 bg-blue-500 font-semibold hover:bg-blue-600 text-white rounded-lg transition duration-300">
                G-Go Home!
              </a>
            </div>}
      </div>
    </div>
  )
}

export default Feed