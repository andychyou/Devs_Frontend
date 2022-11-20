import React from 'react';
import { UpdatedFriendsDot, UpdatedFriendsImg } from '../../styledComponents';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getCookie } from '../../config/cookie';
import { APIURL } from '../../config/key';
import axios from 'axios';
import { AxiosPromise } from 'axios';


const UpdatedFriendsBar = () => {
    //mainfeed
    const [feed, setFeed] = useState([]);
    const [updatedId, setUpdatedId] = useState([]);
    //this component
    const [user1, setUser1] = useState([]);
    const [userlist,setUserlist] = useState([])
    const getMainfeed = () => {
        var feed_list = []
        axios.get(`${APIURL}/mainfeed/`,{headers:{Authorization: 'token '+getCookie("token")} })
        .then(res => {
        for(let i = 0 ; i < res.data.feed.length; i++){
            if(i % 2 == 1){
            feed_list.push(res.data.feed[i])
            }
        }
        setFeed(feed_list)
        setUpdatedId(res.data.updated_id)
        })
        .catch(err => {
        console.log("main api error")
        console.log(err)
        })
    }

    const getUserInfo = async () => {
        var li = []
        if(updatedId[0]){
            const res = await axios.get(`${APIURL}/account/user/${updatedId[0]}`);
            if (res.status == 200) {
                li.push(res.data)
                // setUser1(res.data)
            } else {
                console.log("get user info fail");
            }
        }
        if(updatedId[1]){
            const res = await axios.get(`${APIURL}/account/user/${updatedId[1]}`);
            if (res.status == 200) {
                li.push(res.data)
                // setUser1(res.data)
            } else {
                console.log("get user info fail");
            }
        }
        if(updatedId[2]){
            const res = await axios.get(`${APIURL}/account/user/${updatedId[2]}`);
            if (res.status == 200) {
                li.push(res.data)
                // setUser1(res.data)
            } else {
                console.log("get user info fail");
            }
        }
        if(updatedId[3]){
            const res = await axios.get(`${APIURL}/account/user/${updatedId[3]}`);
            if (res.status == 200) {
                li.push(res.data)
                // setUser1(res.data)
            } else {
                console.log("get user info fail");
            }
        }
        if(updatedId[4]){
            const res = await axios.get(`${APIURL}/account/user/${updatedId[4]}`);
            if (res.status == 200) {
                li.push(res.data)
                // setUser1(res.data)
            } else {
                console.log("get user info fail");
            }
        }
        setUserlist(li)
    }

    useEffect(() => { 
    getMainfeed() 
    }, [])
    //updatedId값을 setstate한 다음 순서에 getUserInfo를 하고 싶을 때
    useEffect(() => {
    if(updatedId){ getUserInfo() } 
    }, [updatedId])
    
    const navigate = useNavigate();
    const goProfile = (userid) => {
        navigate(`/profile/${userid}`);
    };

  return (
    <>
        <section>
                <div style={{gap:'10px', alignItems:'center' ,justifyContent:'center', display:'flex'}}> 
                    {userlist[0] == undefined &&
                    <span>
                        아직 업데이트한 친구가 없어요
                    </span>
                    }       
                    {
                    userlist[0] != undefined &&
                    <div style={{cursor: 'pointer'}} onClick={() => goProfile(userlist[0].id)}>
                        <UpdatedFriendsImg src={userlist[0].image}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div>
                    }   
                    {userlist[1] != undefined &&
                    <div style={{cursor: 'pointer'}} onClick={() => goProfile(userlist[1].id)}>
                        <UpdatedFriendsImg src={userlist[1].image}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div>
                    }
                    {userlist[2] != undefined &&
                    <div style={{cursor: 'pointer'}} onClick={() => goProfile(userlist[2].id)}>
                        <UpdatedFriendsImg src={userlist[2].image}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div>
                    }
                    {userlist[3] != undefined &&
                    <div style={{cursor: 'pointer'}} onClick={() => goProfile(userlist[3].id)}>
                        <UpdatedFriendsImg src={userlist[3].image}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div>
                    }
                    {userlist[4] != undefined &&
                    <div style={{cursor: 'pointer'}} onClick={() => goProfile(userlist[4].id)}>
                        <UpdatedFriendsImg src={userlist[4].image}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div>
                    }
                 {/* <div style={{cursor: 'pointer'}}>
                        <UpdatedFriendsImg src={require('../../static/profile-img.png')}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div>
                    <div style={{cursor: 'pointer'}}>
                        <UpdatedFriendsImg src={require('../../static/profile-img.png')}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div>
                    <div style={{cursor: 'pointer'}}>
                        <UpdatedFriendsImg src={require('../../static/profile-img.png')}></UpdatedFriendsImg>
                        <UpdatedFriendsDot></UpdatedFriendsDot>
                    </div> */}
                </div> 
           
         
        </section>

       
    </>
  );
};

export default React.memo(UpdatedFriendsBar);