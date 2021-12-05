import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';

ReactDOM.render(
      <>
      <h1 className="heading">List of Top 6 Netflix Movies</h1>
          <Card
                imgsrc="https://dark.netflix.io/share/global.png"
                title= "A Netflix Original Series"
                sname="Dark"
                link="https://www.netflix.com/in/title/80100172"
          />,
          <Card
                imgsrc="https://m.media-amazon.com/images/M/MV5BNGQxMDcyOTEtZWZkNi00NzgwLWEzNjQtZmFhMGY5ZGRlMTdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                title= "A Netflix Original Series"
                sname="Extra Curricular"
                link="https://www.netflix.com/in/title/80990668"
          />, 
          <Card
                imgsrc="https://i.insider.com/5c2fd37abd7730747b191c69?width=700"
                title= "A Netflix Original Series"
                sname="Stranger Things"
                link="https://www.netflix.com/in/title/80057281"
          /> 
          <Card
                imgsrc="https://www.businessinsider.in/photo/87137677/case-study-how-netflix-india-created-buzz-around-kota-factorys-season-2-launch-by-leveraging-jeetu-bhaiyas-fanbase.jpg?imgsize=177006"
                title= "A Netflix Original Series"
                sname="Kota Factory 2"
                link="https://www.netflix.com/in/title/81249783"
          />
          <Card
                imgsrc="https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                title= "A Netflix Original Series"
                sname="Red Notice"
                link="https://www.netflix.com/in/title/81161626"
          />
          <Card
                imgsrc="https://m.media-amazon.com/images/M/MV5BZTIxNzM3M2MtM2QyZC00MGM2LTkxNWUtYWQ2OTIyOTIxZTc2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
                title= "A Netflix Original Series"
                sname="A boy called Christmas"
                link="https://www.netflix.com/in/title/81029733"
          />  
      </>
      ,document.getElementById('root')
);