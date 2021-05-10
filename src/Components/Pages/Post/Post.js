import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import AfterLoginNavbar from '../../Molecules/Navigation/afterLoginNavbar';
import firebase from '../../../Config/Firebase/index';
import $ from 'jquery';


const Post = () => {
   let history = useHistory()
    let img, nama;
    let user = firebase.auth().currentUser;


    if(user != null){
        nama = user.displayName
    }

    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            let img_index = 1;
            let storageRef = firebase.storage().ref();
            let listRef = storageRef.child(`Users/${user.uid}`);
            listRef.listAll().then((result) => {
                console.log(result);
                result.items.forEach((imgRef) => {
                    imgRef.getDownloadURL().then((url) => {
                        let img = $('<img />').attr({
                            'id' : 'poster'+img_index,
                            'src' : url,
                            'alt' : 'image',
                            'width' : 550,
                            'height' : 550
                            

                        }).appendTo('#img-area');
                        img_index++;
                    });
                })
            }).catch((error) => {
                console.log(error)
            })
            // let storage = firebase.storage();
            // let storageRef = storage.ref();
            // storageRef.child(`Users/${user.uid}`).listAll()
            // .then((result) => {
            //     result.items.forEach((imageRef) => {
            //         i++;

            //         displayImage(i, imageRef);
            //         // console.log("Image Reference" + imageRef.toString());
            //     })
 
            // })

        }else {
            console.log("Not Log in");
            history.push('/');
        }
    })

    return (
        <>
            <AfterLoginNavbar />
            <div className="container mt-5">
                <div className="row justify-content-center mt-5">
                    <div className="row align-items-start">
                    <h1>{nama} Photos</h1>
                    <form>
                        <form className="text-center border border-light rounded border-4 p-5">
                            <div>
                                <div className="row align-items-start" id="img-area"></div>
                            </div>   
                    </form>
                    </form>
                    </div>
                </div> 
                </div>
 
            <h1 className="text-center mt-5 ">All the post foto will be sent here</h1>


        </>
    )
}

export default Post;
