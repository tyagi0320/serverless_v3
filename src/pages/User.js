import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function User() {
  const [socities, setSocities] = useState([{"name": "Optica", "followed": false},{ "name": "Knuth", "followed": false}, {"name": "NSS", "followed": false}]);
    const navigate = useNavigate();
  return (
    <div className='h-screen w-screen p-10'>
        <div className='p-10 text-3xl font-bold'>
            List of Societies
        </div>
        <div className='p-10'>
            {
                socities.map((element, index) => {
                    return <div className='flex p-2' key={index}>
                        <div className='px-4 text-xl'>
                            {element.name}
                        </div>
                        <div className='px-4'>
                            <button className='border border-black px-4 py-1 rounded-md' onClick={() => {
                              navigate(`/societyPosts?name=${element.name}`)
                            }}>
                                view
                            </button>
                        </div>
                        <div className='px-4'>
                            {
                                element.followed &&
                                <button className='border border-black bg-gray-400 px-4 py-1 rounded-md' onClick={() => {
                                    var lists = [];
                                    socities.map((e,i) => {
                                        if(e.name === element.name){
                                            lists.push({"name": element.name, "followed": !element.followed})
                                        } else {
                                            lists.push(e)
                                        }
                                    });
                                    setSocities(lists)
                                }}>
                                    following
                                </button>
                            }

                            {
                                !element.followed &&
                                <button className='border border-black px-4 py-1 rounded-md' onClick={() => {
                                    var lists = [];
                                    socities.map((e,i) => {
                                        if(e.name === element.name){
                                            lists.push({"name": element.name, "followed": !element.followed})
                                        } else {
                                            lists.push(e)
                                        }
                                    });
                                    setSocities(lists)
                                }}>
                                    follow
                                </button>
                            }

                        </div>

                    </div>
                })
            }
        </div>
        <div>
            <button className='border border-black p-3 text-xl rounded-md' onClick={() => {
                navigate('/livechat');
            }}>
                Live chat
            </button>
        </div>
    </div>
  )
}

export default User