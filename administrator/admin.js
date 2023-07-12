
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, set, child, get, update, remove } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
import { getStorage , ref as sRef, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";


const newsImage = document.getElementById("file");
const newsHeading = document.getElementById("news-heading");
const newsBody = document.getElementById("news-body");
const newsCategory = document.getElementById("news-category");
const newsAuthor = document.getElementById("news-author");
const newsDate = document.getElementById("news-date-time");
const submitBtn = document.getElementById("submit");
const cardNewsBody = document.getElementsByClassName("newsText")[0];
const cardNewsHeading = document.getElementsByClassName("news-heading")[0];
const cardNewsAuthor = document.getElementsByClassName("news-author")[0];
const cardNewsDate = document.getElementsByClassName("news-date")[0];
const cardNewsImage = document.getElementsByClassName("image")[0];


 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBfAtVd60NddZg4BQpe4PSUbzwb4vqKAzA",
   authDomain: "newsapp-daabf.firebaseapp.com",
   databaseURL: "https://newsapp-daabf-default-rtdb.firebaseio.com",
   projectId: "newsapp-daabf",
   storageBucket: "newsapp-daabf.appspot.com",
   messagingSenderId: "609888743253",
   appId: "1:609888743253:web:cf81bbc7a441d9720349dc",
   measurementId: "G-3TV5EG4BEQ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 let files = [];
 let reader = new FileReader();
 
 const realdb = getDatabase();
 



const news = {
  imageURL : "",
  category : "",
  heading : "",
  content :"",
  author :"",
  date : ""
};



  function newsBodyFunc (e) {
     
    cardNewsBody.innerText = e.target.value;
    news.content = e.target.value;
    console.log(news)
  }

  function newsHeadingFunc (e) {
    cardNewsHeading.innerText= e.target.value;
    news.heading = e.target.value;
  }
  function newsAuthorFunc (e) {
    cardNewsAuthor.innerText= e.target.value;
    news.author = e.target.value;
  }
  function newsDateFunc (e) {
    cardNewsDate.innerText= (e.target.value);
    news.date = (e.target.value);
  }

// const  submitBtnFunc = async (e) => {
//       e.preventDefault();
      

//       res = await fetch('https://newsapp-daabf-default-rtdb.firebaseio.com/newsappdata.json',
//       {
//         method:"POST",
//         headers: {
//           "Content-Type" : "applicaton/json",
//         },
//         body: JSON.stringify(news)
//       }
//       )


//   }

 function newsCategoryFunc (e) {
        news.category = e.target.value;  
  }

  function newsImageFunc (e) {
    files = e.target.files;
    reader.readAsDataURL(files[0]);


    async function uploadImage () {

      let imgToUpload = files[0];
      const metaData = {
       contentType: imgToUpload.type
      }

      const storage = getStorage();
      const storageRef = sRef (storage, "Images/");
      const upload = uploadBytesResumable(storageRef, imgToUpload, metaData);

      upload.on("state-changed", (snapshot) => {
        console.log("uploading")
      }),
      (error) => {
        alert("Error: Image not uploaded")
      }

      
    }
   submitBtn.addEventListener("click", ()=>{
    console.log("submitted")
    uploadImage();
   })


  }

newsBody.addEventListener("change", newsBodyFunc);

newsHeading.addEventListener("change", newsHeadingFunc);
newsAuthor.addEventListener("change", newsAuthorFunc);
newsDate.addEventListener("change", newsDateFunc);
newsCategory.addEventListener("change", newsCategoryFunc);
newsImage.addEventListener("change", newsImageFunc);

// submitBtn.addEventListener("click", submitBtnFunc)




