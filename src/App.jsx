import { useState } from "react";

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

import { Bar } from 'react-chartjs-2';

import "./assets/css/app.css";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function App() {
  const [showDialog,setShowDialog] = useState(false);
  const [currentSong, setcurrentSong] = useState(0);
  
  const data = [
    {
      image: "https://i.scdn.co/image/ab67616d0000b273f46c300faaf2220909c11028",
      title: "Death Bed",
      unique_plays: "5000",
      total_plays: "15000",
      completion_rate: "20",
    },
    {
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440",
      title: "Bad Liar",
      unique_plays: "5000",
      total_plays: "10000",
      completion_rate: "50",
    },
    {
      image: "https://indiater.com/wp-content/uploads/2021/06/Free-Music-Album-Cover-Art-Banner-Photoshop-Template.jpg",
      title: "Death Bed",
      unique_plays: "5000",
      total_plays: "10000",
      completion_rate: "70",
    },
    {
      image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/best-album-cover-music-art-trap-mixtape-rap-design-template-91a5dff1434d0a0a9bf1bd48508d7345_screen.jpg?ts=1653248261",
      title: "Bad Liar",
      unique_plays: "5000",
      total_plays: "10000",
      completion_rate: "50",
    },{
      image: "https://i.pinimg.com/474x/ea/e9/fb/eae9fb618fc3af3df1cf4ab056613b34--roy-wood-music-artwork.jpg",
      title: "Death Bed",
      unique_plays: "5000",
      total_plays: "10000",
      completion_rate: "55",
    },
    {
      image: "https://i.pinimg.com/736x/07/ed/4a/07ed4a6b2d04a608cd78a94dffedff3f.jpg",
      title: "Bad Liar",
      unique_plays: "5000",
      total_plays: "10000",
      completion_rate: "50",
    },
  ];

  const song = {
    labels : ['Unique Views','Total Views'],
    datasets : [
      {
        label : 'Views',
        data: [data[currentSong].unique_plays,data[currentSong].total_plays],
        backgroundColor : 'green',
        borderWidth : 1,
        borderColor : 'black',
      }
    ]
  }
  
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Views Statistics for data[currentSong].title"
      }
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">MUSIK</div>
      </nav>
      <div className="container" style={showDialog?{"height":"100vh","overflow-y":"hidden"} : {}}>
        {data.map((song, index) => {
          return <div key={index} className="card">
          
          <div className="image-container"><img className="image" src={song.image} height={250} width={250} alt="" /></div>
          <div className="title">{song.title}</div>
          <div className="progress-container"><progress max="100" value={song.completion_rate} data-label={`${song.completion_rate}` + '%'} className="progressbar"></progress></div>
          <div className="btn-container"><button className="btn" onClick={()=>{setShowDialog(!showDialog);setcurrentSong(index)}}>Stats</button></div>
          </div>;
        })}
      </div>
      <div className="modal" style={showDialog ? {'z-index':"1"} : {'z-index':"-1"}}>
        <div className="title"><h1>{data[currentSong].title}</h1></div>
        <div className="chart-container"><label>Stats for {data[currentSong].title} </label><Bar className="chart" data={song} options={options}/></div>
        <div className="progress-container"><label>Completion Rate</label><progress max="100" value={data[currentSong].completion_rate} data-label={`${data[currentSong].completion_rate}` + '%'} className="progressbar"></progress></div>
        <div className="btn-container"><button className="btn close-btn" onClick={()=>{setShowDialog(!showDialog)}}>Close</button></div>
      </div>
    </>
  );
}

export default App;
