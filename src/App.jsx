// function MyButton(){
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function App(){
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton/>
//     </div>
//   );
// }

const user = {
  name: "Cristiano Ronaldo",
  imgurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Cristiano_Ronaldo_WC2022_-_02.jpg",
  imageSize: 150,
  radius: 50
};

function AboutPage(){
  return(
    <>
     <img 
       class="avatar"
       src={user.imgurl}
       alt={"Photo of "+ user.name}
       style={{
          width: user.imageSize,
          height: user.imageSize,
          borderRadius: 50
        }}
       />
     <h1>
      {user.name}
     </h1>
     

     <p>Hello there.<br/>How do you do?</p>
    </>
  )
}

export default function App(){
  return(
    <>
      <h1>INTRO</h1>
      <AboutPage/>
    </>

  )
}